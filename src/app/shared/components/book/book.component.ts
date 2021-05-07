import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '@app/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnChanges {
  @Input() book: Book;
  @Input() lastBook: boolean = false;
  @Output() saveBook: EventEmitter<{
    exist: boolean;
    book: Book;
    fileCapa: any;
    fileBook: any;
  }> = new EventEmitter();
  @Output() removeBook: EventEmitter<string> = new EventEmitter();
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  @ViewChild('fileInput2', { static: false }) fileInput2: ElementRef;

  private fileCapa: File;
  private fileBook: File;
  public msgCapa: string = 'Selecione o arquivo';
  public msgBook: string = 'Selecione o arquivo';

  public bookForm: FormGroup;
  public showSaveButton: boolean = true;
  public bookTypes: Array<{ id: number; label: string }> = [
    { id: 1, label: 'Autorais' },
    { id: 2, label: 'Web Livros Sociais' },
    { id: 3, label: 'Organizados' },
    { id: 4, label: 'Livros internacionais' },
    { id: 5, label: 'Capítulos em livros' }
  ];

  constructor(private readonly formBuilder: FormBuilder) {
    this.bookForm = this.formBuilder.group({
      title: [null],
      authors: [null],
      publishingCompany: [null],
      image: [null],
      linkOfBook: [null],
      linkOfStore: [null],
      archive: [null],
      description: [null],
      type: [null, Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const book = changes.book;

    if (book && book.currentValue) {
      this.showSaveButton = false;

      this.bookForm.patchValue({
        title: book.currentValue.title,
        authors: book.currentValue.authors,
        publishingCompany: book.currentValue.publishingCompany,
        image: book.currentValue.image,
        linkOfBook: book.currentValue.linkOfBook,
        linkOfStore: book.currentValue.linkOfStore,
        archive: book.currentValue.archive,
        type: book.currentValue.type,
        description: book.currentValue.description
      });

      this.getFileNameCapa();
      this.getFileNameBook();
      this.registerListenner();
    }
  }

  private registerListenner(): void {
    this.bookForm.valueChanges.subscribe((val: any) => {
      if (val) {
        this.showSaveButton = true;
      }
    });
  }

  public cancelBook(): void {
    this.bookForm.reset();
  }

  public addBook(): void {
    if (this.fileCapa) {
      this.bookForm.patchValue({
        image: null
      });
    }

    if (this.bookForm.valid) {
      if (this.book) {
        this.book = {
          ...this.book,
          ...this.bookForm.getRawValue()
        };

        this.saveBook.emit({
          exist: true,
          book: this.book,
          fileCapa: this.fileCapa || null,
          fileBook: this.fileBook || null
        });
      } else {
        this.saveBook.emit({
          exist: false,
          book: this.bookForm.getRawValue(),
          fileCapa: this.fileCapa || null,
          fileBook: this.fileBook || null
        });
      }

      this.bookForm.reset();
      this.fileCapa = {} as File;
      this.fileBook = {} as File;

      this.getFileNameCapa();
      this.getFileNameBook();
    }
  }

  public deleteBook(): void {
    this.removeBook.emit(this.book._id);
  }

  get bookImage() {
    const image = this.bookForm.get('image').value;
    return image ? this.getLink(image) : 'https://via.placeholder.com/300x400';
  }

  public setFileCapa(files: FileList): void {
    if (files.length > 0) {
      this.showSaveButton = true;
      this.fileCapa = files[0];

      this.getFileNameCapa();
      this.encodeToBase64(this.fileCapa);
    }
  }

  private encodeToBase64(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.bookForm.patchValue({
        image: reader.result
      });
    };
  }

  private getFileNameCapa() {
    if (this.fileCapa && this.fileCapa.name) {
      this.msgCapa = this.fileCapa.name;
    } else {
      this.msgCapa = this.getNameFromFile('image');
    }
  }

  private getFileNameBook() {
    if (this.fileBook && this.fileBook.name) {
      this.msgBook = this.fileBook.name;
    } else {
      this.msgBook = this.getNameFromFile('archive');
    }
  }

  private getNameFromFile(field: string): string {
    const fieldValue = this.bookForm.get(field).value;

    if (fieldValue !== null) {
      return fieldValue.replace(/\w+[/]|[.]\w+/gi, '');
    }

    return 'Selecione o arquivo';
  }

  public setFileBook(files: FileList): void {
    this.showSaveButton = true;
    this.fileBook = files[0];

    this.getFileNameBook();

    if (!this.book) {
      this.encodeToBase64(this.fileCapa);
    }
  }

  public getLink(link: string): string {
    if (!this.fileCapa) {
      return `https://profedmeasantos.s3.us-east-2.amazonaws.com/${link}`;
    }

    return link;
  }
}

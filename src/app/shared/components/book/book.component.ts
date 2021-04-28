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
      title: [null, Validators.required],
      authors: [null, Validators.required],
      publishingCompany: [null, Validators.required],
      image: [null],
      link: [null],
      archive: [null],
      type: [null, Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const book = changes.book;

    if (book && book.currentValue) {
      this.showSaveButton = false;

      console.log(book.currentValue);

      this.bookForm.patchValue({
        title: book.currentValue.title,
        authors: book.currentValue.authors,
        publishingCompany: book.currentValue.publishingCompany,
        image: book.currentValue.image,
        link: book.currentValue.link,
        archive: book.currentValue.archive,
        type: book.currentValue.type
      });

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
    }
  }

  public deleteBook(): void {
    this.removeBook.emit(this.book._id);
  }

  get bookImage() {
    const image = this.bookForm.get('image').value;
    return image ? this.getLink(image) : 'https://via.placeholder.com/300x400';
  }

  public getFileNameCapa(): string {
    return this.fileCapa ? this.fileCapa.name : 'Selecione o arquivo';
  }

  public setFileCapa(files: FileList): void {
    this.showSaveButton = true;
    this.fileCapa = files[0];
  }

  public getFileNameBook(): string {
    return this.fileBook ? this.fileBook.name : 'Selecione o arquivo';
  }

  public setFileBook(files: FileList): void {
    this.showSaveButton = true;
    this.fileBook = files[0];
  }

  public getLink(link: string): string {
    return `https://profedmeasantos.s3.us-east-2.amazonaws.com/${link}`;
  }
}

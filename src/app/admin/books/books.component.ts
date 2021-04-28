import { Component, OnInit } from '@angular/core';
import { Book } from '@app/models/book';
import { BookService } from '@app/service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public books: Array<Book> = [];
  public newBook: boolean = false;
  public loading = false;

  constructor(private readonly bookService: BookService) {}

  ngOnInit() {
    this.listAll();
  }

  listAll() {
    this.loading = true;

    this.bookService.list().subscribe(
      (books: Array<Book>) => {
        this.loading = false;
        this.books = books;
      },
      e => {
        this.loading = false;
        console.log(e);
      }
    );
  }

  public addBook(ev: any): void {
    this.loading = true;

    if (ev.exist) {
      this.bookService.update(ev.book).subscribe(
        () => {
          this.loading = false;
          this.listAll();
        },
        e => {
          this.loading = false;
          console.log(e);
        }
      );
    } else {
      this.bookService.create(ev.book, ev.fileCapa, ev.fileBook).subscribe(
        () => {
          this.loading = false;
          this.listAll();
        },
        e => {
          this.loading = false;
          console.log(e);
        }
      );
    }
  }

  public deleteBook(id: string): void {
    this.loading = true;

    this.bookService.delete(id).subscribe(
      () => {
        this.loading = false;
        this.listAll();
      },
      e => {
        this.loading = false;
        console.log(e);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Book } from '@app/models/book';
import { BookService } from '@app/service/book.service';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public books: Array<Book> = [];
  public newBook: boolean = false;
  public loading = false;

  constructor(
    private readonly bookService: BookService,
    private readonly toastr: ToastrService
  ) {}

  ngOnInit() {
    this.listAll();
  }

  listAll() {
    this.loading = true;

    this.bookService
      .list()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (books: Array<Book>) => (this.books = books),
        e => this.toastr.error()
      );
  }

  public addBook(ev: any): void {
    this.loading = true;

    if (ev.exist) {
      this.bookService
        .update(ev.book, ev.fileCapa, ev.fileBook)
        .pipe(
          finalize(() => {
            this.loading = false;
          })
        )
        .subscribe(
          (res: any) => {
            this.listAll();
            this.toastr.success(res.message);
          },
          e => this.toastr.error()
        );
    } else {
      this.bookService
        .create(ev.book, ev.fileCapa, ev.fileBook)
        .pipe(
          finalize(() => {
            this.loading = false;
          })
        )
        .subscribe(
          (res: any) => {
            this.listAll();
            this.toastr.success(res.message);
          },
          e => this.toastr.error()
        );
    }
  }

  public deleteBook(id: string): void {
    this.loading = true;

    this.bookService
      .delete(id)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (res: any) => {
          this.listAll();
          this.toastr.success(res.message);
        },
        e => this.toastr.error()
      );
  }
}

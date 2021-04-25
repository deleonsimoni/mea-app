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

  constructor(private readonly bookService: BookService) {}

  ngOnInit() {
    this.listAll();
  }

  listAll() {
    this.bookService
      .list()
      .subscribe((books: Array<Book>) => (this.books = books));
  }

  public addBook(ev: any): void {
    if (ev.exist) {
      this.bookService.update(ev.book).subscribe(() => this.listAll());
    } else {
      this.bookService.create(ev.book).subscribe(() => this.listAll());
    }
  }

  public deleteBook(id: string): void {
    this.bookService.delete(id).subscribe(() => this.listAll());
  }
}

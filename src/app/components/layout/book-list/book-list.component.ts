import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book/book.service';
import { Book } from '../../../models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BookService } from '../../../services/book/book.service';
import { Book } from '../../../models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[];
  showSpinner: boolean;

  constructor(
    private bookService: BookService,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.showSpinner = true;
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
      this.showSpinner = false;
    });
  }

  onDelete(book: Book): void {
    if (confirm(`You are going to delete ${book.title}. Are you sure?`)) {
      this.bookService.deleteBook(book.id);
      this.flashMessage.show('The book has been removed successfully!', {
        cssClass: 'alert-success',
        timeout: 3500,
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';
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
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.bookService.getBooks().subscribe((data) => {
        this.books = data;
        this.showSpinner = false;
      });
    }, 2000);
  }

  onDelete(book: Book): void {
    if (confirm(`You are going to delete ${book.title}. Are you sure?`)) {
      this.bookService.deleteBook(book.id);
      if (!this.snackbarService.getflashWorking()) {
        this.snackbarService.showFlashMessage(
          'The book has been removed successfully!',
          'alert-success'
        );
      }
    }
  }
}

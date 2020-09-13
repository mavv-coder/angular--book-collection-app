import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { baseRoutes } from '../../../app-routes.config';
import { BookService } from '../../../services/book/book.service';
import { Book } from 'src/app/models';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  book: Book;

  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.book = {
      author: '',
      title: '',
      pages: null,
      isRead: false,
      isbn: '',
    };
  }

  onSubmit({ value, valid }: { value: Book; valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'error-msg',
        timeout: 4000,
      });
    } else {
      // Show success
      this.flashMessage.show('New client added', {
        cssClass: 'success-msg',
        timeout: 4000,
      });

      this.bookService.addBook(value);

      this.router.navigate(['/']);
    }
  }
}

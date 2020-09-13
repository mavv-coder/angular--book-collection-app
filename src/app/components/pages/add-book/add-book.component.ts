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
  flashWorking: boolean;

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
    this.flashWorking = false;
  }

  setFlashWorking() {
    this.flashWorking = true;
    setTimeout(() => {
      this.flashWorking = false;
    }, 2000);
  }

  showFlashMessage(msg: string, cssClass: string): void {
    this.flashMessage.show(msg, {
      cssClass: cssClass,
      timeout: 2000,
    });
  }

  onSubmit({ value, valid }: { value: Book; valid: boolean }) {
    if (valid) {
      this.bookService.addBook(value);
      if (!this.flashWorking) {
        this.showFlashMessage(
          'The book has been updated successfully!',
          'alert-success'
        );
        this.setFlashWorking();
      }
      this.router.navigate(['/']);
    } else {
      if (!this.flashWorking) {
        this.showFlashMessage('Check the form!', 'alert-error');
        this.setFlashWorking();
      }
    }
  }
}

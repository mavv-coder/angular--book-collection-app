import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { baseRoutes } from '../../../app-routes.config';
import { BookService } from '../../../services/book/book.service';
import { Book } from 'src/app/models';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent implements OnInit {
  id: string;
  book: Book;
  flashWorking: boolean;

  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.flashWorking = false;
    this.book = {
      title: '',
      author: '',
      isbn: '',
      pages: 0,
      id: '',
      isRead: false,
    };
    this.id = this.activatedRoute.snapshot.params['id'];
    this.bookService.getBook(this.id).subscribe((data) => {
      this.book = data;
    });
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

  onSubmit({ value, valid }: { value: Book; valid: boolean }): void {
    if (valid) {
      value.id = this.id;
      this.bookService.updateBook(value);
      if (!this.flashWorking) {
        this.showFlashMessage(
          'The book has been updated successfully!',
          'alert-success'
        );
        this.setFlashWorking();
      }

      this.router.navigate([baseRoutes.dashboard]);
    } else {
      if (!this.flashWorking) {
        this.showFlashMessage('Check the form!', 'alert-error');
        this.setFlashWorking();
      }
    }
  }
}

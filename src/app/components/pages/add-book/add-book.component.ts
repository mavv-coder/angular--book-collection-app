import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';
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
    private snackbarService: SnackbarService
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
    if (valid) {
      this.bookService.addBook(value);
      if (!this.snackbarService.getflashWorking()) {
        this.snackbarService.showFlashMessage(
          'The book has been updated successfully!',
          'alert-success'
        );
      }
      this.router.navigate([baseRoutes.dashboard]);
    } else {
      if (!this.snackbarService.getflashWorking()) {
        this.snackbarService.showFlashMessage('Check the form!', 'alert-error');
      }
    }
  }
}

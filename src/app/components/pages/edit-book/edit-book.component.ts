import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';
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

  constructor(
    private bookService: BookService,
    private router: Router,
    private snackbarService: SnackbarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
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

  onSubmit({ value, valid }: { value: Book; valid: boolean }): void {
    if (valid) {
      value.id = this.id;
      this.bookService.updateBook(value);
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

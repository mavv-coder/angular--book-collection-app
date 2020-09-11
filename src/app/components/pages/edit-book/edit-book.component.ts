import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService
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

  onSubmit({ form, valid }: { form: Book; valid: boolean }): void {}
}

import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book/book.service';
import { Book } from '../../../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  books: Book[];
  readPages: number;
  pagesToRead: number;
  showReadPages: boolean = true;
  showPagesToRead: boolean = true;
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
      this.getPagesToRead();
      this.getReadPages();
    });
  }

  getPagesToRead(): void {
    const notReadBooks = this.books.filter((book) => !book.isRead);
    this.pagesToRead = notReadBooks.reduce((total, book) => {
      return (total += book.pages);
    }, 0);
  }

  getReadPages(): void {
    const readBooks = this.books.filter((book) => book.isRead);
    this.readPages = readBooks.reduce((total, book) => {
      return (total += book.pages);
    }, 0);
  }
}

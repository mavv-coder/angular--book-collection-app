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
  readPages: number = 0;
  pagesToRead: number = 0;
  showReadPages: boolean = true;
  showPagesToRead: boolean = true;
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.bookService.getBooks().subscribe((data) => {
        this.books = data;
        this.getPagesToRead();
        this.getReadPages();
      });
    }, 2000);
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

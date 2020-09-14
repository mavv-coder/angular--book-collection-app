import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book/book.service';
import { SettingsService } from '../../../services/settings/settings.service';
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

  constructor(
    private bookService: BookService,
    private settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    this.showReadPages = this.settingsService.getSettings().showReadPages;
    this.showPagesToRead = this.settingsService.getSettings().showPagesToRead;
    setTimeout(() => {
      this.bookService.getBooks().subscribe((data) => {
        this.books = data;
        this.getPagesToRead();
        this.getReadPages();
      });
    }, 500);
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

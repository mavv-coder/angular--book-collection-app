import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { BookListComponent } from './components/layout/book-list/book-list.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AddBookComponent } from './components/pages/add-book/add-book.component';
import { BookDetailComponent } from './components/pages/book-detail/book-detail.component';
import { EditBookComponent } from './components/pages/edit-book/edit-book.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookListComponent,
    DashboardComponent,
    AddBookComponent,
    BookDetailComponent,
    EditBookComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FlashMessagesModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

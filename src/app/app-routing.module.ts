import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AddBookComponent } from './components/pages/add-book/add-book.component';
import { BookDetailComponent } from './components/pages/book-detail/book-detail.component';
import { EditBookComponent } from './components/pages/edit-book/edit-book.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'book/:id', component: BookDetailComponent },
  { path: 'book/edit/:id', component: EditBookComponent },
  { path: 'book/add', component: AddBookComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

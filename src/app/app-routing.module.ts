import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { baseRoutes } from './app-routes.config';
import { AuthGuard } from './guards/auth.guard';

import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { AddBookComponent } from './components/pages/add-book/add-book.component';
import { EditBookComponent } from './components/pages/edit-book/edit-book.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: baseRoutes.dashboard,
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: baseRoutes.login, component: LoginComponent },
  { path: baseRoutes.register, component: RegisterComponent },
  {
    path: baseRoutes.bookEdit,
    component: EditBookComponent,
    canActivate: [AuthGuard],
  },
  {
    path: baseRoutes.bookAdd,
    component: AddBookComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}

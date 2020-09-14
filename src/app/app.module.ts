import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// angular2-flash-messages
import { FlashMessagesModule } from 'angular2-flash-messages';

// firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { BookListComponent } from './components/layout/book-list/book-list.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AddBookComponent } from './components/pages/add-book/add-book.component';
import { EditBookComponent } from './components/pages/edit-book/edit-book.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { BackButtonComponent } from './components/layout/back-button/back-button.component';
import { SpinnerComponent } from './components/layout/spinner/spinner.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { SettingsComponent } from './components/pages/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookListComponent,
    DashboardComponent,
    AddBookComponent,
    EditBookComponent,
    LoginComponent,
    NotFoundComponent,
    BackButtonComponent,
    SpinnerComponent,
    RegisterComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

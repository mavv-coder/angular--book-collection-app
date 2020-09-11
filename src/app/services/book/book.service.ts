import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';

import { Book } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  booksCollection: AngularFirestoreCollection<Book>;
  bookDoc: AngularFirestoreDocument<Book>;
  books: Observable<Book[]>;
  book: Observable<Book>;

  constructor(private angularFire: AngularFirestore) {
    this.booksCollection = this.angularFire.collection('books', (ref) =>
      ref.orderBy('author', 'asc')
    );
  }

  getBooks(): Observable<Book[]> {
    // Next code is necessary to get book with its id
    this.books = this.booksCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((action) => {
          const data = action.payload.doc.data() as Book;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );

    return this.books;
  }

  getBook(id: string): Observable<Book> {
    this.bookDoc = this.angularFire.doc<Book>(`books/${id}`);
    this.book = this.bookDoc.snapshotChanges().pipe(
      map((action) => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Book;
          data.id = action.payload.id;
          return data;
        }
      })
    );
    return this.book;
  }

  addBook(book: Book): void {
    this.booksCollection.add(book);
  }

  updateBook(book: Book): void {
    this.bookDoc = this.angularFire.doc(`books/${book.id}`);
    this.bookDoc.update(book);
  }

  deleteBook(book: Book): void {
    this.bookDoc = this.angularFire.doc(`books/${book.id}`);
    this.bookDoc.delete();
  }
}

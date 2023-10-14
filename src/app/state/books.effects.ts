import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, switchMap, catchError,tap } from 'rxjs/operators';
import { GoogleBooksService } from '../book-list/books.service';
import { BooksApiActions } from './books.action';


@Injectable()
export class BooksEffects {
    loadMovies$ = createEffect(() => this.actions.pipe(
        ofType(BooksApiActions.loadBooks),
        switchMap(() => this.booksService.getBooks()
          .pipe(
            tap(books=> console.log(books)),
            map(books => BooksApiActions.retrievedBookList({books})),
            catchError(() => EMPTY)
          ))
        )
      );
     
      constructor(
        private actions: Actions,
        private booksService: GoogleBooksService,
      ) {}
}
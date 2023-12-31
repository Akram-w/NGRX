import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store'
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BooksEffects } from './state/books.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({books: booksReducer, collection: collectionReducer}),
    EffectsModule.forRoot([BooksEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

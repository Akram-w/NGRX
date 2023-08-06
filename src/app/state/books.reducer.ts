import { createReducer, on } from "@ngrx/store";
import { Book } from "../book-list/book.model";
import { BooksActions, BooksApiActions } from "./books.action";

export const initialState : ReadonlyArray<Book> = []

export const booksReducer = createReducer(
    initialState,
    on(BooksApiActions.retrievedBookList, (_state, {books})=> books)
)
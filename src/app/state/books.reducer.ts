import { createReducer, on } from "@ngrx/store";
import { Book } from "../book-list/book.model";
import { BooksActions, BooksApiActions } from "./books.action";

export const initialState : Book[] = []

export const booksReducer = createReducer(
    initialState,
    on(BooksApiActions.retrievedBookListSuccess, (_state, {books})=> books)
)
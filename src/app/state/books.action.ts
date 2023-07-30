import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Book } from "../book-list/book.model";

export const BooksActions = createActionGroup({
  source: "Books",
  events: {
    "Add Book": props<{ bookId: string }>(),
    "Remove Book": props<{ bookId: string }>(),
  },
});

export const BooksApiActions = createActionGroup({
  source: "Books API",
  events: {
    "Retrieved Book List Load": emptyProps(),
    "Retrieved Book List Success": props<{ books: Book[] }>(),
    "Retrieved Book List Error": props<{ error: Error | any }>(),
  },
});

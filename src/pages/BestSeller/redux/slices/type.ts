export type BookType = {
  book_image: string;
  title: string;
  author: string;
  price: number;
};

export type ReviewType = {
  book_title: string;
  byline: string;
  publication_dt: string;
  summary: string;
};

export type Status = 'idle' | 'loading' | 'failed';
export interface BookState {
  books: BookType[];
  bookReviews: ReviewType[];
  status: Status;
}

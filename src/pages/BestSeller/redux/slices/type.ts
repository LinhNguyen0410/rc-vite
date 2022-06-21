export type BookType = {
  book_image: string;
  title: string;
  author: string;
  price: number;
};

export type Status = 'idle' | 'loading' | 'failed';
export interface BookSellerState {
  books: BookType[];
  status: Status;
}

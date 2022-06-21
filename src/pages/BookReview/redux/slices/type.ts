export type ReviewType = {
  book_title: string;
  byline: string;
  publication_dt: string;
  summary: string;
};

export type Status = 'idle' | 'loading' | 'failed';

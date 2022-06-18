import axiosClient from './axiosClient';
// api/productApi.js

const API_KEY = import.meta.env.RC_API_KEY;
class BookAPI {
  private url: string;

  constructor() {
    this.url = '';
  }

  getListBestSellerBooks() {
    this.url = `/lists/current/hardcover-fiction.json?api-key=${API_KEY}`;
    return axiosClient.get<never, any>(this.url);
  }

  getReviewsByTitle = (title: string | null) => {
    this.url = `/reviews.json?title=${title}&api-key=${API_KEY}`;
    return axiosClient.get<never, any>(this.url);
  };
}
const bookAPI = new BookAPI();
export default bookAPI;

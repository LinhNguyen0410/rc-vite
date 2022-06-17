import axiosClient from './axiosClient';
// api/productApi.js

const API_KEY = import.meta.env.RC_API_KEY;
class BookAPI {
  getListBestSellerBooks = () => {
    const url = `/lists/current/hardcover-fiction.json?api-key=${API_KEY}`;
    return axiosClient.get<never, any>(url);
  };
  getReviewsByTitle = (title: string | null) => {
    const url = `/reviews.json?title=${title}&api-key=${API_KEY}`;
    return axiosClient.get<never, any>(url);
  };
}
const bookAPI = new BookAPI();
export default bookAPI;

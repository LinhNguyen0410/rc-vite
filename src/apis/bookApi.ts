import axiosClient from './axiosClient';
// api/productApi.js
class BookAPI {
  getListBestSellerBooks = () => {
    const url = `/lists/current/hardcover-fiction.json?api-key=${
      import.meta.env.RC_API_KEY
    }`;
    return axiosClient.get<never, any>(url);
  };
  getReviewsByTitle = (title: string | null) => {
    const url = `/reviews.json?title=${title}&api-key=${
      import.meta.env.RC_API_KEY
    }`;
    return axiosClient.get<never, any>(url);
  };
}
const bookAPI = new BookAPI();
export default bookAPI;

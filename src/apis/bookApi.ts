import axiosClient from './axiosClient';
// api/productApi.js
class BookAPI {
  getListBestSellerBooks = () => {
    console.log('import.meta.env.RC_API_KEY', import.meta.env.RC_API_KEY);
    const url = `/lists/current/hardcover-fiction.json?api-key=${
      import.meta.env.RC_API_KEY
    }`;
    return axiosClient.get(url);
  };
  getReviewsByTitle = (title: string) => {
    const url = `/reviews.json?title=${title}&api-key=${
      import.meta.env.RC_API_KEY
    }`;
    return axiosClient.get(url);
  };
}
const bookAPI = new BookAPI();
export default bookAPI;

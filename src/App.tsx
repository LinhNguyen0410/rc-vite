import './App.css';
import Header from './components/Header';
import BestSeller from './pages/BestSeller';
import BookReview from './pages/BookReview';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import bookAPI from './apis/bookApi';

function App({ num }: { num: number }) {
  const [date, setDate] = useState<any>(null);
  useEffect(() => {
    bookAPI
      .getListBestSellerBooks()
      .then((res) => {
        return bookAPI.getReviewsByTitle('11/22/63');
      })
      .then((res) => console.log(res));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="best-seller" element={<BestSeller />} />
          <Route path="book-review" element={<BookReview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

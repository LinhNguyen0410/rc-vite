import './App.css';
import Header from 'components/Header';
import BestSeller from 'pages/BestSeller';
import BookReview from 'pages/BookReview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';

function App({ num }: { num: number }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="best-seller" element={<BestSeller />} />
          <Route path="book-review" element={<BookReview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

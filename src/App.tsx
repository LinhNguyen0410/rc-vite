import { useState } from 'react';
import { message } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BestSeller from './pages/BestSeller';
import BookReview from './pages/BookReview';
function App({ num }: { num: number }) {
  const [date, setDate] = useState<any>(null);
  const handleChange = (value: any) => {
    message.info(
      `Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`
    );
    setDate(value);
  };

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

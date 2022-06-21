import { FC, useEffect } from 'react';
import { Box, Grid } from '@mui/material';

import Product from 'pages/BestSeller/components/Product';
import ProductSkeleton from 'components/Skeleton';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { v4 as uuid } from 'uuid';
import { getBooksAsync } from 'pages/BestSeller/redux/slices/bookSellerSlice';
import { ProductListStyled } from "./styled";

const BestSeller: FC = () => {
  const dispatch = useAppDispatch();
  const { books, status } = useAppSelector((state) => state.BookSellerReducer);
  useEffect(() => {
    dispatch(getBooksAsync());
  }, []);

  return (
    <Box p={5}>
      {status !== 'idle' ? (
        <ProductSkeleton />
      ) : (
        <ProductListStyled container spacing={2}>
          {books.map((book) => (
            <Grid key={uuid()} item xs={12} md={3} lg={2}>
              <Product
                title={book.title}
                author={book.author}
                bookImage={book.book_image}
                price={book.price}
              />
            </Grid>
          ))}
        </ProductListStyled>
      )}
    </Box>
  );
};

export default BestSeller;

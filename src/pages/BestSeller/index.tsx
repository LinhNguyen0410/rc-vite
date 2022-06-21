import { Box, Grid } from '@mui/material';
import { useEffect } from 'react';
import styled from 'styled-components';
import Product from 'pages/BestSeller/components/Product';
import ProductSkeleton from 'components/Skeleton';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { getBooksAsync } from 'redux/slices/bookSlice';
import { v4 as uuid } from 'uuid';

const ProductListStyled = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
`;

function BestSeller() {
  const dispatch = useAppDispatch();
  const { books, status } = useAppSelector((state) => state.BooksReducer);
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
}

export default BestSeller;

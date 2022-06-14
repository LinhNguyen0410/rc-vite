import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getBooksAsync } from '../../redux/slices/bookSlice';
import { Box, Container, Grid, Paper } from '@mui/material';
import styled from 'styled-components';
import Product from '../../components/Product';

const ProductListStyled = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
`;

function BestSeller() {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector((state) => state.BooksReducer);
  useEffect(() => {
    dispatch(getBooksAsync());
  }, []);

  return (
    <Box p={5}>
      <ProductListStyled container spacing={2}>
        {books.map((book, index) => (
          <Grid key={index + book.title} item xs={12} md={3} lg={2}>
            <Product
              title={book.title}
              author={book.author}
              bookImage={book.book_image}
              price={book.price}
            />
          </Grid>
        ))}
      </ProductListStyled>
    </Box>
  );
}

export default BestSeller;

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
  return (
    <Box p={5}>
      <ProductListStyled container spacing={2}>
        <Grid item xs={12} md={3} lg={2}>
          <Product />
        </Grid>
        <Grid item xs={12} md={3} lg={2}>
          <Product />
        </Grid>
        <Grid item xs={12} md={3} lg={2}>
          <Product />
        </Grid>
        <Grid item xs={12} md={3} lg={2}>
          <Product />
        </Grid>
        <Grid item xs={12} md={3} lg={2}>
          <Product />
        </Grid>
        <Grid item xs={12} md={3} lg={2}>
          <Product />
        </Grid>
      </ProductListStyled>
    </Box>
  );
}

export default BestSeller;

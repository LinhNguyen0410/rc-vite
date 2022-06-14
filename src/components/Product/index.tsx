import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import { Box, Button, Typography } from '@mui/material';
import styled from 'styled-components';
const ProductWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 240px;
  margin: auto;
`;
const ImageWrapper = styled(Box)`
  background-color: #f0e9e9;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 6px gray;
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: scale(1.022);
    transition: all 0.3s linear;
  }
`;
const ProductInfoStyled = styled(Box)`
  margin-top: 15px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const BookNameStyled = styled(Typography)`
  font-weight: bold !important;
`;
const AuthorNameStyled = styled.span``;
const PriceOriginal = styled.span`
  color: red;
  text-decoration: line-through;
`;
const PriceStyled = styled.span``;
const ButtonStyled = styled(Button)`
  margin-top: 15px !important;
  padding: 5px 14px;
  width: 160px;
  height: 40px;
  &:hover {
    background-color: #983939;
    transition: all 0.3s linear;
    font-size: 15px;
  }
`;

function Product() {
  const handleReview = () => {};

  return (
    <ProductWrapper>
      <ImageWrapper>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51RBNF7FXFL._SX384_BO1,204,203,200_.jpg"
          alt="ahihi"
        />
      </ImageWrapper>
      <ProductInfoStyled>
        <BookNameStyled variant="h6">
          Getting Past You and Me to Build a More Loving Relationship
        </BookNameStyled>
        <AuthorNameStyled>Terrence Real</AuthorNameStyled>
        <PriceOriginal>$26.99</PriceOriginal>
        <PriceStyled>$16.73</PriceStyled>
      </ProductInfoStyled>
      <ButtonStyled onClick={handleReview} variant="contained" color="error">
        <TravelExploreRoundedIcon sx={{ mr: 1 }} />
        Review
      </ButtonStyled>
    </ProductWrapper>
  );
}

export default Product;

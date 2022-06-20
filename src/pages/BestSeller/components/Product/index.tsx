import { FC } from 'react';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import { Box, Button, Typography } from '@mui/material';
import styled from 'styled-components';
import { useNavigate, createSearchParams } from 'react-router-dom';

type Props = {
  bookImage: string;
  title: string;
  author: string;
  price: number;
};

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
  height: 300px;
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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;
const AuthorNameStyled = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;
const PriceOriginal = styled.span`
  color: red;
  text-decoration: line-through;
`;
const PriceStyled = styled.span``;
const ButtonStyled = styled(Button)`
  padding: 5px 14px;
  width: 160px;
  height: 40px;
  &:hover {
    background-color: #983939;
    transition: all 0.3s linear;
    font-size: 15px;
  }
`;

const Product: FC<Props> = ({ author, bookImage, price, title }) => {
  const navigate = useNavigate();
  const handleReview = (bookName: string) => {
    navigate({
      pathname: '/book-review',
      search: createSearchParams({
        bookName,
      }).toString(),
    });
  };

  return (
    <ProductWrapper>
      <ImageWrapper>
        <img src={bookImage} alt="ahihi" />
      </ImageWrapper>
      <ProductInfoStyled
        sx={{
          minHeight: '150px',
        }}
      >
        <BookNameStyled variant="h6">{title}</BookNameStyled>
        <AuthorNameStyled>{author}</AuthorNameStyled>
        <PriceOriginal>$26.99</PriceOriginal>
        <PriceStyled>$16.73</PriceStyled>
      </ProductInfoStyled>
      <ButtonStyled onClick={() => handleReview(title)} variant="contained" color="error">
        <TravelExploreRoundedIcon sx={{ mr: 1 }} />
        Review
      </ButtonStyled>
    </ProductWrapper>
  );
};

export default Product;

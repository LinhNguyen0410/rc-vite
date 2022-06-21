import { FC } from 'react';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import { useNavigate, createSearchParams } from 'react-router-dom';
import {
  AuthorNameStyled,
  BookNameStyled,
  ButtonStyled,
  ImageWrapper,
  PriceOriginal,
  PriceStyled,
  ProductInfoStyled,
  ProductWrapper,
} from './styled';

type Props = {
  bookImage: string;
  title: string;
  author: string;
  price: number;
};

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

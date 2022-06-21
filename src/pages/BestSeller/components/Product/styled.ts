import { Box, Button, Typography } from '@mui/material';
import styled from 'styled-components';

export const ProductWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 240px;
  margin: auto;
`;
export const ImageWrapper = styled(Box)`
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
export const ProductInfoStyled = styled(Box)`
  margin-top: 15px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const BookNameStyled = styled(Typography)`
  font-weight: bold !important;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;
export const AuthorNameStyled = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
`;
export const PriceOriginal = styled.span`
  color: red;
  text-decoration: line-through;
`;
export const PriceStyled = styled.span``;
export const ButtonStyled = styled(Button)`
  padding: 5px 14px;
  width: 160px;
  height: 40px;
  &:hover {
    background-color: #983939;
    transition: all 0.3s linear;
    font-size: 15px;
  }
`;

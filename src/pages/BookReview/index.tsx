import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import ReplyIcon from '@mui/icons-material/Reply';
import ShareIcon from '@mui/icons-material/Share';
import { Avatar, Button, Grid, Skeleton, Box } from '@mui/material';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getReviewsAsync } from '../../redux/slices/bookSlice';
import ReviewBar from './ReviewBar';

const BookReviewWrapper = styled.div`
  background-color: #ffff;
  padding: 30px 50px;
  overflow: hidden;
  .review-header {
    font-size: 25px;
    color: grey;
    font-weight: bold;
  }
  .review-container {
    margin-top: 30px;
    max-height: 70vh;
    padding: 20px;
    padding-top: 0px;
    border: 1px solid #a7a9aa;
    border-radius: 5px;
    overflow: hidden;
    .review-list-box {
      background-color: #ffff;
      height: 73vh;
      overflow-y: scroll;
    }
  }
  .review-action {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid #a7a9aa;
    .action-button {
      margin-bottom: 20px;
      width: 100%;
      &.share-button {
        background-color: #ffb900;
      }
      &.respond-button {
        background-color: #1cc8a5;
      }
    }
    .respond-nonefill {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
`;

function BookReview() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { bookReviews, status } = useAppSelector((state) => state.BooksReducer);

  useEffect(() => {
    dispatch(getReviewsAsync(searchParams.get('bookName')));
  }, [searchParams.get('bookName')]);
  console.log('status', status);

  return (
    <>
      {status !== 'idle' ? (
        <BookReviewWrapper>
          <Skeleton width={'100%'} height={'230px'} />
          <Skeleton width={'100%'} height={'230px'} />
          <Skeleton width={'100%'} height={'230px'} />
        </BookReviewWrapper>
      ) : (
        <BookReviewWrapper>
          {bookReviews.length > 0 ? (
            <>
              <div className="review-header">{'Review and rating'}</div>
              <div className="review-container">
                <Grid sx={{ margin: 0, width: '100%' }} container spacing={4}>
                  <Grid
                    className="review-list-box scrollbar"
                    id="style-1"
                    item
                    xs={10}
                  >
                    {bookReviews.map((item, idx) => {
                      return <ReviewBar review={item} key={idx} />;
                    })}
                  </Grid>
                  <Grid className="review-action" item xs={2}>
                    <Button
                      className="action-button share-button"
                      variant="contained"
                      endIcon={<ShareIcon />}
                    >
                      Contained
                    </Button>
                    <Button
                      className="action-button respond-button"
                      variant="contained"
                      endIcon={<ReplyIcon />}
                    >
                      Respond
                    </Button>
                    <div>
                      <div className="respond-nonefill">
                        <DownloadIcon
                          sx={{ paddingTop: '4px', marginRight: '10px' }}
                          fontSize="small"
                          color={'disabled'}
                        />
                        {'Download'}
                      </div>
                      <div className="respond-nonefill">
                        <DeleteIcon
                          sx={{ paddingTop: '4px', marginRight: '10px' }}
                          fontSize="small"
                          color={'error'}
                        />
                        {'Delete Review'}
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </>
          ) : (
            <div>There is no reviews for this book</div>
          )}
        </BookReviewWrapper>
      )}
    </>
  );
}

export default BookReview;

import { FC, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import ReplyIcon from '@mui/icons-material/Reply';
import ShareIcon from '@mui/icons-material/Share';
import { Button, Grid, Skeleton } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { getReviewsAsync } from 'pages/BookReview/redux/slices/bookReviewSlice';
import ReviewBar from './ReviewBar';
import { v4 as uuidv4 } from 'uuid';
import { BookReviewWrapper } from './styled';

const BookReview: FC = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { bookReviews, status } = useAppSelector((state) => state.BooksReviewReducer);

  useEffect(() => {
    dispatch(getReviewsAsync(searchParams.get('bookName')));
  }, [dispatch, searchParams]);

  return status !== 'idle' ? (
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
              <Grid className="review-list-box scrollbar" id="style-1" item xs={10}>
                {bookReviews.map((item, idx) => (
                  <ReviewBar review={item} key={uuidv4()} />
                ))}
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
        <div className="no-review">There is no reviews for this book</div>
      )}
    </BookReviewWrapper>
  );
};

export default BookReview;

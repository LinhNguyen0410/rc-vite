import { FC } from 'react';
import { Avatar, Rating } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { ReviewBarWrapper } from './styled';

const ReviewBar: FC<{ review: any }> = ({ review }) => (
  <ReviewBarWrapper>
    <div className="reivew-bar__header">
      <div className="user-box">
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.chanhtuoi.com/uploads/2022/01/w400/avatar-tet.jpg.webp"
        />
        <div className="user-info">
          <p className="user-name">{review.byline}</p>
          <p className="date-time">{review.publication_dt}</p>
        </div>
      </div>
      <div className="rating-box">
        <div className="rating">
          <Rating name="read-only" value={4} readOnly />
          <SentimentSatisfiedAltIcon
            sx={{ marginLeft: '10px' }}
            fontSize="medium"
            color={'success'}
          />
        </div>
        <div className="comment">
          <ModeCommentIcon
            sx={{ paddingTop: '4px', marginRight: '7px' }}
            fontSize="small"
            color={'success'}
          />
          {'7'}
        </div>
      </div>
    </div>
    <div className="review-content">{review.summary}</div>
  </ReviewBarWrapper>
);

export default ReviewBar;

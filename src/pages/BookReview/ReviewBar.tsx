import styled from 'styled-components';
import { Avatar, Rating } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const customGreyColor = `#a7a9aa`;
const ReviewBarWrapper = styled.div`
  width: 90%;
  border: 2px solid ${customGreyColor};
  border-radius: 5px;
  margin-bottom: 25px;
  padding: 10px 25px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    border: 2px solid #8fd6ca;
  }
  .reivew-bar__header {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 0.3px solid ${customGreyColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    .user-box {
      display: flex;
      align-items: center;
    }
    p {
      margin: 2px 20px;
    }
    .user-name {
      font-weight: bold;
      font-size: 20px;
    }
    .date-time {
      font-size: 14px;
      color: ${customGreyColor};
    }
    .rating-box {
      .rating {
        display: flex;
        align-items: center;
      }
      .comment {
        float: right;
        display: flex;
        align-items: center;
      }
    }
  }
  .review-content {
    padding-top: 10px;
    line-height: 25px;
    color: grey;
  }
`;

function ReviewBar() {
  return (
    <ReviewBarWrapper>
      <div className="reivew-bar__header">
        <div className="user-box">
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.chanhtuoi.com/uploads/2022/01/w400/avatar-tet.jpg.webp"
          />
          <div className="user-info">
            <p className="user-name">{'Nina Holloway'}</p>
            <p className="date-time">{'29 Aug 2017'}</p>
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
      <div className="review-content">
        {
          'No matter what your business happens to be, your customers are online. You need to keep in touch with them through different channels and using various content formats. After reading this guide, you’ll be ready to plan your content production and create the most popular types of content, or order them from your writers more wisely.'
        }
      </div>
    </ReviewBarWrapper>
  );
}

export default ReviewBar;

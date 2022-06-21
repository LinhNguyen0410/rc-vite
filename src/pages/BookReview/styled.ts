import styled from 'styled-components';

export const BookReviewWrapper = styled.div`
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
  .no-review {
    text-align: center;
  }
`;

const customGreyColor = `#a7a9aa`;
export const ReviewBarWrapper = styled.div`
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

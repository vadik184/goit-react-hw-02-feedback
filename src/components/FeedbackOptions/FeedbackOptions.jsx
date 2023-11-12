import React from 'react';
import {
  StyledFeedbackButton,
  StyledFeedbackContainer,
} from 'components/FeedbackOptions/FeedbackOptionsstyle';

export const FeedbackOptions = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => {
  return (
    <>
      <StyledFeedbackContainer>
        <StyledFeedbackButton type="button" onClick={onIncrementGood}>
          Good
        </StyledFeedbackButton>
        <StyledFeedbackButton type="button" onClick={onIncrementNeutral}>
          Neutral
        </StyledFeedbackButton>
        <StyledFeedbackButton type="button" onClick={onIncrementBad}>
          Bad
        </StyledFeedbackButton>
      </StyledFeedbackContainer>
    </>
  );
};

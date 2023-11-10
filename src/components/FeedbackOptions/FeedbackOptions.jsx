import React from 'react';

export const FeedbackOptions = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => {
  return (
    <>
      <div>
        <button type="button" onClick={onIncrementGood}>
          Good
        </button>
        <button type="button" onClick={onIncrementNeutral}>
          Neutral
        </button>
        <button type="button" onClick={onIncrementBad}>
          Bad
        </button>
      </div>
    </>
  );
};

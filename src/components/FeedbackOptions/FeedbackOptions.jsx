import React from 'react';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export class FeedbackOptions extends React.Component {
  render() {
    return (
      <>
        <div className={css['btn-container']}>
          <button className={css.button} type="button">
            Good
          </button>
          <button className={css.button} type="button">
            Neutral
          </button>
          <button className={css.button} type="button">
            Bad
          </button>
        </div>
      </>
    );
  }
}

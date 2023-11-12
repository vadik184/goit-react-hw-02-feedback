import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { StyledContainer } from 'components/AppStyle';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  incrementGood = () => {
    this.setState({ good: this.state.good + 1 });
  };
  incrementNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  incrementBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return (this.state.good * 100) / this.countTotalFeedback();
  }

  render() {
    return (
      <StyledContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onIncrementGood={this.incrementGood}
            onIncrementNeutral={this.incrementNeutral}
            onIncrementBad={this.incrementBad}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage().toFixed(
                0
              )}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </StyledContainer>
    );
  }
}

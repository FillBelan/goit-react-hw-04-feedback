import { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import { ButtonsStyles, StatList } from './button.styled';

// import { ReactDOM } from 'react-dom';

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleVoiceIncreament = option => {
    this.setState(curState => ({
      [option]: curState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good / total) * 100;
    return percentage.toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <ButtonsStyles>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleVoiceIncreament}
            />
          </ButtonsStyles>
        </Section>

        <Section title={'Statistics'}>
          <StatList>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            />
          </StatList>
        </Section>
      </div>
    );
  }
}

export default Counter;

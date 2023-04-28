import React from 'react';
import Notification from 'components/Notification/Notification';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total > 0 ? (
        <>
          <li>Good: {good} </li>
          <li>Neutral: {neutral} </li>
          <li>Bad: {bad} </li>
          <li>Total: {total} </li>
          <li>Positive feedback: {positivePercentage}%</li>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

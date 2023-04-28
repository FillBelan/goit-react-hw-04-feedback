import React from 'react';
import { ButtonItemStyled } from '../Counter/button.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <ButtonItemStyled
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </ButtonItemStyled>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

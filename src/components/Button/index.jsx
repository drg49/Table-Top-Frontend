import React from 'react';
import './index.scss';

/**
 * A reusable button component.
 *
 * @param {Object} props - The props object that contains the following:
 * @param {string} props.text - The text to display on the button.
 * @param {function} props.click - The function to execute when the button is clicked.
 * @param {boolean} props.isPrimary - A flag indicating whether the button is a primary button.
 * @param {string} props.id - The ID attribute for the button element.
 */
const Button = ({ text, click, isPrimary, id }) => {
  return (
    <button
      onClick={click}
      className={`table-top-button ${isPrimary && 'primary'}`}
      id={id}
      type='button'
    >
      {text}
    </button>
  )
}

export default Button;

import React from 'react';
import './index.scss';

export default function Button({ text, click, isPrimary, id }) {
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
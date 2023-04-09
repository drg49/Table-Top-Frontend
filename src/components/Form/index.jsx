import React from "react";
import './index.scss';

// Columns: 1, 2, 3
export default function Form({ children, id, columns }) {

  return (
    <div id={id} className={`table-top-form ${columns}`}>
      {children}
    </div>
  )
}
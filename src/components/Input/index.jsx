import React from "react";
import './index.scss';

export default function Input({ id, type, placeholder, name, change, animate }) {

  return (
    <div className={`table-top-input ${animate && 'animate'}`} id={id}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={change}
      />
      <span>
        <i></i>
      </span>
    </div>
  )
}



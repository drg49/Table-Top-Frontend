import React from "react";
import './index.scss';

/**
 * A reusable input component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the input.
 * @param {string} props.type - The type of the input.
 * @param {string} props.placeholder - The placeholder of the input.
 * @param {string} props.name - The name of the input.
 * @param {function} props.change - The onChange event for the input.
 * @param {boolean} props.animate - Whether the input should display animated focus borders.
 */
const Input = ({ id, type, placeholder, name, change, animate }) => {

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

export default Input;

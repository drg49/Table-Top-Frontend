import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlateWheat } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const logo = <FontAwesomeIcon icon={faPlateWheat} size='5x' color='#a90409' />;

export default function Logo() {

  return (
    <div className='table-top-logo'>
      <span>{logo}</span>
      <h1>Table Top</h1>
    </div>
  )
}
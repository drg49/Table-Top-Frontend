import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const closeIcon = <FontAwesomeIcon icon={faClose} size='md' color='white' />;

export default function Panel({ children, id, size, header, closable }) {

  return (
    <div id={id} className={`table-top-panel ${size}`}>
      <header>
        <h2>{header}</h2>
        {closable && <button className='close-btn'>{closeIcon}</button>}
      </header>
      <div className="table-top-panel-content table-top-scroll">
        {children}
      </div>
    </div>
  )
}
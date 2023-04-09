import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const closeIcon = <FontAwesomeIcon icon={faClose} size='sm' color='white' />;

// Size: sm, md, lg
export default function Panel({ children, id, size, title, closable }) {

  return (
    <div id={id} className={`table-top-panel ${size}`}>
      <header>
        <h2>{title}</h2>
        {closable && <button className='close-btn'>{closeIcon}</button>}
      </header>
      <div className="table-top-panel-content table-top-scroll">
        {children}
      </div>
    </div>
  )
}
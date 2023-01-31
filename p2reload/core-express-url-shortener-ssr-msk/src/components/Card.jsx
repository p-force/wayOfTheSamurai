import React from 'react';

function Card({ el }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{el.id}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Link:
          {el.url}
        </h6>
        <p className="card-text">
          Code is:
          {' '}
          {el.code}
        </p>
      </div>
    </div>
  );
}

export default Card;

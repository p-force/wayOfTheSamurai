import React from 'react';
import Card from './Card';

export default function AllCharacters({ characters }) {
  return (
    <div className="container d-flex flex-row mt-3 justify-content-between align-items-stretch">
      {characters.map((el) => (
        <Card el={el} key={el.id} />
      ))}
    </div>
  );
}

import React from 'react';
import Card from './Card';

function App({ title, urlDB }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <form method="post" action="/urls">
        <div className="mb-3 container">
          <label htmlFor="exampleInputEmail1" className="form-label">
            <input name="url" type="text" className="form-control" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <h1>Shortened URLS</h1>
      <div className="container">
        {urlDB?.map((el) => (
          <div className="col-6 mb-3">
            <Card el={el} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

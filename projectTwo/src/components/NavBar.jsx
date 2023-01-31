import React from 'react';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Naruto</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="/">Home</a>
            <a className="nav-link" href="/characters/all">All characters</a>
            {/* <a className="nav-link" href="/"></a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

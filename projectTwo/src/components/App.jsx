import React from 'react';
import { Route, Routes } from 'react-router';
import AllCharacters from './AllCharacters';
import Home from './Home';
import Info from './Info';
import NavBar from './NavBar';

export default function App({ characters, onePers }) {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/all" element={<AllCharacters characters={characters} />} />
        <Route path="/characters/info/:id" element={<Info onePers={onePers} />} />
      </Routes>
    </>
  );
}

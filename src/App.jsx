import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import MyTown from './pages/MyTown';

function App() {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/" end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
          About Me
        </NavLink>
        <NavLink to="/mytown" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
          My Town
        </NavLink>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/mytown" element={<MyTown />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

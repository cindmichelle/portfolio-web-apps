import React from 'react';
import { Parallax } from 'react-parallax';

import Banner from './sections/Banner';
import About from './sections/About/About';
import Expertise from './sections/Expertise/Expertise';
import background from './assets/background.png';
import './App.css';
import Experience from './sections/Experience/Experience';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>I am using 🌲 Evergreen!</Button>
      </header> */}
      <Banner />
      <Parallax
        blur={{ min: -2, max: 2 }}
        bgImage={background}
        bgImageAlt="about background"
        strength={-300}
        className="root"
      >
        <About />
        <Expertise />
        <Experience />
      </Parallax>
      <div style={{ height: 1000, backgroundColor: '#CED' }} />
    </div>
  );
}

export default App;

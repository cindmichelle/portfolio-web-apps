import React from 'react';

import './Banner.css';
import lalala from '../assets/chels.jpeg';

export default function Header() {
  return (
    <div style={styles.container}>
      <div style={styles.leftContainer} className="left-wrapper">
        <div className="text-wrapper">
          <div className="row">
            <h1 className="text text-white">Hello</h1>
            <h1 className="text text-yellow">.</h1>
          </div>
          <h1 className="text text-white">My name</h1>
          <div className="row">
            <h1 className="text text-white">is</h1>
            <h1 className="text text-yellow margin-left"> Cindy</h1>
          </div>
        </div>
      </div>
      <div style={styles.rightContainer}>
        <img src={lalala} style={styles.image} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
  },
  leftContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 'auto',
    height: '100vh',
    backgroundColor: '#c25939',
  },
  rightContainer: {
    display: 'flex',
    flex: 1,
  },
  image: { width: '100%', height: '100vh', objectFit: 'cover' },
} as const;

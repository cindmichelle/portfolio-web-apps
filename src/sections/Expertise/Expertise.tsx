import React from 'react';

import './Expertise.css';
import Progress from './Progress';

export default function Expertise() {
  return (
    <div className="expertise-container">
      <h1 className="expertise-title">SKILLS</h1>
      <Progress label="Javascript" value={90} />
      <Progress label="React.Js" value={90} />
      <Progress label="React Native" value={95} />
      <Progress label="GraphQL" value={70} />
      <Progress label="REST API" value={75} />
    </div>
  );
}

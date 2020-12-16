import React from 'react';

import './Experience.css';
import Milestone from './Milestone';

export default function Experience() {
  return (
    <div className="experience-container">
      <h1 className="experience-title">EXPERIENCE</h1>
      <Milestone
        data={[
          {
            company: 'Kodefox',
            position: 'Software Engineer',
            timeRange: '2019 - Now',
            desc: 'ea',
          },
          {
            company: 'Kodefox',
            position: 'Software Engineer',
            timeRange: '2019 - Now',
          },
          {
            company: 'Kodefox',
            position: 'Software Engineer',
            timeRange: '2019 - Now',
          },
        ]}
      />
    </div>
  );
}

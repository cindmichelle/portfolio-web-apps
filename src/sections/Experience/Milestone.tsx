import React from 'react';

import './Milestone.css';
import Track from './Track';

type Datum = {
  timeRange: string;
  company: string;
  position: string;
  desc?: string;
};

type MilestoneProps = {
  data: Array<Datum>;
};

export default function Milestone({ data }: MilestoneProps) {
  return (
    <div className="milestones-root">
      {data.map((datum, idx) => (
        <Track
          key={idx}
          idx={idx}
          {...datum}
          showDivider={idx !== data.length - 1}
        />
      ))}
    </div>
  );
}

import React from 'react';
import activities from '../../data/activities';

const Activities = () => (
  <div className="activities">
    <h2>Recent Activities</h2>
    <ul>
      {activities.map(({
        date, description,
      }) => (
        <div className="activities-entry">
          <div className="activity-date">
            <span className="date">{date}</span>
          </div>
          <div className="activity-date">
            <span>{description}</span>
          </div>
        </div>
      ))}
    </ul>
  </div>
);

export default Activities;

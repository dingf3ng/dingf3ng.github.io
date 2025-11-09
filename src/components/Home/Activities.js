import React from 'react';
import activities from '../../data/activities';

// Renders recent activities; descriptions may include inline HTML (e.g. <a> tags)
// so we intentionally render them as HTML. Ensure any HTML inserted here is trusted.
const Activities = () => (
  <div className="activities">
    <h2>Recent Activities</h2>
    <ul> {
      activities.map((item) => (
        <li className="activities-entry" key={`${item.date}-${item.title}`}>
          <div className="activity-date">
            <span className="date">{item.date}</span>
          </div>
          <div
            className="activity-description"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </li>
      ))
    }
    </ul>
  </div>
);

export default Activities;

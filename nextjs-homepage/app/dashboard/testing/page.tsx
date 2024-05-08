'use client'
import { useState } from 'react';
import { fetchStudyData } from '@/app/lib/data2';
import Link from 'next/link';

const studyData = {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'PROSEEK',
    sponsor: 'Sun Pharma',
    CRA: [],
    websites: ['google.com', 'yahoo.com', 'lab.com'],
    visits: [1, 2, 3, 4, 5],
    lab_kits: [],
}

export default function StudyCard(studyDate) {
  const [expanded, setExpanded] = useState(false);
  

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="study-card" onClick={handleToggleExpand}>
      <div className="header">
        <h3>{studyData.name}</h3>
        <p>Sponsored by: {studyData.sponsor}</p>
        {/*<button onClick={handleToggleExpand}>
          {expanded ? 'Collapse' : 'Expand'}
  </button> */}
      </div>
      {expanded && (
        <div className="website-list">
          <h4>Study Websites:</h4>
          <ul>
            {studyData.websites.map((website, index) => (
              <li key={index}>
                <Link href={website} target="_blank" >
                  {website}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <p>{expanded ? 'Collapse' : 'Expand'}</p>
    </div>
  );
};



import React from 'react';
import catPics from '../data/catPics';

function DailyCat() {
  const today = new Date().toDateString();
  const todayPic = catPics[0]; // replace with logic to show actual “today” pic

  return (
    <div>
      <h2>{today}</h2>
      <img src={todayPic.image} alt="Today's cat" />
      <p>{todayPic.caption}</p>
    </div>
  );
}

export default DailyCat;

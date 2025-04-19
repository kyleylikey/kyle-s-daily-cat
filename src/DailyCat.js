import React from 'react';
import catPics from './data/catPics';
import LikeButton from './LikeButton'; // Assuming you have a LikeButton component

function DailyCat() {
  const today = new Date().toDateString();
  const index = new Date().getDate() % catPics.length;
  const todayPic = catPics[index];

  return (
    <div className="daily-cat">
      <h2>{today}</h2>
      <img id="post-img" src={todayPic.image} alt="Today's cat" />
      <p>{todayPic.caption}</p>
      <LikeButton />
    </div>
  );
}

export default DailyCat;

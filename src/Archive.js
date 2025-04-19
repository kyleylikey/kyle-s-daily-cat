import React from 'react';
import catPics from './data/catPics';

function Archive() {
  return (
    <div>
      <h2>Cat Archive</h2>
      <div className="gallery">
        {catPics.map((pic, index) => (
          <div key={index}>
            <img src={pic.image} alt={pic.caption} />
            <p>{pic.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Archive;

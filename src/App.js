import React from 'react';
import DailyCat from './DailyCat';
import Archive from './Archive';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <DailyCat />
      {/* or use routing to switch between DailyCat and Archive */}
    </div>
  );
}

export default App;

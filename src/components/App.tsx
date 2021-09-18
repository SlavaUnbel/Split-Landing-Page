import React from 'react';
import PS5 from './ps5/PS5';
import XBox from './xbox/XBox';

const App: React.FC = () => {
  return (
    <div className="container">
      <PS5 />

      <XBox />
    </div>
  );
};

export default App;

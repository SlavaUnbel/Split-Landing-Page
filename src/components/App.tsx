import React, { useEffect, useState } from 'react';
import PS5 from './ps5/PS5';
import XBox from './xbox/XBox';

const App: React.FC = () => {
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => setContainer(document.querySelector('.container')), []);

  const enterLeft = () => {
    if (container) container.classList.add('hover-left');
  };

  const enterRight = () => {
    if (container) container.classList.add('hover-right');
  };

  const leaveLeft = () => {
    if (container) container.classList.remove('hover-left');
  };

  const leaveRight = () => {
    if (container) container.classList.remove('hover-right');
  };

  return (
    <div className="container">
      <PS5 onMouseEnter={enterLeft} onMouseLeave={leaveLeft} />

      <XBox onMouseEnter={enterRight} onMouseLeave={leaveRight} />
    </div>
  );
};

export default App;

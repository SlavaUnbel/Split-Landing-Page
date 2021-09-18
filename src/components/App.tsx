import React from 'react';
import { useHoverEffect } from './appHook/AppHook';
import PS5 from './ps5/PS5';
import XBox from './xbox/XBox';

const App: React.FC = () => {
  const { ref, enterLeft, enterRight, leaveLeft, leaveRight, leaveBoth } =
    useHoverEffect();

  return (
    <div
      className="container"
      ref={ref}
      onMouseLeave={leaveBoth}
      onClick={leaveBoth}
    >
      <PS5 onMouseEnter={enterLeft} onMouseLeave={leaveLeft} />

      <XBox onMouseEnter={enterRight} onMouseLeave={leaveRight} />
    </div>
  );
};

export default App;

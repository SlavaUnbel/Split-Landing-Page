import React from 'react';

interface Props {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const PS5: React.FC<Props> = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="split left"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h1>Playstation 5</h1>

      <a
        href="https://playstation.com/en-us/ps5"
        target="_blank"
        rel="noreferrer"
      >
        Buy Now
      </a>
    </div>
  );
};

export default PS5;

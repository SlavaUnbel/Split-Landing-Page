import React from 'react';

interface Props {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const XBox: React.FC<Props> = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="split right"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h1>XBox Series X</h1>

      <a
        href="https://xbox.com/en-US/consoles/xbox-series-x"
        target="_blank"
        rel="noreferrer"
      >
        Buy Now
      </a>
    </div>
  );
};

export default XBox;

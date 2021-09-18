import { useEffect, useState } from 'react';

export const useHoverEffect = () => {
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

  return { enterLeft, enterRight, leaveLeft, leaveRight }
}
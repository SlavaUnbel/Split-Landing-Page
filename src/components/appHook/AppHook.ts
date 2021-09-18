import { createRef, LegacyRef } from 'react';

export const useHoverEffect = () => {
  const ref: LegacyRef<HTMLDivElement> = createRef();

  const enterLeft = () =>
    ref.current?.classList.add('hover-left');

  const enterRight = () =>
    ref.current?.classList.add('hover-right');

  const leaveLeft = () => ref.current?.classList.remove('hover-left');

  const leaveRight = () =>
    ref.current?.classList.remove('hover-right');

  const leaveBoth = () => {
    leaveLeft();
    leaveRight();
  }

  return { ref, enterLeft, enterRight, leaveLeft, leaveRight, leaveBoth }
}
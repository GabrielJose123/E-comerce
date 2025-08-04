import { useState } from 'react';

export const useHoverMargin = (marginValue = '1rem') => {
  const [style, setStyle] = useState({
    transition: 'all 0.3s ease-in-out',
    marginBottom: '0',
  });

  const onMouseEnter = () =>
    setStyle((prev) => ({ ...prev, marginBottom: marginValue }));

  const onMouseLeave = () =>
    setStyle((prev) => ({ ...prev, marginBottom: '0' }));

  return {
    style,
    onMouseEnter,
    onMouseLeave,
  };
};

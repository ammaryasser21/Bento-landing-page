import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = (options = {}) => {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      distance: '50px',
      duration: 500,
      easing: 'ease-in-out',
      origin: 'bottom',
      interval: 200,
      ...options,
    });
  }, [options]);
};

export default useScrollReveal;

import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      // Observe the main element
      observer.observe(currentElement);

      // Observe all children with animation classes
      const animatedElements = currentElement.querySelectorAll(
        '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in'
      );
      animatedElements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (currentElement) {
        observer.disconnect();
      }
    };
  }, []);

  return elementRef;
};

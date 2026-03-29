/**
 * Animation utility classes and helpers
 */

export const fadeInUp = 'opacity-0 translate-y-8 transition-all duration-700 ease-out';
export const fadeInUpVisible = 'opacity-100 translate-y-0';

export const fadeIn = 'opacity-0 transition-opacity duration-700 ease-out';
export const fadeInVisible = 'opacity-100';

export const slideInLeft = 'opacity-0 -translate-x-8 transition-all duration-700 ease-out';
export const slideInLeftVisible = 'opacity-100 translate-x-0';

export const scaleIn = 'opacity-0 scale-95 transition-all duration-700 ease-out';
export const scaleInVisible = 'opacity-100 scale-100';

/**
 * Stagger delay for multiple elements
 */
export const getStaggerDelay = (index: number, baseDelay = 100) => {
  return `${index * baseDelay}ms`;
};

/**
 * Smooth scroll to element
 */
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offset = 80; // Account for sticky header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

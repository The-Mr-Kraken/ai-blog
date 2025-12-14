// lib/utils.ts

// Clamp a number between min & max
export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

// Map value from one range to another
export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

// Debounce
export const debounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay = 150
) => {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

// Throttle
export const throttle = <T extends (...args: any[]) => void>(
  fn: T,
  limit = 100
) => {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

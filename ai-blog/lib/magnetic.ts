// lib/magnetic.ts

export type MagneticElement = {
  el: HTMLElement;
  strength: number;
};

export const applyMagnetic = (
  e: MouseEvent,
  elements: MagneticElement[]
) => {
  elements.forEach(({ el, strength }) => {
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = (e.clientX - centerX) * strength;
    const distY = (e.clientY - centerY) * strength;

    // GPU optimized transform
    el.style.transform = `translate3d(${distX}px, ${distY}px, 0)`;
  });
};

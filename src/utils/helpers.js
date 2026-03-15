// src/utils/helpers.js

/**
 * Joins class names, filtering out falsy values.
 * Usage: cx('base', isActive && 'active', 'other')
 */
export function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Smooth-scroll to a section by id.
 * Usage: scrollTo('about')
 */
export function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

import { expect } from '@open-wc/testing';

export function isInlineElement(element: HTMLElement) {
  expect(window.getComputedStyle(element).display).to.eq('inline');
}

export function isBlockElement(element: HTMLElement) {
  expect(window.getComputedStyle(element).display).to.eq('block');
}

export function isInlineBlockElement(element: HTMLElement) {
  expect(window.getComputedStyle(element).display).to.eq('inline-block');
}

export function isFlexElement(element: HTMLElement) {
  expect(window.getComputedStyle(element).display).to.eq('flex');
}

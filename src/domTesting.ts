import { expect } from '@open-wc/testing';

export async function isInlineElement(element: HTMLElement) {
  await expect(window.getComputedStyle(element).display).to.eq('inline');
}

export async function isBlockElement(element: HTMLElement) {
  await expect(window.getComputedStyle(element).display).to.eq('block');
}

export async function isInlineBlockElement(element: HTMLElement) {
  await expect(window.getComputedStyle(element).display).to.eq('inline-block');
}

export async function isFlexElement(element: HTMLElement) {
  await expect(window.getComputedStyle(element).display).to.eq('flex');
}

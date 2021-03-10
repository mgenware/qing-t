import { expect } from '@open-wc/testing';

// eslint-disable-next-line @typescript-eslint/naming-convention
export class tDOM {
  static isInlineElement(element: HTMLElement) {
    expect(window.getComputedStyle(element).display).to.eq('inline');
  }

  static isBlockElement(element: HTMLElement) {
    expect(window.getComputedStyle(element).display).to.eq('block');
  }

  static isInlineBlockElement(element: HTMLElement) {
    expect(window.getComputedStyle(element).display).to.eq('inline-block');
  }

  static isFlexElement(element: HTMLElement) {
    expect(window.getComputedStyle(element).display).to.eq('flex');
  }
}

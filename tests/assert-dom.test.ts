import { fixture, html, domTesting } from '../dist/main.js';

it('isInlineElement', async () => {
  const el = await fixture<HTMLElement>(html`<my-element></my-element>`);
  await domTesting.isInlineElement(el);
});

it('isBlockElement', async () => {
  const el = await fixture<HTMLElement>(html`<div></div>`);
  await domTesting.isBlockElement(el);
});

it('isInlineBlockElement', async () => {
  const el = await fixture<HTMLElement>(html`<div style="display:inline-block"></div>`);
  await domTesting.isInlineBlockElement(el);
});

it('isFlexElement', async () => {
  const el = await fixture<HTMLElement>(html`<div style="display:flex"></div>`);
  await domTesting.isFlexElement(el);
});

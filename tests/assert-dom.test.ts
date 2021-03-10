import { fixture, html, tDOM } from '../dist/main';

it('isInlineElement', async () => {
  const el = await fixture<HTMLElement>(html` <my-element></my-element> `);
  tDOM.isInlineElement(el);
});

it('isBlockElement', async () => {
  const el = await fixture<HTMLElement>(html` <div></div> `);
  tDOM.isBlockElement(el);
});

it('isInlineBlockElement', async () => {
  const el = await fixture<HTMLElement>(html` <div style="display:inline-block"></div> `);
  tDOM.isInlineBlockElement(el);
});

it('isFlexElement', async () => {
  const el = await fixture<HTMLElement>(html` <div style="display:flex"></div> `);
  tDOM.isFlexElement(el);
});

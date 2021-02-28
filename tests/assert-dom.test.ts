import { fixture, html, tDOM } from '../dist/main';

it('isInlineElement', async () => {
  const el = await fixture<HTMLElement>(html` <my-element></my-element> `);
  tDOM.isInlineElement(el);
});

it('isBlockElement', async () => {
  const el = await fixture<HTMLElement>(html` <div></div> `);
  tDOM.isBlockElement(el);
});

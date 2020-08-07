import { newSpecPage } from '@stencil/core/testing';
import { BtnTutator } from './btn-tutator';

describe('btn-tutator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BtnTutator],
      html: `<btn-tutator></btn-tutator>`,
    });
    expect(page.root).toEqualHtml(`
      <btn-tutator>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </btn-tutator>
    `);
  });
});

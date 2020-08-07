import { newE2EPage } from '@stencil/core/testing';

describe('btn-tutator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<btn-tutator></btn-tutator>');

    const element = await page.find('btn-tutator');
    expect(element).toHaveClass('hydrated');
  });
});

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { renderHook, RenderHookOptions } from '@testing-library/react-hooks';

import { IntlProvider } from 'react-intl-hooks';

import locale_en from '../translations/en.json';

const data = {
  en: locale_en,
};

const language = 'en';

const AllTheProviders = (props: any) => {
  const { children } = props;
  return (
    <IntlProvider locale={language} messages={data[language]} defaultLocale="en">
      {children}
    </IntlProvider>
  );
};

// override render and renderHook to include provider wrappers for testing
const customRender = (ui: any, options?: RenderOptions) => render(ui, { wrapper: AllTheProviders, ...options });

const customRenderHook = (callback: (props?: any) => any, options?: RenderHookOptions<any>) =>
  renderHook(callback, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
export { customRenderHook as renderHook };

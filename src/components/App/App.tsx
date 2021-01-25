import React from 'react';

import { IntlProvider } from 'react-intl-hooks';

import locale_en from '../../translations/en.json';
import SampleComponent from '../SampleComponent/SampleComponent';

const data = {
  en: locale_en,
};

const language = 'en';

const App: React.FC = () => (
  <IntlProvider locale={language} messages={data[language]} defaultLocale="en">
    <SampleComponent />
  </IntlProvider>
);

export default App;

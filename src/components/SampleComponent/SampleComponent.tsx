import React from 'react';

import useLocalization from '@hooks/useLocalization/useLocalization';

export interface SampleComponentProps {}

const SampleComponent: React.FC<SampleComponentProps> = () => {
  const t = useLocalization('samplecomponent');

  return <div>{t('message')}</div>;
};

export default SampleComponent;

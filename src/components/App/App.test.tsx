import React, { ReactNode } from 'react';

import { render, renderHook, RenderResult } from '../../utils/test-utils';
import useLocalization from '../../hooks/useLocalization';

import App from './App';

let documentBody: RenderResult;
let t: (messageName: string, values?: any) => ReactNode;

describe('<App/>', () => {
  beforeEach(() => {
    documentBody = render(<App />);

    const { result } = renderHook(() => useLocalization('samplecomponent'));

    t = result.current;
  });

  it('Renders without crashing', () => {
    expect(documentBody.getByText(t('message')?.toString()!)).toBeInTheDocument();
  });
});

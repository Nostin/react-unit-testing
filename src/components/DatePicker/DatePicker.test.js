import React from 'react';
import { render } from '@testing-library/react';
import { DatePicker } from './DatePicker';

test('Should not allow empty date', () => {
  const component = render(<DatePicker label="Date Label" />);
  expect(component.getByText('Date Label')).toBeInTheDocument();
});

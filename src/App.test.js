import React from 'react';
import { render } from '@testing-library/react';
import Gralweb from './Gralweb';

test('renders learn react link', () => {
  const { getByText } = render(<Gralweb />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

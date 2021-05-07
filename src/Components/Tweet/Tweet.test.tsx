import React from 'react';
import { render, screen } from '@testing-library/react';
import Tweet from './Tweet';

test('renders app title', () => {
  const message = 'test message dude';
  render(<Tweet message={message}/>);
  const titleElement = screen.getByText(message);
  expect(titleElement).toBeInTheDocument();
});

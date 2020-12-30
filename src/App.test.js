import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders my full name.', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Tayler Nichols/i);
  expect(linkElement[0]).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders my full name.', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tayler Nichols/i);
  expect(linkElement).toBeInTheDocument();
});

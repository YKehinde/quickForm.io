import { render, screen } from '@testing-library/react';
import App from './App';

test('should render text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Find the perfect Professional for you/i);
  expect(linkElement).toBeInTheDocument();
});

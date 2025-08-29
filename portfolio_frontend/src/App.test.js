import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio sections', () => {
  render(<App />);
  expect(screen.getByRole('navigation', { name: /main/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /visual designer/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /latest work/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /testimonial/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /lets work together/i })).toBeInTheDocument();
});

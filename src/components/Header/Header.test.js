import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header', () => {
  render(<Header header="Test" />);
  const header = screen.getByText(/Test/i);
  expect(header).toBeInTheDocument();
});

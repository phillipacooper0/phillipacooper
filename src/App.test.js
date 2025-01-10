import { getAllByDisplayValue, getByRole, getByText, render, screen } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
});

test('Header text renders when app renders', () => {
  render(<App/>)
  const header = screen.getByText(/Phillipa Cooper/)
  expect(header).toBeInTheDocument()
})
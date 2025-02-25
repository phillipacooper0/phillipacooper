import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter as Router } from 'react-router-dom'; 


test('renders', () => {
  render(<App />);
});

test('Walking duck renders when app renders', () => {
  render(<App/>)
  const header = screen.getByAltText(/walking duck/)
  expect(header).toBeInTheDocument()
})
import { getByText, render, screen } from '@testing-library/react';
import CustomHeader from './Header'
import { MemoryRouter as Router } from 'react-router-dom'; 

test("Header renders successfully", () => {
    render(<Router><CustomHeader/></Router>)
    const element = screen.getByTitle(/header/);
    expect(element).toBeInTheDocument();
})

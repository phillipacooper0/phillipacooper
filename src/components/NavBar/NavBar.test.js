import { render, screen } from '@testing-library/react';
import NavBar from "./NavBar"
import { MemoryRouter as Router } from 'react-router-dom'; 


test("NavBar renders successfully", () => {
    render(<Router><NavBar/></Router>)
    const element = screen.getByText(/About Me/);
    expect(element).toBeInTheDocument();
})
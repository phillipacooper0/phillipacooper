import { getByText, render, screen } from '@testing-library/react';
import CustomHeader from './Header'
import NavBar from '../NavBar/NavBar'
import { MemoryRouter as Router } from 'react-router-dom'; 

test("Header renders successfully", () => {
    render(<Router><CustomHeader/></Router>)
    const element = screen.getByText(/Phillipa Cooper/);
    expect(element).toBeInTheDocument();
})
test("Duck walking gif renders successfully", () => {
    render(<Router><CustomHeader/></Router>)
    const element = screen.getByAltText(/walking duck/);
    expect(element).toBeInTheDocument();
})

test("Header contains NavBar component", () => {
    render(<Router><CustomHeader/></Router>)
    const homePage = screen.getByText(/Home Page/)
    expect(homePage).toBeTruthy();
})
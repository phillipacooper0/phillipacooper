import { getByText, render, screen } from '@testing-library/react';
import Display from './WebDisplay'
import NavBar from '../NavBar/NavBar'
import { MemoryRouter as Router } from 'react-router-dom'; 


test("WebDisplay renders successfully", () => {
    render(<Router><Display/></Router>)
    const element = screen.getByTitle(/header/);
    expect(element).toBeInTheDocument();
})

test("WebDisplay contains img for linkedIn", () => {
    render(<Router><Display/></Router>)
    const image = screen.getByAltText(/linkedIn logo/)
    expect(image).toBeInTheDocument()
})

test("WebDisplay contains img for github", () => {
    render(<Router><Display/></Router>)
    const image = screen.getByAltText(/github logo/i)
    expect(image).toBeInTheDocument()
})

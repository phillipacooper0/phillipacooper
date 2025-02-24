import { getByText, render, screen } from '@testing-library/react';
import Display from './WebDisplay'
import NavBar from '../NavBar/NavBar'
import { MemoryRouter as Router } from 'react-router-dom'; 


test("WebDisplay renders successfully", () => {
    render(<Router><Display/></Router>)
    const element = screen.getByTitle(/header/);
    expect(element).toBeInTheDocument();
})

test("Header contains href to /phillipacooper", () => {
    render(<Router><Display/></Router>)
    const homePage = screen.getByText(/Phillipa Cooper/)
    expect(homePage).toHaveAttribute('href', '/phillipacooper')
})

test("Duck walking gif renders successfully", () => {
    render(<Router><Display/></Router>)
    const element = screen.getByAltText(/walking duck/i);
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

test("WebDisplay contains NavBar component", () => {
    render(<Router><Display/></Router>)
    const homePage = screen.getByText(/Home Page/)
    expect(homePage).toBeTruthy();
})

test("Header contains Phillipa Cooper as text", () => {
    render(<Router><Display/></Router>)
    const homePage = screen.getByText(/Phillipa Cooper/)
    expect(homePage).toBeTruthy();
})
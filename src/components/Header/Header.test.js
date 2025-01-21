import { getByText, render, screen } from '@testing-library/react';
import CustomHeader from './Header'
import NavBar from '../NavBar/NavBar'
import { MemoryRouter as Router } from 'react-router-dom'; 

test("Header renders successfully", () => {
    render(<Router><CustomHeader/></Router>)
    const element = screen.getByTitle(/header/);
    expect(element).toBeInTheDocument();
})

test("Header contains Phillipa Cooper as text", () => {
    render(<Router><CustomHeader/></Router>)
    const homePage = screen.getByText(/Phillipa Cooper/)
    expect(homePage).toBeTruthy();
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

test("Header contains href to /", () => {
    render(<Router><CustomHeader/></Router>)
    const homePage = screen.getByText(/Phillipa Cooper/)
    expect(homePage).toHaveAttribute('href', '/')
})

test("Header contains img for linkedIn", () => {
    render(<Router><CustomHeader/></Router>)
    const image = screen.getByAltText(/linkedIn logo/)
    expect(image).toBeInTheDocument()
})

test("Header contains img for github", () => {
    render(<Router><CustomHeader/></Router>)
    const image = screen.getByAltText(/github logo/)
    expect(image).toBeInTheDocument()
})
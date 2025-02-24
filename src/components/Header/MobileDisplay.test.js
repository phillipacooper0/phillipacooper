import { getByText, render, screen, fireEvent } from '@testing-library/react';
import Display from './MobileDisplay'
import { MemoryRouter as Router } from 'react-router-dom'; 


test("MobileDisplay renders successfully", () => {
    render(<Router><Display/></Router>)
    const element = screen.getByTitle(/header/);
    expect(element).toBeInTheDocument();
})

test("MobileDisplay contains href to /phillipacooper", () => {
    render(<Router><Display/></Router>)
    const homePage = screen.getByText(/Phillipa Cooper/)
    expect(homePage).toHaveAttribute('href', '/phillipacooper')
})

test("MobileDisplay contains Phillipa Cooper as text", () => {
    render(<Router><Display/></Router>)
    const homePage = screen.getByText(/Phillipa Cooper/)
    expect(homePage).toBeTruthy();
})

test("Duck walking gif renders successfully", () => {
    render(<Router><Display/></Router>)
    const element = screen.getByAltText(/walking duck/i);
    expect(element).toBeInTheDocument();
})

test("MobileDisplay contains Hamburger", () => {
    render(<Router><Display/></Router>)
    expect(screen.getByRole('menu')).toBeInTheDocument();
})

test("MobileDisplay does not contain SideNav when hamburger is unclicked", () => {
    render(<Router><Display/></Router>)
    expect(screen.queryByLabelText('dropdown-navigation')).not.toBeInTheDocument();
})

test("MobileDisplay contains SideNav when hamburger is clicked", () => {
    render(<Router><Display/></Router>)
    const hamburger = screen.getByLabelText('hamburger')
    fireEvent.click(hamburger)
    expect(screen.getByRole('navigation')).toBeInTheDocument();
})

test("MobileDisplay doesn't contains SideNav when hamburger is clicked twice", () => {
    render(<Router><Display/></Router>)
    const hamburger = screen.getByLabelText('hamburger')
    fireEvent.click(hamburger)
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    fireEvent.click(hamburger)
    expect(screen.queryByLabelText('dropdown-navigation')).not.toBeInTheDocument();
})


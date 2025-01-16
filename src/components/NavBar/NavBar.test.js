import { render, screen } from '@testing-library/react';
import NavBar from "./NavBar"
import { MemoryRouter as Router } from 'react-router-dom'; 


test("NavBar renders successfully", () => {
    render(<Router><NavBar/></Router>)
    const element = screen.getByTitle(/navbar/);
    expect(element).toBeTruthy();
})

test("NavBar contains Home Page Option", () => {
    render(<Router><NavBar/></Router>)
    const element = screen.getByText(/Home Page/);
    expect(element).toBeTruthy();
})

test("NavBar contains About Me Option", () => {
    render(<Router><NavBar/></Router>)
    const element = screen.getByText(/About Me/);
    expect(element).toBeTruthy();
})

test("NavBar contains Work Experience Option", () => {
    render(<Router><NavBar/></Router>)
    const element = screen.getByText(/Work Experience/);
    expect(element).toBeTruthy();
})

test("NavBar contains Projects Option", () => {
    render(<Router><NavBar/></Router>)
    const element = screen.getByText(/Projects/);
    expect(element).toBeTruthy();
})

test("NavBar contains Contacts Option", () => {
    render(<Router><NavBar/></Router>)
    const element = screen.getByText(/Contacts/);
    expect(element).toBeTruthy();
})

test("NavBar HomePage contains href to /", () => {
    const screen = render(<Router><NavBar/></Router>)
    expect(screen.getByRole('link', { name: 'Home Page' })).toHaveAttribute('href', '/')
})

test("NavBar About Me contains href to /about", () => {
    const screen = render(<Router><NavBar/></Router>)
    expect(screen.getByRole('link', { name: 'About Me' })).toHaveAttribute('href', '/about')
})

test("NavBar Work Experience contains href to /workexperience", () => {
    const screen = render(<Router><NavBar/></Router>)
    expect(screen.getByRole('link', { name: 'Work Experience' })).toHaveAttribute('href', '/workexperience')
})

test("NavBar projects contains href to /projects", () => {
    const screen = render(<Router><NavBar/></Router>)
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects')
})

test("NavBar Contacts contains href to /contacts", () => {
    const screen = render(<Router><NavBar/></Router>)
    expect(screen.getByRole('link', { name: 'Contacts' })).toHaveAttribute('href', '/contacts')
})
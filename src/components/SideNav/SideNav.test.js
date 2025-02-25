import { render, screen } from '@testing-library/react';
import SideNav from "./SideNav"
import { MemoryRouter as Router } from 'react-router-dom'; 


test("SideNav renders successfully", () => {
    render(<Router><SideNav/></Router>)
    const element = screen.getByRole(/navigation/);
    expect(element).toBeTruthy();
})


test("SideNav contains Home Page Option", () => {
    render(<Router><SideNav isClicked={true} /></Router>)
    const element = screen.getByText(/Home/);
    expect(element).toBeTruthy();
})

test("SideNav contains About Me Option", () => {
    render(<Router><SideNav isClicked={true} /></Router>)
    const element = screen.getByText(/About/);
    expect(element).toBeTruthy();
})

test("SideNav contains Work Experience Option", () => {
    render(<Router><SideNav isClicked={true} /></Router>)
    const element = screen.getByText(/Work Experience/);
    expect(element).toBeTruthy();
})

test("SideNav contains Projects Option", () => {
    render(<Router><SideNav isClicked={true} /></Router>)
    const element = screen.getByText(/Projects/);
    expect(element).toBeTruthy();
})

test("SideNav contains Contacts Option", () => {
    render(<Router><SideNav isClicked={true} /></Router>)
    const element = screen.getByText(/Contacts/);
    expect(element).toBeTruthy();
})

test("SideNav HomePage contains href to /phillipacooper/", () => {
    const screen = render(<Router><SideNav/></Router>)
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/phillipacooper/')
})

test("SideNav AboutMe contains href to /phillipacooper/#/about", () => {
    const screen = render(<Router><SideNav/></Router>)
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/phillipacooper/#/about')
})

test("SideNav Work Experience contains href to /phillipacooper/#/workexperience", () => {
    const screen = render(<Router><SideNav/></Router>)
    expect(screen.getByText('Work Experience').closest('a')).toHaveAttribute('href', '/phillipacooper/#/workexperience')
})

test("SideNav Projects contains href to /phillipacooper/#/projects", () => {
    const screen = render(<Router><SideNav/></Router>)
    expect(screen.getByText('Projects').closest('a')).toHaveAttribute('href', '/phillipacooper/#/projects')
})

test("SideNav Contacts contains href to /phillipacooper/#/contacts", () => {
    const screen = render(<Router><SideNav/></Router>)
    expect(screen.getByText('Contacts').closest('a')).toHaveAttribute('href', '/phillipacooper/#/contacts')
})


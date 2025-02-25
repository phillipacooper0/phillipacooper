import { fireEvent, getByText, render, screen } from '@testing-library/react';
import CollapsedExcerpt from './CollapsedExcerpt'
import { MemoryRouter as Router } from 'react-router-dom'; 
import exampleContent from '../../content-test/Project'

test('CollapsedExcerpt renders successfully', () => {
    render(<Router><CollapsedExcerpt title={exampleContent.title} content={exampleContent.content}/></Router>)
    const element = screen.getByTitle('collapsible')
    expect(element).toBeInTheDocument();
})
test('CollapsedExcerpt contains input title ', () => {
    render(<Router><CollapsedExcerpt title={exampleContent.title} content={exampleContent.content}/></Router>)
    const title = screen.getByText(/Example Title/)
    expect(title).toBeInTheDocument();
})

test('CollapsedExcerpt contains input-specific aria-label for title ', () => {
    render(<Router><CollapsedExcerpt title={exampleContent.title} content={exampleContent.content}/></Router>)
    const title = screen.getByLabelText(/Collapsible: Example Title/)
    expect(title).toBeInTheDocument();
})

test('CollapsedExcerpt closes content when title is clicked twice ', () => {
    render(<Router><CollapsedExcerpt title={exampleContent.title} content={exampleContent.content}/></Router>)
    const clickable = screen.getByLabelText('collapsible-button')
    fireEvent.click(clickable)
    const dates = screen.getByText(/Example Dates/)
    expect(dates).toBeInTheDocument();
    fireEvent.click(clickable)
    expect(screen.queryByLabelText('description for Example Title')).not.toBeInTheDocument();
})


test('CollapsedExcerpt contains input dates when clicked', () => {
    render(<Router><CollapsedExcerpt title={exampleContent.title} content={exampleContent.content}/></Router>)
    const clickable = screen.getByLabelText('collapsible-button')
    fireEvent.click(clickable)
    const dates = screen.getByText(/Example Dates/)
    expect(dates).toBeInTheDocument();
})


test('CollapsedExcerpt contains input organisation when clicked', () => {
    render(<Router><CollapsedExcerpt title={exampleContent.title} content={exampleContent.content}/></Router>)
    const clickable = screen.getByLabelText('collapsible-button')
    fireEvent.click(clickable)
    const org = screen.getByText(/Example Organisation/)
    expect(org).toBeInTheDocument();
})

test('CollapsedExcerpt contains all input skills when clicked', () => {
    render(<Router><CollapsedExcerpt title={exampleContent.title} content={exampleContent.content}/></Router>)
    const clickable = screen.getByLabelText('collapsible-button')
    fireEvent.click(clickable)
    const skill1 = screen.getByText(/Skill 1/)
    const skill2 = screen.getByText(/Skill 1/)
    const skill3 = screen.getByText(/Skill 1/)
    expect(skill1).toBeInTheDocument();
    expect(skill2).toBeInTheDocument();
    expect(skill3).toBeInTheDocument();
})

test('CollapsedExcerpt contains all input outcomes when clicked', () => {
    render(<Router><CollapsedExcerpt title={exampleContent.title} content={exampleContent.content}/></Router>)
    const clickable = screen.getByLabelText('collapsible-button')
    fireEvent.click(clickable)
    const outcome1 = screen.getByText(/Outcome 1/)
    const outcome2 = screen.getByText(/Outcome 2/)
    expect(outcome1).toBeInTheDocument();
    expect(outcome2).toBeInTheDocument();
})

test('CollapsedExcerpt contains all input responsibilities when clicked', () => {
    render(<Router><CollapsedExcerpt title={exampleContent.title} content={exampleContent.content}/></Router>)
    const clickable = screen.getByLabelText('collapsible-button')
    fireEvent.click(clickable)
    const resp1 = screen.getByText(/Responsibility 1/)
    const resp2 = screen.getByText(/Responsibility 2/)
    const resp3 = screen.getByText(/Responsibility 3/)
    expect(resp1).toBeInTheDocument();
    expect(resp2).toBeInTheDocument();
    expect(resp3).toBeInTheDocument();
})

test('CollapsedExcerpt contains input description when clicked', () => {
    render(<Router><CollapsedExcerpt title={exampleContent.title} content={exampleContent.content}/></Router>)
    const clickable = screen.getByLabelText('collapsible-button')
    fireEvent.click(clickable)
    const desc = screen.getByText(/Example description/)
    expect(desc).toBeInTheDocument();
})

test('CollapsedExcerpt contains description title when clicked', () => {
    render(<Router><CollapsedExcerpt title={exampleContent.title} content={exampleContent.content}/></Router>)
    const clickable = screen.getByLabelText('collapsible-button')
    fireEvent.click(clickable)
    const desc = screen.getByText(/Description/)
    expect(desc).toBeInTheDocument();
})

test('CollapsedExcerpt contains key responsibiltiies title when clicked', () => {
    render(<Router><CollapsedExcerpt title={exampleContent.title} content={exampleContent.content}/></Router>)
    const clickable = screen.getByLabelText('collapsible-button')
    fireEvent.click(clickable)
    const resp = screen.getByText(/Key Responsibilities/)
    expect(resp).toBeInTheDocument();
})

test('CollapsedExcerpt contains outcomes title when clicked', () => {
    render(<Router><CollapsedExcerpt title={exampleContent.title} content={exampleContent.content}/></Router>)
    const clickable = screen.getByLabelText('collapsible-button')
    fireEvent.click(clickable)
    const outcomes = screen.getByText(/Outcomes/)
    expect(outcomes).toBeInTheDocument();
})

test('CollapsedExcerpt contains skills used title when clicked', () => {
    render(<Router><CollapsedExcerpt title={exampleContent.title} content={exampleContent.content}/></Router>)
    const clickable = screen.getByLabelText('collapsible-button')
    fireEvent.click(clickable)
    const skills = screen.getByText(/Skills Used/)
    expect(skills).toBeInTheDocument();
})

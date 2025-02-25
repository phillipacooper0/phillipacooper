import {render, screen } from '@testing-library/react';
import WorkExperienceCard from './WorkExperienceCard'
import { MemoryRouter as Router } from 'react-router-dom'; 
import exampleContent from '../../content-test/WorkExperienceCard'

test("WorkExperienceCard renders title successfully", () => {
    render(<WorkExperienceCard title={exampleContent.title} content={exampleContent.content}/>)
    const element = screen.getByText(/Example Title/);
    expect(element).toBeInTheDocument();
})


test("WorkExperienceCard renders content dates successfully", () => {
    render(<WorkExperienceCard title={exampleContent.title} content={exampleContent.content}/>)
    const element = screen.getByText(/Example Dates/);
    expect(element).toBeInTheDocument();
})


test("WorkExperienceCard renders content stack successfully", () => {
    render(<WorkExperienceCard title={exampleContent.title} content={exampleContent.content}/>)
    const element = screen.getByText(/Example Stack/);
    expect(element).toBeInTheDocument();
})

test("WorkExperienceCard renders both stack items dates successfully", () => {
    render(<WorkExperienceCard title={exampleContent.title} content={exampleContent.content}/>)
    const elementOne = screen.getByText(/Responsibility One/);
    const elementTwo = screen.getByText(/Responsibility Two/)
    expect(elementOne).toBeInTheDocument();
    expect(elementTwo).toBeInTheDocument();
})

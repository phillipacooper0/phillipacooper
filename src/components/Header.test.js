import { render, screen, fireEvent } from '@testing-library/react';
import CustomHeader from '../components/Header'

test("Header renders successfully", () => {
    render(<CustomHeader/>)
    const element = screen.getByText(/Phillipa Cooper/);
    expect(element).toBeInTheDocument();
})
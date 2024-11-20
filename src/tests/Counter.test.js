// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
    // Render the Counter component here
    render(<Counter />);
})

test('renders counter message', () => {
    // Complete the unit test below based on the objective in the line above
    const headingElement = screen.getByText(/Counter/i);
    expect(headingElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    const count = screen.getByTestId('count');
    expect(count.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    const plusButton = screen.getByText('+');
    const count = screen.getByTestId('count');
    fireEvent.click(plusButton);
    expect(count.textContent).toBe('1');
});
test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    const minusButton = screen.getByText('-');
    const count = screen.getByTestId('count');
    fireEvent.click(minusButton);
    expect(count.textContent).toBe('-1');
});

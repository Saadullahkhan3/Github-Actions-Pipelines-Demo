import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
    render(<App />);
    const welcomeElement = screen.getByText(/Welcome to React Demo/i);
    expect(welcomeElement).toBeInTheDocument();
});

test('renders features list', () => {
    render(<App />);
    const eslintFeature = screen.getByText(/ESLint configured/i);
    const jestFeature = screen.getByText(/Jest and React Testing Library/i);
    const webpackFeature = screen.getByText(/Webpack for building/i);

    expect(eslintFeature).toBeInTheDocument();
    expect(jestFeature).toBeInTheDocument();
    expect(webpackFeature).toBeInTheDocument();
});
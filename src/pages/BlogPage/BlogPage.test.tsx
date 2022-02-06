import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlogPage from './BlogPage';

describe('<BlogPage />', () => {
  test('it should mount', () => {
    render(<BlogPage />);
    
    const blogPage = screen.getByTestId('BlogPage');

    expect(blogPage).toBeInTheDocument();
  });
});
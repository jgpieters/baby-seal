import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DonatePage from './DonatePage';

describe('<DonatePage />', () => {
  test('it should mount', () => {
    render(<DonatePage />);
    
    const donatePage = screen.getByTestId('DonatePage');

    expect(donatePage).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBarComponent from './NavBarComponent';

describe('<NavBarComponent />', () => {
  test('it should mount', () => {
    render(<NavBarComponent />);
    
    const navBarComponent = screen.getByTestId('NavBarComponent');

    expect(navBarComponent).toBeInTheDocument();
  });
});
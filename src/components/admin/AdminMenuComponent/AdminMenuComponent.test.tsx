import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminMenuComponent from './AdminMenuComponent';

describe('<AdminMenuComponent />', () => {
  test('it should mount', () => {
    render(<AdminMenuComponent />);
    
    const adminMenuComponent = screen.getByTestId('AdminMenuComponent');

    expect(adminMenuComponent).toBeInTheDocument();
  });
});
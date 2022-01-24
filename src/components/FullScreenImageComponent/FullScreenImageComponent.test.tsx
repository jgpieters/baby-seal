import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FullScreenImageComponent from './FullScreenImageComponent';

describe('<FullScreenImageComponent />', () => {
  test('it should mount', () => {
    render(<FullScreenImageComponent />);
    
    const fullScreenImageComponent = screen.getByTestId('FullScreenImageComponent');

    expect(fullScreenImageComponent).toBeInTheDocument();
  });
});
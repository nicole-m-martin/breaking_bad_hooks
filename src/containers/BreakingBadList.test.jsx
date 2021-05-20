import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import ListComponent from '../containers/BreakingBadList';

describe('Character List Container', () => {
  it('Renders Breaking Bad Characters to page', async () => {
    render(<ListComponent />);

    screen.getByText('loading....');

    // const ul = screen.getByRole('list', { name: 'char' });
    // expect(ul).toBeEmptyDOMElement();
  });
});

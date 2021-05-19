import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import BreakingBadList from '../containers/BreakingBadList';

describe('Character List Container', () => {
  it('Renders Breaking Bad Characters to page', async () => {
    render(<BreakingBadList />);

    screen.getByText('loading....');
  });
});

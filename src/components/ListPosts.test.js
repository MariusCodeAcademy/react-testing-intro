import { render, screen } from '@testing-library/react';
import ListPosts from './ListPosts';

describe('not async test', () => {
  // it('Should render heading on screen', () => {
  //   //Arrange
  //   render(<ListPosts />);
  //   // Assert
  //   const headingEl = screen.getByRole('heading');
  //   const headingTextEl = screen.getByText('Posts');
  //   expect(headingTextEl).toBeInTheDocument();
  //   expect(headingEl).toBeInTheDocument();
  // });
});

describe('Async posts test', () => {
  it('Should render post title list', async () => {
    render(<ListPosts />);

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).not.toHaveLength(0);
  });
});

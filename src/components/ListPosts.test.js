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
  it('Should render post title list sdfsd', async () => {
    // Mock a fetch function
    // sakom kad fetch() butu jest funkcija
    window.fetch = jest.fn();
    // fetch dabar turetu grazinti ka mes aprasysim
    window.fetch.mockResolvedValueOnce({
      json: () => [{ id: 'p1', title: 'kazkoks title' }],
    });

    render(<ListPosts />);
    // findAllByRole('ko ieskom', {exact: false}, {timeout: 1000})
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).not.toHaveLength(0);
    expect(listItems).toHaveLength(1);
  });
});

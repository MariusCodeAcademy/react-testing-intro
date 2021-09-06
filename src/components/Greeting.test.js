import Greeting from './Greeting';
import { render, screen } from '@testing-library/react';

// Unit test
it('Should contain Hello word', () => {
  // Arrange
  render(<Greeting />);

  //Act
  // ...

  //Assert
  const titleEl = screen.getByText('Hello world', { exact: false });
  expect(titleEl).toBeInTheDocument();
});

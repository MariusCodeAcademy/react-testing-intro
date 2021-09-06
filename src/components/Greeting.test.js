import Greeting from './Greeting';
import { render, screen } from '@testing-library/react';

describe('<Greenting />', () => {
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

  // it('Shoud be 2 titles', () => {
  //   render(<Greeting />);

  //   const twoTittleArr = screen.getAllByText('Hello world!');
  //   expect(twoTittleArr.length).toBe(2);
  // });
});

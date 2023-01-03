import { render, screen } from '@testing-library/react';
import App from './App';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getByText(/Let we see the output of JAVASCRIPT/i);
  expect(linkElement).toBeInTheDocument();
});
test('test_case02',()=>
{
  render(<App/>);
  const myElement=screen.getByRole('button');
  expect(myElement).toBeInTheDocument();
});

https://github.com/PonmalarKathiravan/React_Course_DB
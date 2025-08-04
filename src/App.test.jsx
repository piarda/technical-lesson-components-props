import { render, screen } from '@testing-library/react';
import App from './App';
import user from './data/user';

test('renders user name in Home component', () => {
  render(<App />);
  expect(screen.getByText(`${user.name} is a Web Developer from ${user.city}`)).toBeInTheDocument();
});
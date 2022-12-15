import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
test('Shows name on website', () => {
  render(<App />);
  const linkElement = screen.getByText(/Maxwell Wang/i);
  expect(linkElement).toBeInTheDocument();
});

test('There exists am image shown on the homepage', ()=>{
   render(<App/>);
   const max = screen.getByRole('img');
   expect(max).toHaveAttribute('alt', 'Maxwell Wang');
});

test('There is a description of what I want to do', ()=>{
  render(<App/>);
  const fullStack = screen.getByText(/Aspiring Full-Stack Developer/i);
  expect(fullStack).toBeInTheDocument();
})
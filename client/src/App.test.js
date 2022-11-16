import { render, screen } from '@testing-library/react';
import App from './App';

import AdminLogin from './Pages/AdminLogin/AdminLogin.jsx';


describe ("Login", () => {
  test ("validate function should pass on correct input", () => {

      expect ('/admin/dashboard') ;

  });
  test("validate function should fail on incorrect input", () => {
    expect ('/admin/dashbard');
  });




// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
//
//
 });

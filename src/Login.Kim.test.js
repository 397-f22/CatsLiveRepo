import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { async } from '@firebase/util';

test('checks if login button changes from "sign in" to "sign out"', async () =>
{


await userEvent.click(screen.getByText('Sign In'))
expect(screen.getByText('Sign Out')).toBeInTheDocument();

});
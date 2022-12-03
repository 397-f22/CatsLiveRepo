import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { async } from '@firebase/util';

test('checks if cards are all present"', async () =>
{


expect(screen.getByText('Details')).toBeInTheDocument();

});
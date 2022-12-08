import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { useAuthState } from './utilities/firebase'
import { Card } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';


test('user clicks on heart icon and it turns to be a filled heart icon', async() => {

  await render(<App />) 

  let item = await screen.getByTestId("apartment0");
  expect(item.className).toBe("emptyHeart");
  await fireEvent.click(item);

  item = await screen.getByTestId("apartment0");
  expect(item.className).toBe("fillHeart")
});

test('user can click on the view favorite apartments button to view their favorite apartments', async() => {
  await render(<App />)

  let item = await screen.getByTestId("apartment0");
  expect(item.className).toBe("emptyHeart");
  await fireEvent.click(item);

  item = await screen.getByTestId("favorite");
  await fireEvent.click(item);

  expect(screen.getByText('2156 Ridge Ave')).toBeInTheDocument();
})

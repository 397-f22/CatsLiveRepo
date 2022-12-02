import { render, screen } from '@testing-library/react';
import AptModal from './components/AptModal';
import userEvent from '@testing-library/user-event'

 test('renders modal and checks if rent cost is displayed', async () => {
    const mock_data=  {
        "name": "2156 Ridge Ave",
        "address": "2156 Ridge Ave, Evanston, IL 60201",
        "rent": "1320",
        "dimensions": "250 sq feet",
        "utilities": [
            "gas",
            "internet"
        ],
        "bedrooms": "2",
        "bathrooms": "2",
        "laundry": "true",
        "parking": "true",
        "value": "4",
        "img": "https://images1.loopnet.com/i2/9koWUBOEpf9N2ITL10z1PtixXLq8aeqrNDSmq0G5qyE/112/image.jpg",
        "src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.351789583295!2d-87.68862354916598!3d42.057078362071984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fdaa7b620d0ef%3A0x4f55e836533883d1!2s2156%20Ridge%20Ave%2C%20Evanston%2C%20IL%2060201!5e0!3m2!1sen!2sus!4v1669215405741!5m2!1sen!2sus"
    }
  render(<AptModal data={mock_data} interestAdd={" "} setInterestAdd={()=> {}}/>);
  await userEvent.click(screen.getByText('Details'))
  const linkElement = document.getElementById('rent');
  expect(linkElement).toBeInTheDocument();
});


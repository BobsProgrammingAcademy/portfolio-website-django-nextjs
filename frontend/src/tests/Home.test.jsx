import axios from 'axios';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import About from '../components/About';

const renderApp = () => {
  render(<About />);

  return { user: userEvent.setup() };
};

describe('Dashboard page', () => {
  it('should render the Dashboard page header', async () => {
    renderApp();

    expect(await screen.findByText(/About/i)).toBeVisible();
  });
});

describe('Home page', () => {
  beforeAll(() => {
    jest.spyOn(axios, 'get').mockImplementation();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('returns the mocked response in the About section', async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          icon: 'palette',
          title: 'Lorem ipsum',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ],
    });
    const res = await axios.get('http://127.0.0.1:8000/about');
    expect(res).toEqual({
      data: [
        {
          id: 1,
          icon: 'palette',
          title: 'Lorem ipsum',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ],
    });
  });
});

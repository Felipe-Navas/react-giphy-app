import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Testing the <GifGrid /> component', () => {
  const category = 'bike';

  test('should render', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').text().trim()).toBe('Loading');
  });

  test('should render items when the useFetchGifs is called', () => {
    const gifs = [
      {
        id: '12345',
        url: 'https://localhost/index/img12345.jpg',
        title: 'Imagen 12345',
      },
      {
        id: '99999',
        url: 'https://localhost/index/img99999.jpg',
        title: 'Imagen 99999',
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});

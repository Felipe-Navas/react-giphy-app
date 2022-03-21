import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { GifExpertApp } from '../GifExpertApp';

describe('Testing the <GifExpertApp /> component', () => {
  test('should render', () => {
    const wrapper = shallow(<GifExpertApp defaultCategories={['One Punch']} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should display a list of categories', () => {
    const categories = ['Fiat', 'Chebrolet'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});

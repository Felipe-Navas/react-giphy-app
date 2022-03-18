import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Testing the GiftGridItem component", () => {

  const title = 'Titulo1';
  const url = 'https://localhost/something.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  
  test("should show the component GifGridItem", () => {

    expect(wrapper).toMatchSnapshot();
  });

  test('should have a paragraph with the parameter title', () => { 
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
   });

  test('should have an image with the alt and src', () => {
    const img = wrapper.find('img');
    
    //console.log(img.props().alt);
    //console.log(img.prop('alt'));
    
    expect(img.prop('alt')).toBe(title);
    expect(img.prop('src')).toBe(url);

    });

    test("should have the classname animate__fadeIn in the div", () => {
      const div = wrapper.find("div");

      //console.log(div.props().className);

      const className = div.props().className;;
      expect(className.includes("animate__fadeIn")).toBe(true);
    });
});

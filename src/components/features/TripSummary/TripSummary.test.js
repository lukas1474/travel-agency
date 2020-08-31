import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  // const props = {
  //   id: 'abc',
  //   name: 'name',
  //   image: 'image',
  // };


  // const component = shallow(<TripSummary {...props}/>);
  // expect(component).toBeTruthy();


  it ('should generate correct link', () => {
    const expectedId = 'abc';
    const expectedLink = `/trip/${expectedId}`;

    const component = shallow(<TripSummary id={expectedId} link={expectedLink} tags={[]}/>);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
    console.log(component.debug());
  });

  it ('should img has correct imageSrc and imageAlt', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'additional text';

    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]} />);

    expect(component.find('.img').prop('src')).toEqual(expectedSrc);
    expect(component.find('.img').prop('alt')).toEqual(expectedAlt);
    console.log(component.debug());
  });

  it ('should correct render props: name, cost and days', () => {
    const expectedName = 'title';
    const expectedCost = 'value';
    const expectedDays = 7;

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]} />);

    expect (component.find('.title').text()).toEqual(expectedDays);
    expect (component.find('.details').at(0).text()).toEqual(expectedCost);
    expect (component.find('.details').at(1).text()).toEqual(expectedDays);
    console.log(component.debug());
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary/>).toThrow());
    // console.log(component.debug());
  });

  it ('should generate correct tags', () => {
    const expectedTags = ['tag 1', 'tag 2', 'tag 3'];
    const component = shallow(<TripSummary tags={expectedTags} />);

    expect (
      component.find('.tag 1').at(0).text(),
      component.find('.tag 2').at(1).text(),
      component.find('.tag 3').at(2).text(),
    ).toEqual(expectedTags);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should not render div with className "tags" if props tags is undefined or empty array', () => {
    const expectedTagsEmpty = [];
    const component = shallow(<TripSummary tags={expectedTagsEmpty}/>);

    expect(component.find('.tags').exists());
    expect(component).toBeTruthy();

  });



});

import React from 'react';
import {shallow} from 'enzyme';
import NewsItem from "./news-item";

const setUp = (props={}) =>{
    return shallow(<NewsItem {...props} />)
};
const findByTestAtribute = (component, attr) =>{
    return component.find(`[data-test='${attr}']`)
};

describe('News Item component', ()=>{

    let component;
    beforeEach(()=>{
        component = setUp();
    });

    it('Should render without errors', ()=>{
        const wrapper = findByTestAtribute(component, 'newsItem');
        expect(wrapper.length).toBe(1);
    });
    it('Should render without errors', ()=>{
        const wrapper = findByTestAtribute(component, 'img');
        expect(wrapper.length).toBe(1);
    });
});
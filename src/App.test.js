import React from 'react';
import ReactDOM from 'react-dom';
import Card from './LIST/CARD/Card';
import List from './LIST/List';
import renderer from 'react-test-renderer';
import { prependOnceListener } from 'cluster';

describe ('Card', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
        const tree = renderer
        .create( <div className="Card" id="a"/>).toJSON();
        expect(tree).toMatchSnapshot(); 
    });
}); 

describe ('List', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const array = List.cards.map();
        const Card = <List><Card key="a" cardkey="a" title="First Card" content ="lorem ipsum"></Card></List> 
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the UI as expected', () => {
        const tree = renderer
        .create (<div className="List-cards" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});

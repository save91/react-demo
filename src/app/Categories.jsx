import React from 'react';
import ReactDom from 'react-dom';

const categories = [
    {
        id: 1,
        name: 'Category 1'
    }, {
        id: 2,
        name: 'Category 2'
    }, {
        id: 3,
        name: 'Category 3'
    }, {
        id: 4,
        name: 'Category 4'
    }
]

export class Categories extends React.Component {
    render() {
        const handleSelect = this.props.handleSelect;
        return (
            <ul>
                {categories.map((c) => (
                    <li onClick={() => handleSelect(c.id)} key={c.id}>{c.name}</li>)
                )}
            </ul>
            )
    }
};
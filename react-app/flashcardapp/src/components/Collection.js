import React, { Component } from 'react';

import '../App.css';

class Collection extends Component {
    
    render() {
        return (
            <select htmlFor='Collections'>
            {this.props.collections.map((collection) => (
                <option value={collection.id} key={collection.id}>{collection.title}</option>
            ))}
            </select>
        );
    }

}

export default Collection;

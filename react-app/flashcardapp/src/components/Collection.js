import React, { Component } from 'react';

import '../App.css';

class Collection extends Component {
    
    render() {
        return (
            <div>
            <label style={{paddingRight: '10px'}}>Collections</label>
            <select htmlFor='Collections'>
            {this.props.collections.map((collection) => (
                <option value={collection.id} key={collection.id}>{collection.title}</option>
            ))}
            </select>
            </div>
        );
    }

}

export default Collection;

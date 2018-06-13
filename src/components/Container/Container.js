import React from 'react';
import Campos from '../Campos/Campos.js';

class Container extends React.Component {
    message (name, zone) {
        alert (`Searching with ${name} and ${zone} `);
    }

    render() {
        return (
            <div className="">
               <p>{this.props.subtitle}</p>
               <Campos message={this.message}/>
            </div>
        );
    }
}

export default Container;
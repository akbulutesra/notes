import React, { Component } from 'react';

class Kutu extends Component {
    render() {
        return (
            <div>
                <p>{this.props.note}</p>
            </div>
        );
    }
}

export default Kutu;
import React, { Component } from 'react';

import Header from './header/Header';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export default App;
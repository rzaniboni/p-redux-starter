import React, {Component} from 'react';

function sum(x, y) {
    return x + y;
}

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {valore: sum(4+5), valore1: 10};
    }

    render() {
        const totale = sum(4, 6);
        return (
            <div>
                <h1>About</h1>
                <h2>Somma: {totale}</h2>
                <h2>Valore: {this.state.valore}</h2>                
                <h2>Valore1: {this.state.valore1}</h2>                
                <p>This is application</p>
            </div>
        );
    }
}

export default AboutPage;
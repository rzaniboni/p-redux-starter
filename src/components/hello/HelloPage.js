import React, {Component} from 'react';
import { somma } from './Calcoli';
import MessageComp from './MessageComp';
/* eslint-disable no-console */



class HelloPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'D',
            titolo: 'Sample Hello'
        };

        this.style = {
            r: { color: "red"},
            g: { color: "green"}          
        };

        this.prova = somma.somma(4,5);
    }

    componentWillMount() {
        console.log("Hello componentWillMount");
    }

    componentDidMount() {
        console.log("Hello componentDidMount") ;      
    }
    
    handleChange(e) {
        this.setState({name: e.target.value});
    
    }

    render() {
        //let currentStyle = this.props.name == "D" ? this.style.g : this.style.r;

        return (
            <div>
                <h1>{this.state.titolo}</h1>
                <MessageComp />
                {this.prova}
                <h2>Somma: {5}</h2>
                <input type="text" onChange={e => this.handleChange(e)}/>
                <div>Hello <span>{this.state.name}</span></div>
            </div>
        );
    }
}

export default HelloPage;
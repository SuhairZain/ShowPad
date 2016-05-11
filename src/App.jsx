import React, {Component} from 'react';

import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ""
        }
    }

    onTextChange = (event) => {
        this.setState({
            text: event.target.value
        });
    };

    render() {
        return (
            <div>
                <Card>
                    <TextField
                        hintText="Enter something here to show it out"
                        onChange={this.onTextChange}
                        fullWidth={true}/>
                </Card>
                <p>{this.state.text.isEmpty()?"EMPTY":this.state.text}</p>
            </div>
        );
    }
}

export default App;
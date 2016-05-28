import React, {Component} from 'react';

import {emojify} from 'react-emojione';

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

    styles = {
        textStyle: {
            fontSize: '5em',
            fontWeight: '100',
            textAlign: 'center',
            color: '#fff'
        },

        fieldStyle: {
            paddingLeft: '20px',
            paddingRight: '20px',
            width: 'calc(100% - 80px)'
        },

        emojiStyle: {
            backgroundImage: 'url(emojione.sprites.png)',
            width: '64px',
            height: '64px',
            margin: '4px'
        }
    };

    render() {
        return (
            <div>
                <Card>
                    <TextField
                        hintText="Enter something here to show it out"
                        onChange={this.onTextChange}
                        style={this.styles.fieldStyle}/>
                </Card>
                <p style={this.styles.textStyle}>
                    {
                        emojify(
                            this.state.text===""?
                                "Enter something :cool: above and it will be shown here :)":
                                this.state.text
                        , {styles: this.styles.emojiStyle})
                    }
                </p>
            </div>
        );
    }
}

export default App;
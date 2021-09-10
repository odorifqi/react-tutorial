import React, { Component } from 'react';
import Table from './Table'
import Form from './Form';

class App extends Component {

    state = { //p1 >from const to state > //s1
        chars: [

        ],
    }

    removeChars = (index) => { //s2
        const { chars } = this.state

        this.setState({
            chars: chars.filter((chars, i) => {
                return i !== index
            })
        })
    }

    handleSubmit = (char) => {
        this.setState({ chars: [...this.state.chars, char] })
    }

    render() { //s3
        const { chars } = this.state

        return (
            <div className="container">
                <h1>My first React App</h1>
                <Table charsData={chars} /*p1*/
                    removeChars={this.removeChars} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }

}

export default App
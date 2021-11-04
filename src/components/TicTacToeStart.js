import React, { Component } from 'react'
import Heading from './Heading'
import StartButton from './StartButton'

export class TicTacToeStart extends Component {
    render() {
        return (
            <div className="wrapper">
                <Heading />
                <StartButton/>
            </div>
        )
    }
}

export default TicTacToeStart

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class StartButton extends Component {
    render() {
        return (
            <div className="btn-wrap">
                <Link to="/tic-tac-toe-started" className="start-button" >
                    Start
                </Link>
            </div>
        )
    }
}

export default StartButton

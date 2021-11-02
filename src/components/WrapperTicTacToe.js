import React, { Component } from 'react'
import { Fragment } from 'react'
import TicTacToe from './TicTacToe'

export class WrapperTicTacToe extends Component {
    render() {
        return (
            <Fragment>
               <TicTacToe /> 
            </Fragment>
        )
    }
}

export default WrapperTicTacToe

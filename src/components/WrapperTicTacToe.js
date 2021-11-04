import React, { Component } from 'react';
import { Routes, Route } from 'react-router';
import NotFound from './NotFound';
import TicTacToe from './TicTacToe';
import TicTacToeStart from './TicTacToeStart';


export class WrapperTicTacToe extends Component {
    render() {
        return (
            <Routes>
               <Route exact path="/tic-tac-toe-started" element={<TicTacToe />} /> 
               <Route exact path="/" element={<TicTacToeStart />} /> 
               <Route status={404} element={<NotFound />} /> 
            </Routes>
        )
    }
}

export default WrapperTicTacToe

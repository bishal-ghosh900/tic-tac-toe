import React, { Component } from 'react';

export class Players extends Component {

    render() {
        const  {
            index,
            draw,
            playerA,
            playerB,
            circleOrCross
        } = this.props;
        return (
            <div className="players">
            {!draw[index] ? (
              !playerA[index] && !playerB[index] ? (
                <>
                  <p>PlayerA(X)</p>
                  {circleOrCross[index] ? (<p>B</p>) : (<p>A</p>)}
                  <p>PlayerB(O)</p>
                </>
              ) : playerA[index] && !playerB[index] ? (
                <p>PlayerA wins</p>
              ) : (
                <p>PlayerB wins</p>
              )
            ) : (
              <p>Draw</p>
            )}
          </div>
        )
    }
}

export default Players

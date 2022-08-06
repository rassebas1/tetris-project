import React from "react";
import Cell from "../Cell/Cell";

import "./board.scss";


import { BoardModel } from "../../helpers/gameHelper"



interface ChildrenProps {
    board: BoardModel;
}
const Board: React.FC<ChildrenProps> = (props) => {
    return <div className="board-container" >
        {props.board.map((row, rowIndex) => {
            return <div key={rowIndex} className="board-row">
                {row.map((cell, cellIndex) => {
                    // console.log(rowIndex, cellIndex, props.board[rowIndex][cellIndex]);

                    return <Cell key={cellIndex} {...cell} ></Cell>
                }
                )}
            </div>
        }
        )}
    </div>
}

export default Board;
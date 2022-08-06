import React from "react";
import { randomTetromino, TETROMINOS } from "../../Constants/tetrominos";
import { CellMeta } from "../../helpers/gameHelper";

import "./cell.scss";

const Cell: React.FC<CellMeta> = (props) => {
    // const position = (props.type === 0) ? 'cell-empty' : 'cell-filled';

    return (<div className={`cell-container cell-${props[0]}`} style={{ backgroundColor: props[0] }} >
    </div>);
};
export default React.memo(Cell);
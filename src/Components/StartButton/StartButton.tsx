import React, { FC } from "react";
import { randomTetromino } from "../../Constants/tetrominos";

import "./startButton.scss";

type StartButtonProps = {
    onClick: () => void;
}

const StartButton: FC<StartButtonProps> = (props) => {
    const handleClick = () => {
        props.onClick();
        console.log('clicked', randomTetromino());
    }

    return <div className="startButton-container" > <button onClick={handleClick}></button>startButton</div>;
};
export default StartButton;
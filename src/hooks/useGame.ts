import { useState, useEffect } from "react";
import { createStage } from "../helpers/gameHelper";

import { Player } from "./usePlayer";

import { BoardModel, CellMeta } from "../helpers/gameHelper";
import { TETROMINOS } from "../Constants/tetrominos";



export const useGame = (player: Player, resetPlayer: () => void) => {
    const [stage, setStage] = useState<BoardModel>(createStage());


    const updateStage = (prevStage: BoardModel): BoardModel => {
        // console.log(prevStage);
        console.log("y", player.pos.y);
        console.log("x", player.pos.x);

        const newStage = prevStage.map(row => row.map(cell => cell[1] === 'clear' ? [0, 'clear'] : cell));
        player.tetromino.blocks.forEach((row, y) => {
            row.forEach((value, x) => {
                // console.log(value, x, y);
                newStage[y + player.pos.y][x + player.pos.x] = [value as keyof typeof TETROMINOS, `${player.collided ? "merged" : "clear"}`] as CellMeta;
            });
        });
        if (player.collided) {
            resetPlayer();
        }
        return newStage as BoardModel;
    };
    useEffect(() => {
        if (!player.pos) return;
        setStage(prev => updateStage(prev));

    }, [player.collided, player.pos?.x, player.pos?.y, player.tetromino]);
    return [{ stage, setStage }];
}
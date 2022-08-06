import { STAGE_WIDTH, STAGE_HEIGHT, randomTetromino, TETROMINOS } from "../Constants/tetrominos";
import { useState, useCallback } from "react";
import { BoardModel, checkCollision } from "../helpers/gameHelper";


export type Player = {
    pos: { x: number, y: number },
    tetromino: { color: string, blocks: (keyof typeof TETROMINOS | number | string)[][] },
    collided: boolean
}
export const usePlayer = () => {
    const [player, setPlayer] = useState<Player>({
        pos: { x: 0, y: 0 },
        tetromino: randomTetromino(),
        collided: false
    });

    const rotateTetromino = (grid: Player["tetromino"]) => {
        const mtrx = grid.blocks[0].map((_, i) => grid.blocks.map(row => row[i]));
        console.log(mtrx);


        return mtrx.map(row => row.reverse());
    }

    const playerRotate = (stage: BoardModel) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        clonedPlayer.tetromino.blocks = rotateTetromino(clonedPlayer.tetromino);

        const posX = clonedPlayer.pos.x;
        let offset = 1;
        //console.log(checkCollision(clonedPlayer, stage, { x: 0, y: 0 }));

        while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
            clonedPlayer.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));

            rotateTetromino(clonedPlayer.tetromino);
            clonedPlayer.pos.x = posX;
            offset = 1;

        }


        setPlayer(clonedPlayer);
    }

    const updatePlayerPos = ({ x, y, collided }: { x: number, y: number, collided: boolean }): void => {
        setPlayer(prev => ({
            ...prev,
            pos: { x: prev.pos.x + x, y: prev.pos.y + y },
            collided

        }));
    }
    const resetPlayer = useCallback((): void => {
        setPlayer({
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
            tetromino: randomTetromino(),
            collided: false
        })
    }, []);

    return [{ player, updatePlayerPos, resetPlayer, playerRotate }];
}
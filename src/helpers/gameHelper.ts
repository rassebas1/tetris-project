
import { STAGE_WIDTH, STAGE_HEIGHT, TETROMINOS } from "../Constants/tetrominos";
import { Player } from "../hooks/usePlayer";

export type CellMeta = [keyof typeof TETROMINOS, string | number];
export type BoardModel = CellMeta[][];
export const createStage = () => {
    return Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, 'clear'])) as BoardModel;
}

export const checkCollision = (player: Player, stage: BoardModel, { x: moveX, y: moveY }: { x: number, y: number }) => {

    for (let y = 0; y < player.tetromino.blocks[0].length; y += 1) {
        for (let x = 0; x < player.tetromino.blocks[y].length; x += 1) {
            if (player.tetromino.blocks[y][x] !== 0) {

                // console.log(x, y, stage[y][x]);
                // console.log(player.pos.y, player.pos.x, stage[y][x]);
                if (
                    !stage[y + player.pos.y + moveY] ||

                    !stage[y + player.pos.y][x + player.pos.x] ||
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ) {
                    return true;
                }
            }
        }
    }
    return false;
}

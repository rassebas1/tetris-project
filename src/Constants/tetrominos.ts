export const TETROMINOS = {
    "0": {
        color: '0, 0, 0',
        blocks: [[0]],
    },
    I: {
        color: 'cyan',
        blocks: [

            [0, 0, 0, 0],
            ["I", "I", "I", "I"],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]
    },
    J: {
        color: 'blue',
        blocks: [
             [0, 0, 0],
            ["J", "J", "J"],
            [0, 0, "J"]
        ]
    },
    L: {
        color: 'orange',
        blocks: [
            [0, 0, 0],
            ["L", "L", "L"],
            ["L", 0, 0]
        ]
    },
    O: {
        color: 'yellow',
        blocks: [
            ["O", "O"],
            ["O", "O"]
        ]
    }
    ,
    S: {
        color: 'green',
        blocks: [
            [0, 0, 0],
            [0, "S", "S"],
            ["S", "S", 0]
        ]
    }
    ,
    T: {
        color: 'purple',
        blocks: [
            [0, 0, 0],
            [0, "T", 0],
            ["T", "T", "T"]
        ]
    },
    Z: {
        color: 'red',
        blocks: [
            [0, 0, 0],
            ["Z", "Z", 0],
            [0, "Z", "Z"]
        ]
    }
}
export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ' as keyof typeof TETROMINOS;
    const randomIndex = tetrominos[Math.floor(Math.random() * tetrominos.length)] as keyof typeof TETROMINOS;
    return TETROMINOS[randomIndex];
}

export const STAGE_WIDTH = 10;
export const STAGE_HEIGHT = 20;
export const BLOCK_SIZE = 15;
export const BLOCK_COLOR = '#0095DD';
export const BLOCK_COLOR_2 = '#0095DD';

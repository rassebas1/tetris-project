import React, { useState, useRef } from 'react'

import './game.scss'

import StatDisplay from '../StatDisplay/StatDisplay'
import Board from '../Board/Board'
import StartButton from '../StartButton/StartButton'

import { useInterval } from '../../hooks/useInterval'
import { useGame } from '../../hooks/useGame'
import { usePlayer } from '../../hooks/usePlayer'

import { createStage, checkCollision } from '../../helpers/gameHelper'

const Game = () => {
    const [stats, setStats] = useState([
        {
            value: 0,
            label: 'Score'
        },
        {
            value: 0,
            label: 'Level'
        },
        {
            value: 0,
            label: 'Lines'

        }
    ]);
    const [dropTime, setDropTime] = useState<null | number>(null);
    const [gameOver, setGameOver] = useState(false);

    const gameArea = useRef<HTMLDivElement>(null);

    const [player] = usePlayer();
    const [stage] = useGame(player.player, player.resetPlayer);

    const movePlayer = (direction: number) => {
        if (!checkCollision(player.player, stage.stage, { x: direction, y: 0 })) {
            player.updatePlayerPos({ x: direction, y: 0, collided: false });
        }
    }
    const keyUp = ({ keyCode }: { keyCode: number }) => {
        if (keyCode === 40) {
            setDropTime(1000)
        }
    }
    const move = ({ keyCode, repeat }: { keyCode: number, repeat: boolean }) => {
        if (!repeat) {
            if (keyCode === 37) {
                console.log('left');

                movePlayer(-1);
            } else if (keyCode === 39) {
                console.log('right');
                movePlayer(1);
            } else if (keyCode === 40) {
                console.log('down');
                drop();
                if (repeat) return;
                setDropTime(30);

            } else if (keyCode === 38) {
                player.playerRotate(stage.stage);
            }
        }
    }
    const drop = (): void => {
        if (!checkCollision(player.player, stage.stage, { x: 0, y: 1 })) {
            player.updatePlayerPos({ x: 0, y: 1, collided: false });
        }
        else {
            if (player.player.pos.y < 1) {
                setGameOver(true);
                setDropTime(null);

            }
            player.updatePlayerPos({ x: 0, y: 0, collided: true });
        }
    }

    const startGame = (): void => {
        if (gameArea.current) {
            gameArea.current.focus();
        }
        setStats([
            {
                value: 0,
                label: 'Score'
            },
            {
                value: 0,
                label: 'Level'
            },
            {
                value: 0,
                label: 'Lines'

            }
        ])
        setDropTime(1000);
        player.resetPlayer();
        stage.setStage(createStage());
        setGameOver(false);
    }
    useInterval(() => {
        drop();
    }, dropTime);

    return (
        <div className='game-container' role="button" tabIndex={0} onKeyDown={(e) => move(e)} onKeyUp={(e) => keyUp(e)} ref={gameArea}>
            <Board board={stage.stage}></Board>
            <aside>
                <StatDisplay items={stats} ></StatDisplay>
                <StartButton onClick={startGame}></StartButton>
            </aside>
        </div>
    )
}

export default Game
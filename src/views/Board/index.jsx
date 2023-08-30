import { useState } from 'react';
import Square from '../../components/Square'
import EndGame from '../../components/EndGame';
import styles from './Board.module.css'
import { WINNER } from '../../utils/constants';
import logoIcon from '../../assets/logo.svg';
import xIcon from '../../assets/icon-x-silver.svg';
import oIcon from '../../assets/icon-o-silver.svg';
import restartIcon from '../../assets/icon-restart.svg';
import Button from '../../components/Button';

const Board = () => {
    const [game, setGame] = useState(new Array(9).fill(null))
    const [isXCurrentPlayer, setIsXCurrentPlayer] = useState(true)
    const [winner, setWinner] = useState(null)
    const [score, setScore] = useState({x: 0, ties: 0, o: 0})
    // const [winningPattern, setWinningPattern] = useState(null)

    const checkForWinner = (game) => {
        const winningPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];

        for (let [a, b, c] of winningPatterns) {
            if (game[a] && game[a] === game[b] && game[a] === game[c]) {
                // setWinningPattern([a, b, c])
                setWinner(game[a])
                if (game[a] === 'X') {
                    setScore({...score, x: score.x + 1})
                }
                if (game[a] === 'O') {
                    setScore({...score, o: score.o + 1})
                }
                return true;
            }
        }

        if (!game.includes(null)) {
            setWinner(WINNER.TIE)
            setScore({...score, ties: score.ties + 1})
        }
    }

    const squareOnClickHandler = (squareIndex) => {
        const newGame = [...game]
        newGame[squareIndex] = isXCurrentPlayer ? 'X' : 'O'
        setGame(newGame)
        checkForWinner(newGame)
        setIsXCurrentPlayer(!isXCurrentPlayer)
    }

    const nextRoundHandler = () => {
        setGame(new Array(9).fill(null))
        setWinner(null)
        setIsXCurrentPlayer(true)
    };

    const restartHandler = () => {
        setGame(new Array(9).fill(null))
        setWinner(null)
        setIsXCurrentPlayer(true)
    };

    return (
        <>
            {winner && <EndGame winner={winner} nextRoundHook={nextRoundHandler} quitHook={() => console.log('quit')} />}
            
            <div className={styles.container}>
                <div className={styles.board}>
                    <div className={styles.boardHeader}>
                        <img src={logoIcon} alt="Tic Tac Toe" className={styles.logoImage} />
                        <div className={styles.turnContainer}>
                            <img src={isXCurrentPlayer ? xIcon : oIcon} alt="" className={styles.turnIcon} />
                            <h4>Turn</h4>
                        </div>
                        <Button onClick={restartHandler}>
                            <img src={restartIcon} alt="" />
                        </Button>
                    </div>
                    {game.map((square, index) => {
                        if (index % 3 === 0) {
                            return (
                                <div className={styles.boardRow} key={`boardRow-${index}`}>
                                    <Square value={game[index]} isXCurrentPlayer={isXCurrentPlayer} onClick={() => squareOnClickHandler(index)} />
                                    <Square value={game[index + 1]} isXCurrentPlayer={isXCurrentPlayer} onClick={() => squareOnClickHandler(index + 1)} />
                                    <Square value={game[index + 2]} isXCurrentPlayer={isXCurrentPlayer} onClick={() => squareOnClickHandler(index + 2)} />
                                </div>
                            )
                        }
                    })}
                    <div className={styles.scoreContainer}>
                        <div className={`${styles.score} ${styles.scoreLeft}`}>
                            <p className={styles.scoreText}>X (P1)</p>
                            <h2 className={styles.scoreText}>{score.x}</h2>
                        </div>
                        <div className={`${styles.score} ${styles.scoreMiddle}`}>
                            <p className={styles.scoreText}>TIES</p>
                            <h2 className={styles.scoreText}>{score.ties}</h2>
                        </div>
                        <div className={`${styles.score} ${styles.scoreRight}`}>
                            <p className={styles.scoreText}>O (P2)</p>
                            <h2 className={styles.scoreText}>{score.o}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Board;
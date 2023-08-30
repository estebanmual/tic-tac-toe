import GameNotice from '../GameNotice'
import styles from './EndGame.module.css'
import xIcon from '../../assets/icon-x.svg'
import oIcon from '../../assets/icon-o.svg'

const EndGame = props => {

    const { winner, nextRoundHook, quitHook} = props;

    let header;
    const leftButton = {
        title: 'quit',
        onClick: quitHook
    }, rightButton = {
        title: 'next round',
        onClick: nextRoundHook
    }

    const roundWinnerHeader = (winner) => {
        return (
            <>
                <h4>Player { winner === 'X' ? '1' : '2'} wins!</h4>
                <div className={styles.noticeContainer}>
                    <img src={winner === 'X' ? xIcon : oIcon} alt="" className={styles.image} />
                    <h1 className={winner === 'X' ? styles.player1 : styles.player2}>Takes the round</h1>
                </div>
            </>
        )
    }

    const roundTiedHeader = () => {
        return (
            <h1>Round tied</h1>
        )
    }

    
    
    if (winner === 'X' || winner === 'O') {
        header = roundWinnerHeader(winner)
    } else {
        header = roundTiedHeader()
    }

    return (
        <GameNotice 
            header={header}
            leftButton={leftButton}
            rightButton={rightButton}
        />
    )
}

export default EndGame
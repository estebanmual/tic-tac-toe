import styles from './GameNotice.module.css'
import Button from '../Button'
import { BUTTON_STYLES } from '../../utils/constants'

const GameNotice = (props) => {

  const { header, leftButton, rightButton} = props;

  return (
    <div className={styles.container}>
        <div className={styles.banner}>
            {header}
            <div className={styles.buttonsContainer}>
              <Button title={leftButton.title} type={BUTTON_STYLES.TYPE.BUTTON_2} variant={BUTTON_STYLES.VARIANT.SECONDARY} onClick={leftButton.onClick} />
              <Button title={rightButton.title} type={BUTTON_STYLES.TYPE.BUTTON_1} variant={BUTTON_STYLES.VARIANT.SECONDARY} onClick={rightButton.onClick}/>
            </div>
        </div>
    </div>
  )
}

export default GameNotice
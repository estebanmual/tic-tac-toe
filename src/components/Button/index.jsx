import React from 'react'
import styles from './Button.module.css'
import { BUTTON_STYLES } from '../../utils/constants';

const Button = (props) => {
  const { 
    type: buttonType, 
    variant: buttonVariant, 
    title,
    onClick,
    children
  } = props;

  let containerStyles = `${styles.container}`;

  if (buttonType === BUTTON_STYLES.TYPE.BUTTON_1) {
    containerStyles += ` ${styles.button_1}`
  } else {
    containerStyles += ` ${styles.button_2}` 
  }

  if (buttonVariant === BUTTON_STYLES.VARIANT.PRIMARY) {
    containerStyles += ` ${styles.button_primary}`
  } else {
    containerStyles += ` ${styles.button_secondary}`
  }

  return (
    <button className={containerStyles} onClick={() => onClick()}>
      {title}
      {children}
    </button>
  )
}

export default Button
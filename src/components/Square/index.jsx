import React, { useEffect, useState } from 'react'
import styles from './Square.module.css'
import xOutline from '../../assets/icon-x-outline.svg'
import oOutline from '../../assets/icon-o-outline.svg'
import xIcon from '../../assets/icon-x.svg'
import oIcon from '../../assets/icon-o.svg'

function Square(props) {
    const { value, isXCurrentPlayer, onClick} = props;

    const [squareValue, setSquareValue] = useState(value)
    const [imageSrc, setImageSrc] = useState('')

    useEffect(() => { 
        if (value === 'X') {
            setImageSrc(xIcon)
        } else if (value === 'O') {
            setImageSrc(oIcon)
        } else if ( value === null ){
            setImageSrc(null)
            setSquareValue(value)
        }
    }, [value])

    const squareOnMouseEnterHandler = () => {
        if (squareValue) return;
        if(isXCurrentPlayer) {
            setImageSrc(xOutline)
        } else {
            setImageSrc(oOutline)
        }
    };

    const squareOnMouseLeaveHandler = () => {
        if (squareValue) return;
        setImageSrc('')
    };

    const squareOnClickHandler = () => {
        if (squareValue) return;
        setSquareValue(isXCurrentPlayer ? 'X' : 'O')
        onClick()
    } 

    return (
        <button 
            onMouseOver={squareOnMouseEnterHandler} 
            onMouseLeave={squareOnMouseLeaveHandler}
            onClick={squareOnClickHandler}
            className={`${styles.container} ${squareValue && styles.noClick }`}
        >
            <img 
                src={ imageSrc && imageSrc } 
                alt={squareValue && squareValue } 
                draggable={false} 
                onDragStart={() => false}
            />
        </button>
    )
}

export default Square
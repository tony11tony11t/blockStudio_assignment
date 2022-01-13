import React from 'react'
import './playButton.styles.scss'

export default function PlayButton({handleClick}) {
    return (
        <div className='playButton__container' onClick={handleClick}>
            <div className='playButton__content'>
            </div>
        </div>
    )
}

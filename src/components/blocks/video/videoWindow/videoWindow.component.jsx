import React from 'react'
import './videoWindow.styles.scss'

export default function VideoWindow({videoWindowVisible , handleClick}) {

    return (
        <div className={`videoWindow__container ${videoWindowVisible ? "" : "hide"}`}>
            <div className='videoWindow__content'>
            <div className="videoWindow__content-close" onClick={handleClick}></div>
            <div className='videoWindow__content-video'>
                <iframe src="https://www.youtube.com/embed/PJJhHihvDpo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>
        </div>
    )
}
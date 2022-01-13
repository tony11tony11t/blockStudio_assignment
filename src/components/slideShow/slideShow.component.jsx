import React from 'react'
import './slideShow.styles.scss'

export default function SlideShow({imgs , slideIndex}) {


    return (
        <div className="slideShow__container">
            <div className="slideShow__content">
                {
                    imgs.map((img , i) => <div 
                        className="slideShow__content-slide"
                        style={{
                            backgroundImage:`url(${img})`,
                            marginLeft:`${i == 0 ? -(100 / imgs.length)  * slideIndex : 0}%`
                        }}></div>
                    )
                }
            </div>
        </div>
    )
}

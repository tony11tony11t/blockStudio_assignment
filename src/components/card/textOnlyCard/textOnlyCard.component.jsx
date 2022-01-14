import React from 'react'
import './textOnlyCard.styles.scss'

function TextOnlyCard({style} , ref) {
    return (
        <div className='textOnlyCard__container' style={style} ref={ref} data-aos={`${window.innerWidth > 1200 ? "flip-left" : "fade-right"}`}>
             <div className='textOnlyCard__content'>
                <h3>Award winning civil contractors that  government.</h3>
                <div className='textOnlyCard__content__body'>
                    <p>
                        The Australian Treasury Building & King Edward TCE Barton Canberra City.
                    </p>
                    <div className='textOnlyCard__content-arrow'></div>
                </div>
            </div>
        </div>
    )
}

export default React.forwardRef(TextOnlyCard)

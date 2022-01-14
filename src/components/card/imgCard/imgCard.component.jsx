import React from 'react'
import './imgCard.styles.scss'
import img01 from '../../../assets/card01.png'
import img02 from '../../../assets/card02.png'
import img03 from '../../../assets/card03.png'

function ImgCard({style} , ref) {

    const chooseImg = () => {
        const imgArray = [img01 , img02 , img03];
        return imgArray[parseInt(Math.random() * imgArray.length)]

    }
    return (
        <div className='imgCard__container' style={style} ref={ref} data-aos={`${window.innerWidth > 1200 ? "flip-left" : "fade-right"}`}>
            <div className='imgCard__content'>
                <div className="imgCard__content__img" style={{
                    backgroundImage:`url(${chooseImg()})`
                }}></div>
                <div className='imgCard__content__body'>
                    <p className='imgCard__content__body-tag'>Award</p>
                    <h6>Woden Public Realm Improvements Works Package Lift & Stairs</h6>
                    <p>Urban Public Realm Refurbishment.</p>
                    <div className='imgCard__content__body-field'>
                        <div>
                            <p className='field-name'>CLENT</p>
                            <p className='field-value'>ACT Government</p>
                        </div>
                        <div>
                            <p className='field-name'>STATUS</p>
                            <p className='field-value'>Completed 2017</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.forwardRef(ImgCard)
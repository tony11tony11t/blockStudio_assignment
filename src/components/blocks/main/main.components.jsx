import React, { useState , useEffect} from 'react'
import './main.styles.scss'

import Header from '../../header/header.component'
import SlideShow from '../../slideShow/slideShow.component'
import SocialLink from '../../socialLink/socialLink.component'

import slideShow01 from '../../../assets/slideShow01.png'
import slideShow02 from '../../../assets/slideShow02.png'
import slideShow03 from '../../../assets/slideShow03.png'


function Main(){
    const imgs = [slideShow01 , slideShow02 , slideShow03];

    const [slideIndex , setSlideIndex] = useState(0);

    useEffect(() => {
        const autoSlideShow = setInterval(() => {
            setSlideIndex(prevSlideIndex => 
                prevSlideIndex + 1  >= imgs.length
                ? 0 
                : prevSlideIndex + 1
            )
        } , 5000)
        return () => clearInterval(autoSlideShow)
    },[])


    return (
        <div className='main__container'>
            <SlideShow imgs={imgs} slideIndex={slideIndex}/>
            <div className='main__content'>
                <Header />
                <div className='main__content__title' data-aos="fade-up">
                    <h1>Commercial builders with pride – workmanship that values quality.</h1>
                    <p className='font-body01'>Acclaim Contractors are a highly specialised local business with over 20 years building and civil industry experience with many accolades, commendations and awards recognising the building .</p>
                    <div className='main__content__title-slideshow'>
                        {
                            imgs.map((_ , i) => (
                                <div 
                                    className={`slideshowDot ${slideIndex == i ? "selected" : ""}`}
                                    onClick={() => setSlideIndex(i)}>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='main__content__socialLink'>
                    <SocialLink />
                </div>
                <p className='main__content-copyright'>Block Studio© Copyright. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Main
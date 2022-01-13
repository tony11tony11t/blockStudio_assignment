import React, { useState , useEffect} from 'react'
import './main.styles.scss'
import Header from '../../header/header.component'
import  { ReactComponent as FacebookIcon } from '../../../assets/facebook.svg'
import  { ReactComponent as InstagramIcon } from '../../../assets/instagram.svg'
import  { ReactComponent as YoutubeIcon } from '../../../assets/youtube.svg'
import slideShow01 from '../../../assets/slideShow01.png'
import slideShow02 from '../../../assets/slideShow02.png'
import slideShow03 from '../../../assets/slideShow03.png'
import SlideShow from '../../slideShow/slideShow.component'


function Main(){
    const imgs = [slideShow01 , slideShow02 , slideShow03];
    const [slideIndex , setSlideIndex] = useState(0);

    useEffect(() => {
        const autoSlideShow = setInterval(() => {
            setSlideIndex(prevslideIndex => prevslideIndex + 1  >= imgs.length ? 0 : prevslideIndex + 1)
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
                            imgs.map((img , i) => (
                                <div 
                                    className={`slideshowDot ${slideIndex == i ? "selected" : ""}`}
                                    onClick={() => setSlideIndex(i)}>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='main__content__socialLink'>
                    <FacebookIcon />
                    <InstagramIcon />
                    <YoutubeIcon />
                </div>
                <p className='main__content-copyright'>Block Studio© Copyright. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Main
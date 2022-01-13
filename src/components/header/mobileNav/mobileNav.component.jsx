import React, { useState } from 'react'
import './mobileNav.styles.scss'
import  { ReactComponent as FacebookIcon } from '../../../assets/facebook.svg'
import  { ReactComponent as InstagramIcon } from '../../../assets/instagram.svg'
import  { ReactComponent as YoutubeIcon } from '../../../assets/youtube.svg'

export default function MobileNav() {

    const [visible , setVisible] = useState(false)

    const handleClick = () => {
        setVisible(!visible);
        !visible ? document.body.classList.add('mobileNavOpen') : document.body.classList.remove('mobileNavOpen');
    }

    

    return (
        <div className='mobileNav__container'>
            <div className={`mobileNav-button ${visible ? "show" : ""}`} onClick={handleClick}>
                <div></div>
            </div>
            <div className={`mobileNav__content ${visible ? "show" : ""}`}>
                <div className='mobileNav__content-nav'>
                    <a onClick={() => false} ><h5>About</h5></a>
                    <a onClick={() => false} ><h5>Website</h5></a>
                    <a onClick={() => false} ><h5>Branding</h5></a>
                </div>
                <div className='mobileNav__content__footer'>
                    <p>T. 02-2885-8586<br/>
                        E. info@blockstudio.tw<br/>
                        3F., No.2, Ln. 80, Sec. 4, Chengde Rd., Shilin Dist., Taipei City 111, Taiwan</p>
                        <div className='mobileNav__content__socialLink'>
                            <FacebookIcon />
                            <InstagramIcon />
                            <YoutubeIcon />
                        </div>
                </div>
            </div>
        </div>
    )
}

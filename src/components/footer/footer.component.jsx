import React from 'react'
import './footer.styles.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import  { ReactComponent as FacebookIcon } from '../../assets/facebook.svg'
import  { ReactComponent as InstagramIcon } from '../../assets/instagram.svg'
import  { ReactComponent as YoutubeIcon } from '../../assets/youtube.svg'

export default function Footer() {
    return (
        <div className='footer__container'>
        <div className='footer__content'>
            <Logo className="footer__content-logo"/>
            <div className='footer__content-info'>
                <div className='footer__content-nav'>
                    <a onClick={() => false} >Home</a>
                    <a onClick={() => false} >Website</a>
                    <a onClick={() => false} >Branding</a>
                </div>
                <p>T. 02-2885-8586<br/>
                E. info@blockstudio.tw<br/>
                3F., No.2, Ln. 80, Sec. 4, Chengde Rd., Shilin Dist., Taipei City 111, Taiwan</p>
            </div>
            <div className='footer__content__socialLink'>
                <FacebookIcon />
                <InstagramIcon />
                <YoutubeIcon />
            </div>
        </div>
    </div>
    )
}

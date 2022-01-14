import React from 'react'
import  { ReactComponent as FacebookIcon } from '../../assets/facebook.svg'
import  { ReactComponent as InstagramIcon } from '../../assets/instagram.svg'
import  { ReactComponent as YoutubeIcon } from '../../assets/youtube.svg'
import './socialLink.styles.scss'

export default function SocialLink({color = "black"}) {
    return (
        <div className='socialLink__container'>
            <div className={`socialLink__content color-${color}`}>
                <FacebookIcon />
                <InstagramIcon />
                <YoutubeIcon />
            </div>
        </div>
    )
}

import React from 'react'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import MobileNav from './mobileNav/mobileNav.component'

export default function Header() {
    return (
        <div className='header__container'>
            <div className='header__content'>
                <Logo className="header__content-logo"/>
                <div className='header__content-nav'>
                    <a onClick={() => false} >Home</a>
                    <a onClick={() => false} >Website</a>
                    <a onClick={() => false} className='link-selected'>Branding</a>
                </div>
                <MobileNav />
            </div>
        </div>
    )
}

import React , {useState} from 'react'
import './video.styles.scss'
import videoPreview from '../../../assets/videoPreview.png'
import PlayButton from './playButton/playButton.components'
import VideoWindow from './videoWindow/videoWindow.component'

export default function Video() {
    const [videoWindowVisible , setVideoWindowVisible] = useState(false);
    return (
        <div className='video__container'>
            <div className='video__content' data-aos="fade-up">
                <img src={videoPreview} onClick={() => setVideoWindowVisible(true)}/>
                <PlayButton handleClick={() => setVideoWindowVisible(true)}/>
            </div>
            <VideoWindow videoWindowVisible = {videoWindowVisible} handleClick={() => setVideoWindowVisible(false)}/>
        </div>
    )
}

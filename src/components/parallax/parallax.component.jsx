import React , {useEffect , useRef , useState} from 'react'
import './parallax.styles.scss'

export default function Parallax({pos , width , height , level , mobile = true}) {

    if(window.innerWidth > 1200)
        mobile = true

    const parallaxNode = useRef(null);
    const [offsetX , setOffsetX] =  useState(0);
    const [offsetY , setOffsetY] =  useState(0);
    let prev = {
        x : 0,
        y : 0,
    }

    const handleMove = (e) => {

        const LEVEL = level;

        setOffsetX(-(e.x / (window.innerWidth / LEVEL)))
        setOffsetY(-(e.y / (window.innerHeight / LEVEL)))
        
        prev = {
            x : e.x,
            y : e.y
        }
    }

    const handleResize = () => {
        
    }

    useEffect(() => {
        window.addEventListener("mousemove" , handleMove)
        return () => window.removeEventListener("mousemove" , handleMove)
    }, [])

    return (
        <div    className='parallax-content' 
                ref={parallaxNode}
                data-aos="zoom-in"
                style={{
                    ...pos,
                    width: width,
                    height: height,
                    transform:`translate(${offsetX}px , ${offsetY}px)`,
                    transition:`transform 0s,opacity .4s`,
                    display:`${mobile ? "block" : "none"}`
                }}></div>
    )
}

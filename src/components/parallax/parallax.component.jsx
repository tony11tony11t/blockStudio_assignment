import React , {useEffect , useRef , useState} from 'react'
import './parallax.styles.scss'

export default function Parallax({pos , width , height , level}) {

    const parallaxNode = useRef(null);

    const [offsetX , setOffsetX] =  useState(0);
    const [offsetY , setOffsetY] =  useState(0);

    let prev = {
        x : 0,
        y : 0,
    }

    const handleMove = (e) => {

        setOffsetX(-(e.x / (window.innerWidth / level)))
        setOffsetY(-(e.y / (window.innerHeight / level)))
        
        prev = {
            x : e.x,
            y : e.y
        }
    }

    useEffect(() => {
        window.addEventListener("mousemove" , handleMove)
        return () => window.removeEventListener("mousemove" , handleMove)
    }, [])

    return (
        <div    className   = 'parallax-content' 
                ref         = {parallaxNode}
                data-aos    = "zoom-in"
                style       = {{
                    ...pos,
                    width       : width,
                    height      : height,
                    transform   :`translate(${offsetX}px , ${offsetY}px)`,
                    transition  :`transform 0s,opacity .4s`
                }}></div>
    )
}

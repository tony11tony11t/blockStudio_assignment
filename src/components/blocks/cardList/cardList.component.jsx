import React, { useState , useRef , useEffect, createRef} from 'react'
import './cardList.styles.scss'
import TextOnlyCard from '../../card/textOnlyCard/textOnlyCard.component'
import ImgCard from '../../card/imgCard/imgCard.component'

export default function CardList() {

    const MAX_CARDS = 24;

    const listDom = useRef(null)
    const cardsRef = useRef([]);

    const [cards , setCardList] = useState(["text","text","text","img","img","img"])
    const [maxHeight , setMaxHeight] = useState(0);
    const [scrollLoading , setScrollLoading] = useState(false)

    const randomCard = () => Math.random() >= 0.5 ? "text" : "img"

    const handleClick = () => {
        setScrollLoading(true);
        setCardList([...cards , randomCard() , randomCard() , randomCard()])
    }

    const getCardPosition = (i , node) => {
        if(!listDom || !node) return ;

        let column = window.innerWidth > 1200 ? 3 : 1; 

        const index = {
            x : i % column,
            y : parseInt(i / column)
        }
        const listNodeAttr = listDom.current.getBoundingClientRect();
        const nodeAttr = node.getBoundingClientRect();

        
        let posX = (listNodeAttr.width / column) * index.x + 10 * index.x;

        let posY = i < column ? 0 : cardsRef.current[i - column].getBoundingClientRect().bottom - listNodeAttr.top + 20
        
        if(i == 1 && column == 3)
            posY += 32;
        else if(i == 2 && column == 3)
            posY += 64;
        
        setMaxHeight(prevHeight => posY + nodeAttr.height > prevHeight ? posY + nodeAttr.height : prevHeight)
        
        return `
            width:${(listNodeAttr.width) / column - (column == 3 ? 20 : 0)}px;
            transform : translateX(${posX}px) translateY(${posY}px);
        `
    }

    const handleScroll = () =>  {
        const listNodeAttr = listDom.current.getBoundingClientRect();
        if(listNodeAttr.top + listNodeAttr.height < 600){
            setCardList(prevCards => prevCards.length < MAX_CARDS ? [...cards , randomCard() , randomCard() , randomCard()] : prevCards)
        }
    }

    const cardsResize = () => {
        cardsRef.current.forEach((node , i) => {
            node.style = getCardPosition(i , node);
        })
    }

    useEffect(() => {
        if(cardsRef.current.length > 0){
            cardsResize();
        }
        if(scrollLoading){
            window.addEventListener("scroll" , handleScroll)
        }

        return () => window.removeEventListener("scroll" , handleScroll)
    }, [cards , scrollLoading])

    useEffect(() => {
        window.addEventListener("resize" , cardsResize);
        return () => window.removeEventListener("resize" , cardsResize);
    }, [])

    return (
        <div className='cardList__container' data-aos="fade-up">
             <div className='cardList__content'>
                <div className='cardList__content__list' ref={listDom} style={{height:maxHeight}}>
                    {
                        cards.map((type , i) => (
                            type == "text"
                            ? <TextOnlyCard key={i} ref={node => {cardsRef.current[i] = node}}/> 
                            : <ImgCard key={i} ref={node => {cardsRef.current[i] = node}}/>
                        ))
                    }
                </div>
                <button className={`cardList__content-moreButton ${scrollLoading ? "hide" : ""}`} onClick={handleClick}>more</button>
            </div>
        </div>
    )
}

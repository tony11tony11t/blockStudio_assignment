import React, { useState , useRef , useEffect} from 'react'
import './cardList.styles.scss'
import TextOnlyCard from '../../card/textOnlyCard/textOnlyCard.component'
import ImgCard from '../../card/imgCard/imgCard.component'

export default function CardList() {

    const MAX_CARDS = 24;
    const MAX_EACH_LOAD_CARD = 3;

    const listDom   = useRef(null)
    const cardsRef  = useRef([]);

    const [cards , setCardList]                 = useState(["text","text","text","img","img","img"])
    const [maxHeight , setMaxHeight]            = useState(0);
    const [scrollLoading , setScrollLoading]    = useState(false)

    

    const randomCard = () => Math.random() >= 0.5 ? "text" : "img"

    const handleClick = () => {
        setScrollLoading(true);
        setCardList([...cards , ...Array.from({length : MAX_EACH_LOAD_CARD} ,() => randomCard())])
    }

    const getCardPosition = (i , node) => {
        if(!listDom || !node) return ;

        const BREAK_POINT = 1200;

        const column        = window.innerWidth > BREAK_POINT ? 3 : 1;
        const listNodeAttr  = listDom.current.getBoundingClientRect();
        const nodeAttr      = node.getBoundingClientRect();
        const index         = {
            x : i % column,
            y : parseInt(i / column)
        }
        
        const getPos = () => {
            const MARGIN = 20;
            const SECOND_ROW_TRANSLATE = 32;
            const THIRD_ROW_TRANSLATE = 64;

            let pos = {
                x: ( listNodeAttr.width / column + MARGIN / 2 ) * index.x,
                y: 0 
            }

            if(i >= column){
                let prevTopNodeAttr = cardsRef.current[i - column].getBoundingClientRect()
                pos.y = prevTopNodeAttr.bottom - listNodeAttr.top + MARGIN
            }

            if(column == 3){
                if(i == 1){
                    pos.y += SECOND_ROW_TRANSLATE;
                }else if(i == 2){
                    pos.y += THIRD_ROW_TRANSLATE;
                }
            }

            return pos;
        }

        const getWidth = () => {
            let eachRowWidth = listNodeAttr.width / column

            if(column == 3){
                eachRowWidth -= 20;
            }

            return eachRowWidth
        }

        const pos = getPos();

        setMaxHeight(prevHeight => {
            let nowHeight = pos.y + nodeAttr.height;
            return nowHeight > prevHeight ? nowHeight : prevHeight
        })
        
        return `
            width:${getWidth()}px;
            top:${pos.y}px;
            left:${pos.x}px;
        `
    }

    const handleScroll = () =>  {
        const LOAD_LIMIT = 600
        const listNodeAttr = listDom.current.getBoundingClientRect();

        if(listNodeAttr.top + listNodeAttr.height < LOAD_LIMIT){
            setCardList(prevCards => (
                prevCards.length < MAX_CARDS 
                    ? [...cards , ...Array.from({length : MAX_EACH_LOAD_CARD} ,() => randomCard())] 
                    : prevCards
            ))
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
        <div className='cardList__container'>
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

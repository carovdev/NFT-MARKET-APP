import React from 'react'
import styled from 'styled-components'
import { BiChevronDown } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import image4 from '../../assets/images/image4.png';
import { Colors } from '../Theme';
import Img from './styled/img.styled';

const items = [
    {id:1,title:'Universo 34',subTitle:'Maketi',image:image1},
    {id:2,title:'Holy',subTitle:'MonnLee',image:image2},
    {id:3,title:'Dister',subTitle:'Glass20',image:image3},
    {id:4,title:'ColdTe',subTitle:'Lexi',image:image4},
]

const FeaturedTabEl = styled.div`
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:0.5rem;
    position:relative;
    overflow:hidden;
    height:400px;
`
const Item = styled.div`
    background-color:${Colors.CardBackground};
    padding 0 0.4rem;
    border-radius:12px;
    display:flex;
    flex-direction:column;
    cursor: pointer;
`

const Title = styled.span`
    font-size:1.1rem;
    margin-top: 0.5rem;
`

const SubTitle = styled.span`
    font-size:1rem;
    color:${Colors.Gray};
`

const ShowMore = styled.span`
    text-align:center;
    position:absolute;
    left: 0;
    bottom: 0;
    width:100%;
    font-weight:500;
    background:rgba(255,255,255,0.32);
    padding:1rem;
    border: 1px solid ${Colors.GrayBroder};
    backdrop-filter:blur(17px);
    border-radius:12px;
    cursor:pointer;
;
   
`

const BottomFade = styled.span`
    text-align:center;
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    height:25%;
    background-image:linear-gradient(rgba(255,255,255,0),${Colors.Background});
`


export default function FeaturedTab() {
    const nav = useNavigate()

  return (
   <FeaturedTabEl>
    {items.map(item => {
        return (
            <Item onClick={() => {
                nav("/products")
            }}>
            <Img src={item.image} width/>
            <Title>{item.title}</Title>
            <SubTitle>{item.subTitle}</SubTitle>
        </Item>
        )
    })}
    <BottomFade />
    <ShowMore>
        <BiChevronDown /> Show More
    </ShowMore>
   </FeaturedTabEl>
  )
}

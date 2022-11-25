import styled from "styled-components";
import { Colors } from "../../Theme";
import artImage from './../../images/artworkImage.png';
import ShopImage1 from './../../images/shopImage1.png';
import Button from "./Button.styled";
import Img from './img.styled';

const ProductCardEl = styled.div`
background-color:rgba(250,250,250,0.1);
box-shadow: 0px 15px 50px rgba(0,0,0,0.12);
border-radius:12px;
margin:1rem 0.5rem 0 0.5rem;
padding:0.5rem;
display:flex;
justify-content:center;
flex-direction:column;
`

const InfoContainer = styled.span`
display:flex;
justify-content:space-between;
align-items:center;
padding:2rem 1rem;

`
const Info = styled.span`
display:flex;
flex-direction:column;
justify-content:center;
font-size:1.5rem;
row-gap:0.5rem;

`
const Name = styled.span``
const Price = styled.span`
font-weight:500;
`
const ImgAvatar = styled.img`
width:50px;

`
const ButtonContainer = styled.span`
flex:1;
display:flex;
column-gap:1rem;
`
const Circle = styled.span`
width:1.2rem;
height:1.2rem;
display:inline-block;
margin:auto 0;
border-radius:50%;
border:solid 2px ${Colors.CardBackground};
background-color:green;
`




export default function ProductCard() {
  return (
    <ProductCardEl>
        <Img src={artImage} width="100%"/>
        <InfoContainer>
            <Info>
                <Name>Elements</Name>
                <Price>3.54 ETH</Price>
            </Info>
            <ImgAvatar src={ShopImage1} />
        </InfoContainer>
        <ButtonContainer>
            <Button flex disabled fw np>
                <Circle />
                Disabled
            </Button >
            <Button fw np>Option</Button>
        </ButtonContainer>
    </ProductCardEl>
  )
}




import styled from "styled-components";
import { Colors } from "../Theme";
import ShopImage1 from './../images/shopImage1.png';
import Button from './styled/Button.styled';



const StoreHeroEl = styled.section`
display:flex;
flex-direction:column;
align-items:center;
margin:1rem 0 1.5rem 0;
row-gap:1rem;

`
const Img = styled.img`
width:150px;
`
const Title = styled.span`
font-size:1.6rem;
font-weight:500;
`
const SubTitle = styled.span`
color:${Colors.Gray};
`
const InfoContainer = styled.span`
display:flex;
flex-direction:column;
align-items:center;
`
const ButtonContainer = styled.span`
display:flex;
column-gap:1rem;
`

export default function StoreHero() {
  return (
    <StoreHeroEl>
      <Img src={ShopImage1}  />
      <InfoContainer>
        <Title>Cristals</Title>
        <SubTitle>Verified artist</SubTitle>
      </InfoContainer>
      <ButtonContainer>
        <Button>Follow</Button>
        <Button np>Contact</Button>
      </ButtonContainer>
    </StoreHeroEl>
  )
}

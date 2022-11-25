import styled from "styled-components";
import bidImage from '../images/bidImage.png';
import { Colors } from "../Theme";



const MyBidsListEl = styled.div`
padding:0 1rem;
margin-top:1rem;
`
const Title = styled.h3`
font-weight:500;
margon-bottom:1rem;
`
const ItemList = styled.div`
display:flex;
flex-direction:column;
row-gap:1rem;
`

const BidItemEl = styled.span`
display:flex;
align-items:center;
padding:0.5rem;
width:100%;
cursor:pointer;
transition-property:background-color,border-radius;
transition-duration:0.5s;


&:hover{
    background-color:${Colors.GrayBroder};
    border-radius:12px;

}
`
const Img = styled.img`
border-radius:12px;
width:4rem ;
height:4rem;
`
const BidData = styled.span`
display:flex;
flex:1;
flex-direction:column;
justify-content:center;
margin-left:1rem;
row-gap:0.5rem;
`
const BidTitle = styled.span`
font-weight:500;

`
const BDescription = styled.span`
color:${Colors.Gray}
`
const BidAmount = styled.span`
justify-self:flex-end;
font-weight:500;

`


 function BidItem() {
  return (
    <BidItemEl>
        <Img  src={bidImage} />
        <BidData>
            <BidTitle>Clay boys 174</BidTitle>
            <BDescription>Waldo</BDescription>
        </BidData>
        <BidAmount>1.4ETH</BidAmount>
    </BidItemEl>
  )
}


export default function MyBidsList() {
  return (
    <MyBidsListEl>
        <Title>Your bids</Title>
        <ItemList>
        <BidItem />
        <BidItem />
        </ItemList>
    </MyBidsListEl>
  )
}

import styled from "styled-components";
import { RiSearchLine } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';
import { FiArrowLeft } from 'react-icons/fi';
import Tabs from './styled/Tabs.styled';
import storeImage2 from './../images/shopImage2.png';
import Img from './styled/img.styled';
import { useNavigate  } from 'react-router-dom';
import StoreHero from "./StoreHero";
import PageContainer from "./styled/PageContainer.styled";



const data = [
  {id:1,title:'Artworks',content:<Img src={storeImage2} width="100%"/>},
  {id:2,title:'Collections',content: <div>Collections</div>},
  {id:3,title:'About',content: <div>About</div>},
]

const TopMenu = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:0 1rem;
font-size:1.5rem;
`


export default function StorePage() {

const nav = useNavigate();
  return (
    <PageContainer>
        <TopMenu>
            <FiArrowLeft onClick={() => {
                nav(-1)
            }}/>
            <span>
            <RiSearchLine style={{marginRight:'1.5rem'}}/>
            <BsThreeDots />
            </span>
        </TopMenu>
        <StoreHero />
        <Tabs data={data}/>
    </PageContainer>
  )
}




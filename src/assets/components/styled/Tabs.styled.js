import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Colors } from "../../Theme";



const TabsEl = styled.div`
  width: 100%;
`;

const TitleContainer = styled.span`
  display: flex;
  justify-content: space-around;
  margin: 0 1.5rem;
  padding: 0 1rem;
`;

const Title = styled.span`
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
  ${(p) => (p.active ? "" : `color:${Colors.Gray}`)};
  ${(p) => (p.active ? `font-weight:500;` : "")};

  ::after {
    ${(p) => (!p.active ? "display:none" : "")}
    content:'';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0.4rem;
    height: 0.3rem;
    background-color: ${Colors.Primary};
    border-radius: 50%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;

const Content = styled.div`
  margin: 0 0.5rem;
  margin-top: 1rem;
`;

export default function Tabs({ data }) {
    const [CurrentTab,SetCurrentTab] = useState(data[0]);

  return (
    <TabsEl>
      <TitleContainer>
        {data.map((tabs) => {
            return <Title  onClick={() => {
                if(CurrentTab.id !== tabs.id){
                    SetCurrentTab(tabs)
                }
            }} active={CurrentTab.id === tabs.id}>{tabs.title}</Title>
        })}
      </TitleContainer>
      <Content>{CurrentTab.content}</Content>
    </TabsEl>
  );
}

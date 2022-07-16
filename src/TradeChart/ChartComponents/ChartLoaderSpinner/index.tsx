import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: center;

align-items: center;
vertical-align: center;
`;
const Loader = styled.section`
border: 10px solid rgba(13,109,168,255);
border-top: 10px solid #063970;
border-radius: 50%;
width: 50px;
height: 50px;
animation: spin 2s linear infinite;

@keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 
`;

interface IProps {
    text?: string,
}
export default function ChartLoaderSpinner({text}: IProps){
    return (
        <LoadingContainer>
            <Loader/>
            {text}
        </LoadingContainer>
    )
}
import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;
`;
const Loader = styled.section`
flex: 0 0 120px;
`;

interface IProps {
    text: string,
}
export default function ChartLoaderSpinner({text}: IProps){
    return (
        <LoadingContainer>
            <Loader>{text}</Loader>
        </LoadingContainer>
    )
}
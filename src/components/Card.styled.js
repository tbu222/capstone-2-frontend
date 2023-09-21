import styled from "styled-components";

export const Container = styled.div`
    width: ${(props)=> props.type !=="sm" && "360px"};;
    margin-bottom: ${(props)=> props.type ==="sm" ? "10px":"50px"};
    cursor: pointer;
    display: ${(props)=> props.type ==="sm" && "flex"};
    gap: 10px;
`;

export const Image = styled.img`
    width: 100%;
    height: ${(props)=> props.type ==="sm" ? "150px":"200px"};
    background-color: grey;
    flex: 1;
`;

export const Details = styled.div`
    display: flex;
    margin-top: ${(props)=> props.type ==="sm" ? "0px":"15px"};
    gap: 10 px;
    flex: 1;
`;

export const ChannelImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: grey;
    display: ${(props)=> props.type ==="sm" &&"none"};
`;

export const Texts = styled.div``;

export const Title = styled.h1`
    font-size: 15px;
    font-weight: 500;
    color: ${({theme})=> theme.text }
`;

export const ChannelName = styled.h2`
    font-size: 15px;
    color: ${({theme})=> theme.textSoft }
    margin: 10px 0px;
`;

export const Info = styled.div`
    font-size: 15px;
    color: ${({theme})=> theme.textSoft }
`;

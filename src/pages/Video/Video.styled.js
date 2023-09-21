import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    gap: 25px;
`;

export const Content = styled.div`
    flex:5;
`;
export const VideoWrapper = styled.div``;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({theme})=> theme.text };
`;

export const Details = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
`;

export const Info = styled.span`
    color: ${({theme})=> theme.textSoft };
`;

export const Buttons = styled.div`
    display: flex;
    gap: 15px;
    color: ${({theme})=> theme.text };
`;

export const Button = styled.div`
    display:flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`;

export const Hr = styled.hr`
    border: 0.5px solid  ${({theme})=> theme.soft };
    margin: 15px 0px;
`;

export const Recommendation = styled.div`
    flex: 2;
`;
export const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ChannelInfo = styled.div`
    display:flex;
    gap:20px;
`;

export const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const ChannelDetail = styled.div`
    display:flex;
    flex-direction: column;
    color: ${({theme})=> theme.text};
`;

export const ChannelName = styled.span`
    font-weight: 500;
`;

export const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 15px;
    color: ${({theme})=> theme.textSoft};
    font-size: 15px;
`;

export const Description = styled.p`
    font-size: 15px;
`;

export const Subscribe = styled.button`
    background-color: red;
    font-weight: 500;
    color: white;
    border: None;
    border-radius: 5px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
`;

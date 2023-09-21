import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    gap: 10px;
    margin: 30px 0px;
`;

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({theme})=> theme.text };
`;
export const Name = styled.span`
    font-size: 15px;
    font-weight: 500;
`;

export const Date = styled.span`
    font-size: 10px;
    font-weight: 300;
    color: ${({theme})=> theme.textSoft };
    margin-left: 5px;
`;

export const Text = styled.span`
    font-size: 15px;
`;

export const Button = styled.button`
    justify-self: flex-end;
    align-self: flex-start;
    text-align: right;
    padding: 10px 15px;
    background-color: transparent;
    border: 1px solid red;
    border-radius: 3px;
    color: red;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
`;

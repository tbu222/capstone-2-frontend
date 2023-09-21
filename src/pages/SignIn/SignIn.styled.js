import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction:column;
    justify-content: center;
    height: calc(100vh - 50px);
    color: ${({theme})=> theme.text};
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction:column;
    background-color: ${({theme})=> theme.bgLighter};
    border: 1px solid ${({theme})=> theme.soft};
    padding: 20px 50px;
    gap: 10px;
`;

export const Title = styled.h1`
    font-size: 25px;
`;

export const SubTitle = styled.h2`
    font-size: 20px;   
    font-weight: 400;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
`;

export const Input = styled.input`
    border: 1px solid ${({theme})=> theme.soft};
    border-radius: 5px;
    padding: 10px;
    width: 100%;
`;

export const Button = styled.button`
    border-radius: 5px;
    border: none;
    font-weight: 500;
    padding: 10px 20px;
    cursor: pointer;
`;
//
export const More = styled.div`
    display:flex;
    font-size: 15px;
    margin-top:10px;
    color: ${({theme})=> theme.textSoft};
`;

export const Links = styled.div`
    margin-left: 50px;
`;

export const Link = styled.span`
    margin-left: 25px;
`;

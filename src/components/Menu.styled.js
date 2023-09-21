import styled from "styled-components";

export const Container = styled.div`
    flex:1;
    height:100vh;
    Background-color: ${({theme})=> theme.bg };
    color: ${({theme})=> theme.text };
    position: sticky;
    top:0;
`;

export const Wrapper = styled.div`
    padding: 20px 25px;
`;
export const Logo = styled.div`
    display:flex;
    align-items:center;
    gap:5px;
    font-weight:bold;
    margin-bottom:25px;
`;

export const Img = styled.img`
    height: 25px;
`;

export const Item = styled.div`
    display:flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 10px 0px ;
    &:hover{
        background-color: ${({theme})=> theme.soft };
    }
`;

export const Hr = styled.hr`
    margin: 15px 0px;
    border:0.5 px solid ${({theme})=> theme.soft };
`;

export const Login = styled.div``;
export const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid blue;
    color: blue;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const Title = styled.h2`
  font-size: 15px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

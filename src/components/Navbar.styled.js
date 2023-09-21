import styled from "styled-components";
export const Container = styled.div`
    position: sticky; 
    top:0;
    z-index: 1;
    background-colors: ${({theme})=> theme.bgLighter };
    height: 50px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0px 30px;
    justify-content: flex-end;
    position: relative;
`;

export const Search = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    margin: auto;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid grey;
    border-radius: 3px;
    color: ${({theme})=> theme.text};
`;

export const Input = styled.input`
    border:none;
    background-color: transparent;
    outline: none;
    width: 100%;
`;

export const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid blue;
    color: blue;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color:  grey;
`;

export const LogOutButton = styled.button`
    margin-right: 20px;
`;

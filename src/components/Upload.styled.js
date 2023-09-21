import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 24px;
`;

export const Wrapper = styled.div`
    width: 700px;
    height: 700px;
    background-color: ${({theme})=> theme.bgLighter};
    color: ${({theme})=> theme.text};
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
`;
export const Close = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;
export const Title = styled.h1`
    text-align: center;
`;

export const Input = styled.input`
    border: 1px solid ${({theme})=> theme.soft};
    color: ${({theme})=> theme.text};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    z-index: 999;
`;
export const Desc = styled.textarea`
    border: 1px solid ${({theme})=> theme.soft};
    color: ${({theme})=> theme.text};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
`;
export const Button = styled.button`
    border-radius: 5px;
    border: none;
    padding: 10px 20px;
    font-weight: 400;
    cursor: pointer;
    background-color: ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.textSoft};
`;
export const Label = styled.label`
    font-size: 12px;
`;

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: relative;
`;

export const Main = styled.div`
    flex: 10;
    background-color: ${({ theme }) => theme.bg};
`;

export const Wrapper = styled.div`
    padding: 20px 100px;
`;

import styled from "styled-components";

export const Container = styled.div`
    margin-top: 42px;
    
    color: ${({ theme }) => theme.COLORS.ROSE };
    text-align: center;
    font-family: Roboto Slab;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    cursor: pointer;
`;
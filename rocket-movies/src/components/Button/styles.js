import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;

    margin-top: 24px;

    background-color: ${({ theme }) => theme.COLORS.ROSE };
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: 0;
    border-radius: 10px;
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 700;

    cursor: pointer;
`;
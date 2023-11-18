import styled from "styled-components";

export const Container = styled.div`
    min-width: 1121px;
    margin: 30px 123px;
    background-color: ${({ theme }) => theme.COLORS.ROSE_BACKGROUND};

    padding: 32px;
    border-radius: 16px;

    > h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-family: Roboto Slab;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        margin-bottom: 35px;
    }

    > p { 
        overflow: hidden;
        color: var(--Gray, #999591);
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

`;
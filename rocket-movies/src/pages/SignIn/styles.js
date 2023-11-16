import styled from "styled-components";
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    margin: 235px 134px auto;

    > h1 {
        color: ${({ theme }) => theme.COLORS.ROSE};
        font-family: Roboto Slab;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    > span{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-family: Roboto Slab;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    > h2 {
        margin-top: 48px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        font-family: Roboto Slab;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        margin-bottom: 48px;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;


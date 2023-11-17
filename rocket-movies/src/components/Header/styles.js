import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 116px;

    padding:24px 123px ;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid #3E3B47;

    > h1 {
        color: ${({ theme }) => theme.COLORS.ROSE};
        font-family: Roboto Slab;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        margin-right: 64px;
    }

    > div {
        margin-left: 64px;
        display: flex;
        flex-direction: column;

        margin-right: 9px;

        strong {
            width: max-content;
            
        }

        a {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-family: Roboto Slab;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            text-align: right;
            text-decoration: none;
        }
    }

    > img {
        width: 65px;
        height: 65px;
        border-radius: 50%;
    }
`;
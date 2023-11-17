import styled from "styled-components";

import plusButton from '../../assets/plusButton.svg'

export const Container = styled.div`
    > main {
        margin: 50px 123px;

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;

            > Button {
                width: 207px;

                display: flex;
                align-items: center;
                justify-content: center;
                justify-items: center;
                text-align: center;
                
                color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
                font-feature-settings: 'liga' off;
                font-family: Roboto Slab;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }
    }
`;
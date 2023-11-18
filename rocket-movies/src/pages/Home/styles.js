import styled from "styled-components";

import plusButton from '../../assets/plusButton.svg'

export const Container = styled.div`
    width: 100%;

    > header {
        display: flex;
        justify-content: space-between;

        margin: 50px 123px;

        button {
            width: max-content;
            padding: 32px;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;
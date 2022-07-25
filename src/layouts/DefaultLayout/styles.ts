import styled from "styled-components";

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;

    background: ${(props) => props.theme.bgThemeColor};

    font-family: "Roboto", sans-serif;

    .contentContainer {
        width: 100%;
    }
`;

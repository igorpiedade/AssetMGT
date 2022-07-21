import styled from "styled-components";

export const SidemenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 12.5rem;
    height: 100vh;
    padding-top: 1rem;
    padding-left: 1rem;

    background: ${(props) => props.theme.bgSideMenuColor};

    img {
        justify-content: center;
        margin-bottom: 2rem;
    }

    a {
        align-content: center;
        justify-content: center;
    }
`;

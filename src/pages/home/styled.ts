import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: ${(props) => props.theme.bgThemeColor};

    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
`;

export const LoginForm = styled.form`
width: 18.75rem;
height: 18rem;
background-color: ${(props) => props.theme.bgHeaderColor};
border-radius: 2rem;
padding: 3rem;

display: flex;
align-items: center;
flex-direction: column;

    input {
        width: 13rem;
        height: 2rem;
    }

    p {
        margin-top: 0.7rem;
    }

    button {
        margin-top: 0.7rem;
        width: 5rem;
        height: 2rem;
        border-radius: 8px;

    }
`;

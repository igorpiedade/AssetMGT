import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgb(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NewOperationForm = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 35%;
    height: auto;
    background-color: ${props => props.theme.bgThemeColor};
    border-radius: 8px;
    padding: 2rem;
    overflow: hidden;

    h1 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        margin-bottom: 1rem;
        height: 2rem;
        border: 1 green;
        
    }

    select {
        margin-bottom: 1rem;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    
`
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

    label {
        margin-bottom: -10px;
        font-size: 1rem;
        padding-left: 1rem;
        z-index: 1;
    }

    input {
        margin-bottom: 1rem;
        padding: 1rem;
        height: 3rem;
        border: 1px solid ${props => props.theme.formInputsBorderColor};
        border-radius: 8px;
        
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
    
            -webkit-appearance: none;
             margin: 0; 
        }
    }
    
    select {
        margin-bottom: 1rem;
        padding: 1rem;
        height: 3rem;
        border: 1px solid ${props => props.theme.formInputsBorderColor};
        border-radius: 8px;
        box-sizing: border-box;
                
        background: white;
        -webkit-appearance:none;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    mark {
        background: white;
    }
    button {
        width: 8rem;
        height: 3.5rem;
        border: 1px solid;
        border-radius: 10px;
        color: ${props => props.theme.txtButton};
        cursor: pointer;
    }
`
export const ButtonCancel = styled.button`
        background-color: ${props => props.theme.bgButtonCancel};
`
export const ButtonSubmit = styled.button`
        background-color: ${props => props.theme.bgButton};
`
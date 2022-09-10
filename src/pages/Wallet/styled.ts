import styled from "styled-components";

export const WalletsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    margin: 2rem;
    overflow-y: auto;
    
    &::-webkit-scrollbar { 
        width: 1 !important;
        }

    &::-webkit-scrollbar-track {
        background: orange !important;        /* color of the tracking area */
        }
    &::-webkit-scrollbar-thumb {
        background-color: blue;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 3px solid orange;  /* creates padding around scroll thumb */
    }
`

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
   
    h1 {
        font-size: 1.125rem;
    };
`
export const NewWalletButton = styled.button`
    width: 7.6875rem;
    height: 2.125rem;
    border-radius: 0.5rem;
    color: ${props => props.theme.txtButton};
    background-color: ${props => props.theme.bgButton};
    border: 0;
    cursor: pointer ;
`

export const WalletsTable = styled.table`
    margin-top: 1rem;
    width: 100%;
    border: 0;  
    border-collapse: collapse;
    font-size: 0.875rem;

    th {
        background-color: ${props => props.theme.bgThemeColor};
        color: ${props => props.theme.txtOperationsTitles};
        height: 1.875rem;
        border-bottom: 0;
    }

    td {
        height: 4rem;
        text-align: center;
    }
    
    tr {
        border-bottom: 1px solid #F5F5F5;
        

        &:hover {
            color: ${props => props.theme.bgButton};
        }
    }

`

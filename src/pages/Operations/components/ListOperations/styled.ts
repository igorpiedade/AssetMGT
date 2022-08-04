import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    vertical-align: middle;

    h1 {
        font-size: 1.125rem;
    };
`
export const DataFilter = styled.div`
    display: flex;
    width: 7.6875rem;
    height: 2.125rem;
    border-radius: 0.5rem;
    border: 1px solid;
    border-color: ${props => props.theme.calendarFilterColor};
    color: ${props => props.theme.calendarFilterColor};
    align-items: center;
    justify-content: space-between;
    vertical-align: middle;
    padding: 0.5rem;
`
export const OperationsTable = styled.table`
    margin-top: 1rem;
    width: 100%;
    border: 0;  
    border-collapse: collapse;
    font-size: 0.875rem;

    th {
        background-color: ${props => props.theme.bgThemeColor};
        color: ${props => props.theme.txtOperationsTitles};
        height: 1.875rem;
        border-bottom: 1px;
        border-color: gray;
    }

    td {
        height: 3rem;
        text-align: center;
        border-bottom: 1px;
        
    }

`
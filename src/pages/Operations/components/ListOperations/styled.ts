import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    h1 {
        font-size: 1.125rem;
    };
`
export const DataFilter = styled.div`
    border-radius: 0.5rem;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    padding: 0.5rem;

    select {
        border: 0;
    }
`
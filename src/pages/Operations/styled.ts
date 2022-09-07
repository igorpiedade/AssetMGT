import styled from "styled-components";

export const Grid = styled.div`
 width: 100%;
    height: calc(100% - 4.0625rem);

    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
        "BX1 BX1 BX2"
        "BX1 BX1 BX3"
        "BX1 BX1 BX3";

    grid-gap: 2rem;
    padding: 2rem;
`

export const GridItems = styled.div`
    background: white;
    border-radius: 1rem;
    padding: 2rem;
`;

export const OperationsContainer = styled(GridItems)`
    grid-area: BX1;
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
`;

export const SideBox1 = styled(GridItems)`
    grid-area: BX2;
`;

export const SideBox2 = styled(GridItems)`
    grid-area: BX3;
`;

export const SideBox3 = styled(GridItems)`
    grid-area: BX4;
`;
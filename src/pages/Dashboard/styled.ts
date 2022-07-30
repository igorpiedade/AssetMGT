import styled from "styled-components";

export const DashGrid = styled.div`
    width: 100%;
    height: calc(100% - 4.0625rem);

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
        "BX1 BX2 BX3"
        "BX4 BX4 BX5"
        "BX4 BX4 BX5";

    grid-gap: 2rem;
    padding: 2rem;
`;

export const GridItems = styled.div`
    background: white;
    border-radius: 1rem;
    padding: 2rem;
`;

export const GridArea1 = styled(GridItems)`
    grid-area: BX1;
`;

export const GridArea2 = styled(GridItems)`
    grid-area: BX2;
`;

export const GridArea3 = styled(GridItems)`
    grid-area: BX3;
`;

export const GridArea4 = styled(GridItems)`
    grid-area: BX4;
`;

export const GridArea5 = styled(GridItems)`
    grid-area: BX5;
`;

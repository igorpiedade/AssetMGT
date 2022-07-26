import styled from "styled-components";

export const DashGrid = styled.div`
    width: 100%;
    height: calc(100% - 4.0625rem);

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
        "BG PP DT"
        "GH GH LP"
        "GH GH LP";

    grid-gap: 2rem;
    padding: 2rem;
`;

export const GridItems = styled.div`
    background: white;
    border-radius: 1rem;
    padding: 2rem;
`;

export const LastOperations = styled(GridItems)`
    grid-area: LP;
`;

export const PortifolioPizzaGraph = styled(GridItems)`
    grid-area: PP;
`;

export const PortifolioDistributionGraph = styled(GridItems)`
    grid-area: DT;
`;

export const HistoryGraph = styled(GridItems)`
    grid-area: GH;
`;

export const BiggerPositions = styled(GridItems)`
    grid-area: BG;
`;

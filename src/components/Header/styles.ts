import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-grow: 1;
    height: 4.0625rem;
    justify-content: right;
    align-items: center;
    padding-right: 3rem;
    gap: 5rem;

    background: ${(props) => props.theme.bgHeaderColor};
`;

export const TotalContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.3rem;

    span {
        display: flex;
        flex-direction: column;
    }

    h5 {
        font-weight: 300;
        color: ${(props) => props.theme.txtTitleColor};
    }

    p {
        color: ${(props) => props.theme.txtTotalAssets};
    }
`;

export const ProfitLossPercent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.3rem;

    span {
        display: flex;
        flex-direction: column;
    }

    h5 {
        font-weight: 300;
        color: ${(props) => props.theme.txtTitleColor};
    }

    p {
        color: ${(props) => props.theme.txtPercentProfit};
    }
`;

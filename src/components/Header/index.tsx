import { CurrencyCircleDollar, ArrowsDownUp } from "phosphor-react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { HeaderContainer, ProfitLossPercent, TotalContainer } from "./styles";

export function Header() {
    const { user } = useContext(AuthContext);

    return (
        <HeaderContainer>
            <TotalContainer>
                <span>
                    <CurrencyCircleDollar size={24} />
                </span>
                <span>
                    <h5>Total Assets</h5>
                    <p>1,007,567.45</p>
                </span>
            </TotalContainer>
            <ProfitLossPercent>
                <span>
                    <ArrowsDownUp size={24} />
                </span>
                <span>
                    <h5>Profit</h5>
                    <p>35%</p>
                </span>
            </ProfitLossPercent>
            <p>{user?.name}</p>
        </HeaderContainer>
    );
}

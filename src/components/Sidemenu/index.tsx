import { SidemenuContainer } from "./styles";
import { Gauge, Wallet, ListDashes, Coins } from "phosphor-react";

import logoMGT from "../../assets/logo.svg";

export function Sidemenu() {
    return (
        <SidemenuContainer>
            <img src={logoMGT} alt="" />
            <nav>
                <a href="#">
                    <Gauge size={32} /> DASHBORAD
                </a>
            </nav>
        </SidemenuContainer>
    );
}

import { SidemenuContainer } from "./styles";
import { Gauge, Wallet, ListDashes, Coins } from "phosphor-react";

import logoMGT from "../../assets/logo.svg";

export function Sidemenu() {
    return (
        <SidemenuContainer>
            <span>
                <img src={logoMGT} alt="" />
            </span>
            <nav>
                <a href="#">
                    <Gauge size={32} weight="thin" /> DASHBORAD
                </a>
                <a href="#">
                    <Wallet size={32} weight="thin" /> WALLET
                </a>
                <a href="#">
                    <Coins size={32} weight="thin" /> ASSETS
                </a>
                <a href="#">
                    <ListDashes size={32} weight="thin" /> OPERATIONS
                </a>
            </nav>
        </SidemenuContainer>
    );
}

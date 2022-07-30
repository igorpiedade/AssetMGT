import { SidemenuContainer } from "./styles";
import { Gauge, Wallet, ListDashes, Coins } from "phosphor-react";

import logoMGT from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export function Sidemenu() {
    return (
        <SidemenuContainer>
            <span>
                <img src={logoMGT} alt="" />
            </span>
            <nav>
                <NavLink to="/app" title="dashboard">
                    <Gauge size={32} weight="thin" /> DASHBORAD
                </NavLink>
                <NavLink to="/app/wallet" title="wallet">
                    <Wallet size={32} weight="thin" /> WALLET
                </NavLink>
                <NavLink to="/app/assets" title="assets">
                    <Coins size={32} weight="thin" /> ASSETS
                </NavLink>
                <NavLink to="/app/operations" title="operations">
                    <ListDashes size={32} weight="thin" /> OPERATIONS
                </NavLink>
            </nav>
        </SidemenuContainer>
    );
}

import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidemenu } from "../../components/Sidemenu";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <div>
                <Sidemenu />
            </div>
            <div className="contentContainer">
                <Header />
                <Outlet />
            </div>
        </LayoutContainer>
    );
}

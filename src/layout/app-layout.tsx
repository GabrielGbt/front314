import { Outlet } from "react-router-dom";
import { HeaderApp } from "./header/header-index";
import { Footer } from "./footer/footer-index";
import { AppLayoutContainer } from "./app-layout-styles";

export function AppLayout()  {
    return (
        <AppLayoutContainer>
            <HeaderApp />
            <Outlet />
            <Footer />
        </AppLayoutContainer>
    )
}
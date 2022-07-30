/* eslint-disable prettier/prettier */
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/";
import { AssetsPage } from "./pages/AssetsPage";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/home";
import { Wallet } from "./pages/Wallet"
import { Operations } from "./pages/Operations"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<DefaultLayout />} >
        <Route path="/app" element={<Dashboard />} />
        <Route path="/app/wallet" element={<Wallet />} />
        <Route path="/app/assets" element={<AssetsPage />} />
        <Route path="/app/operations" element={<Operations />} />
      </Route>
    </Routes>
  );
}


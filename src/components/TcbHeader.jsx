import { Routes, Route } from "react-router-dom";
import { SHeader, SLink } from "../styles/styles.js";
import { IoWallet } from "react-icons/io5";
import Home from "./pages/Home";

export default function TcbHeader() {
    return (
        <>
            <SHeader>
                <SLink to="/"><IoWallet /><br/>My Wallet Health App</SLink>
                <SLink to="/">Home</SLink>
            </SHeader>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </>
    );
}
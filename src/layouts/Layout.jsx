import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar/Sidebar";
// import Footer from "../components/Footer/Footer";

export default function Layout() {
  return <>
    {/* <Sidebar /> */}
    <main><Outlet /></main>
    {/* <Footer /> */}
  </>;
}
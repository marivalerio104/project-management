import "./Layout.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

export default function Layout() {
  return <>
    <div id="content">
      <Sidebar />
      <main><Outlet className="main-content" /></main>
    </div>
    <Footer />
  </>;
}
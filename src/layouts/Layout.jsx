import "./Layout.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

export default function Layout( { projects }) {
  return <>
    <div id="content">
      <Sidebar projects={projects} />
      <main><Outlet /></main>
    </div>
    <Footer />
  </>;
}
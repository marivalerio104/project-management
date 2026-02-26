import "./Home.css"
import logo from "../../assets/logo.png";
import Button from "../../components/Button/Button";

export default function Home() {
  return <div id="home">
    <img src={logo} alt="Project Management Logo" />
    <h2>No Project Selected</h2>
    <p>Select a project or get started with a new one.</p>
    <Button>Create Project</Button>
  </div>
}
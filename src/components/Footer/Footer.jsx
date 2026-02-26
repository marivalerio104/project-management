import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return <footer>
    <p>© {year} Project Management</p>
    <p>Made in Costa Rica</p>
  </footer>
}
import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ children, to, onClick, type = "button", variant = "primary"}) {
  const className = `btn btn-${variant}`;

  // If "to" exists, render Link
  if (to) {
    return <Link to={to} className={className}>
      {children}
    </Link>;
  }

  // Otherwise render normal button
  return <button type={type} onClick={onClick} className={className}>
    {children}
  </button>;
}
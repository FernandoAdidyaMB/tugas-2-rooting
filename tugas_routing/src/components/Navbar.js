import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/team" style={{ marginRight: "10px" }}>Team</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}


import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="brand" href="/">
        Next<span>Bites</span>
      </Link>
      <div className="nav-links">
        <Link className="nav-link" href="/">Recipes</Link>
        <Link className="nav-link nav-link--github" href="https://github.com/biswajiths/nextbites.git" target="_blank" rel="noreferrer">
          GitHub
        </Link>
      </div>
    </nav>
  );
}
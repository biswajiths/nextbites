
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="brand" href="/">NextBites</Link>
      <div>
        <Link href="/">Recipes</Link>
        <Link href="/" target="_blank" rel="noreferrer">Github</Link>
      </div>
    </nav>
  );
}
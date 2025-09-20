import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header>
      <Link to="/" className="site-name">
        HELEN CHEN
      </Link>
    </header>
  );
}

// src/components/PageNav.jsx
import { Link } from "react-router-dom";
import ArrowRight from "./ArrowRight.jsx"; // you already have this

export default function PageNav({ prev, next }) {
  return (
    <nav className="bottom-nav" aria-label="Section navigation">
      <Link className="nav-arrow prev" to={prev.to}>
        <span aria-hidden>
          {/* rotate handled by CSS on .prev */}
          <ArrowRight width={80} height={30} />
        </span>
        <span className="nav-label">{prev.label}</span>
      </Link>

      <Link className="nav-arrow next" to={next.to}>
        <span className="nav-label">{next.label}</span>
        <span aria-hidden>
          <ArrowRight width={80} height={30} />
        </span>
      </Link>
    </nav>
  );
}

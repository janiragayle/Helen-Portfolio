import { Link } from "react-router-dom";

export default function BigTile({ to, title, subtitle }) {
  return (
    <Link to={to} className="big-tile">
      <div className="big-tile-inner">
        <h2 className="big-tile-title">{title}</h2>
        {subtitle && <p className="big-tile-sub">{subtitle}</p>}
      </div>
    </Link>
  );
}

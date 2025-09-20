import SiteHeader from "../components/SiteHeader.jsx";
import { designs } from "../data/designs.js";
import { useParams, useNavigate, Link } from "react-router-dom";

function Page({ children }) {
  return (
    <div className="page">
      <div className="page-inner">{children}</div>
    </div>
  );
}

export default function DesignDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const d = designs.find((x) => x.id === id);

  if (!d) {
    return (
      <Page>
        <SiteHeader />
        <p>Design not found.</p>
        <Link className="underline" to="/designs">
          Back to gallery
        </Link>
      </Page>
    );
  }

  return (
    <Page>
      <SiteHeader />
      <button onClick={() => nav(-1)} className="backlink">
        ← Back
      </button>
      <div className="detail-grid">
        <img src={d.image} alt={d.name} className="rounded-xl shadow" />
        <div>
          <h1 className="detail-title">{d.name}</h1>
          <p className="detail-text">{d.description}</p>
        </div>
      </div>
    </Page>
  );
}

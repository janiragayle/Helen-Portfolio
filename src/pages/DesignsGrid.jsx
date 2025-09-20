import SiteHeader from "../components/SiteHeader.jsx";
import { Link } from "react-router-dom";
import { designs } from "../data/designs.js";

function Page({ children }) {
  return (
    <div className="page">
      <div className="page-inner">{children}</div>
    </div>
  );
}

export default function DesignsGrid() {
  return (
    <Page>
      <SiteHeader />
      <h1 className="page-heading mb-6">Graphic Designs</h1>
      <p className="intro">
        A selection of visual pieces. Click any thumbnail to view the project
        details.
      </p>

      <div className="grid-gallery">
        {designs.map((d) => (
          <Link key={d.id} to={`/designs/${d.id}`} className="card">
            <img src={d.image} alt={d.name} className="thumb" />
            <div className="card-row">
              <h3 className="card-title">{d.name}</h3>
              <span className="card-view">View</span>
            </div>
          </Link>
        ))}
      </div>
    </Page>
  );
}

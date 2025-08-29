import SiteHeader from "../components/SiteHeader.jsx";
import { designs } from "../data/designs.js";
import { useParams, useNavigate, Link } from "react-router-dom";

function Page({ children }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#feb6e2" }}>
      <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
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
      <button onClick={() => nav(-1)} className="mb-6 underline">
        ← Back
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <img src={d.image} alt={d.name} className="w-full rounded-2xl shadow" />
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">{d.name}</h1>
          <p className="mt-4 leading-7">{d.description}</p>
        </div>
      </div>
    </Page>
  );
}

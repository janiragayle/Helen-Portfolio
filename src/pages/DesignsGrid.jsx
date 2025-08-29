import SiteHeader from "../components/SiteHeader.jsx";
import { Link } from "react-router-dom";
import { designs } from "../data/designs.js";

function Page({ children }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#feb6e2" }}>
      <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
    </div>
  );
}

export default function DesignsGrid() {
  return (
    <Page>
      <SiteHeader />
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">
        Graphic Designs
      </h1>
      <p className="mb-8 max-w-prose">
        A selection of visual pieces. Click any thumbnail to view the project
        details.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {designs.map((d) => (
          <Link
            key={d.id}
            to={`/designs/${d.id}`}
            className="group rounded-2xl overflow-hidden bg-white/20 shadow hover:shadow-lg transition"
          >
            <img
              src={d.image}
              alt={d.name}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-4 flex items-center justify-between">
              <h3 className="font-medium">{d.name}</h3>
              <span className="text-xs opacity-70 group-hover:underline">
                View
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Page>
  );
}

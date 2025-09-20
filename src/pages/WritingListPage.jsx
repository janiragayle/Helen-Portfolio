import SiteHeader from "../components/SiteHeader.jsx";
import { writings } from "../data/writings.js";
import PageNav from "../components/PageNav.jsx";

function Page({ children }) {
  return (
    <div className="page">
      <div className="page-inner">{children}</div>
    </div>
  );
}

// Route order (use the SAME keys you pass from <App />)
const ORDER = [
  { kind: "prose", label: "Prose", to: "/prose" },
  { kind: "poems", label: "Poems", to: "/poems" },
  { kind: "Articles_Essays", label: "Articles/Essays", to: "/Articles_Essays" },
  { kind: "designs", label: "Graphic Designs", to: "/designs" },
];

// Map route key -> data key in `writings`
const KIND_TO_DATA = {
  prose: "prose",
  poems: "poems",
  Articles_Essays: "Articles_Essays", // <-- adjust if you actually renamed the data key
};

export default function WritingListPage({ kind }) {
  const dataKey = KIND_TO_DATA[kind] || "prose";
  const items = writings[dataKey] || [];

  // Title by route kind
  const title =
    kind === "prose" ? "Prose" :
    kind === "poems" ? "Poems" :
    "Articles/Essays";

  // Prev/next based on the current route kind
  const idx = Math.max(0, ORDER.findIndex(x => x.kind === kind));
  const prev = ORDER[(idx - 1 + ORDER.length) % ORDER.length];
  const next = ORDER[(idx + 1) % ORDER.length];

  return (
    <Page>
      <SiteHeader />
      <section className="section-narrow">
        <h1 className="page-title">{title}</h1>

        {items.length === 0 ? (
          <p className="muted">Coming soon.</p>
        ) : (
          <ul className="writing-list">
  {items.map((it, i) => (
    <li key={i}>
      <a
        className="writing-row"
        href={it.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open "${it.title}"`}
      >
        <span className="writing-link">{it.title}</span>
        <span className="read-tag">Read</span>
      </a>
    </li>
  ))}
</ul>
        )}
        <PageNav prev={prev} next={next} />
      </section>
    </Page>
  );
}

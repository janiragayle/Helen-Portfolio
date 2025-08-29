import SiteHeader from "../components/SiteHeader.jsx";
import { writings } from "../data/writings.js";

function Page({ children }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#feb6e2" }}>
      <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
    </div>
  );
}

export default function WritingListPage({ kind }) {
  const items = writings[kind] || [];
  const title =
    kind === "prose" ? "Prose" : kind === "poems" ? "Poems" : "Journalism";
  return (
    <Page>
      <SiteHeader />
      <section className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">{title}</h1>
        {items.length === 0 ? (
          <p className="opacity-80">Coming soon.</p>
        ) : (
          <ul className="space-y-4">
            {items.map((it, i) => (
              <li
                key={i}
                className="flex items-baseline justify-between gap-6 border-b border-black/10 pb-3"
              >
                <a
                  className="underline"
                  href={it.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {it.title}
                </a>
                <span className="text-xs uppercase tracking-wide opacity-60">
                  Read
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </Page>
  );
}

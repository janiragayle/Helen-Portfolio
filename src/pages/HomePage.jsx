import { Link } from "react-router-dom";
import ArrowRight from "../components/ArrowRight.jsx";

export default function Home() {
  return (
    <div className="container">
      {/* Left column with tiles */}
      <section className="tiles">
        <Link to="/prose" className="tile">Prose</Link>
        <Link to="/poems" className="tile">Poems</Link>
        <Link to="/journalism" className="tile">Journalism pieces</Link>
      </section>

      {/* Right column with bio + email + CTA */}
      <aside className="bio">
        <div>
          <h1>HELEN CHEN</h1>
          <p>
            Helen is a writer and artist born in Arkansas and raised in Brooklyn, where she is currently based.
            She recently received her BA in English and creative writing from Columbia, where she was the
            recipient of the Williams Fellowship and the Arthur Ford Poetry Prize. Her published poems, prose,
            and journalism can be found here. She is a lover of water bodies and loves being related to everything.
          </p>

          <p className="email">She can be reached at <a href="mailto:helencwrites@gmail.com">helencwrites@gmail.com</a></p>
        </div>

        <div className="cta">
          <ArrowRight />
          <Link to="/designs">Graphic Designs</Link>
          
        </div>
      </aside>
    </div>
  );
}

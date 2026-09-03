import { Outlet, Link } from "react-router-dom";

import logo from "../logo-rb.svg";
import Footer from "../components/Footer.jsx";
import Typewriter from "../components/Typewriter.jsx";

const HEADLINE_WORDS = [
  "férias",
  "mini-férias",
  "folga",
  "bate e volta",
  "dar um tempo",
  "relaxar",
  "trabalho",
  "home office",
  "reenergizar",
  "descansar",
];

export default function Layout() {
  return (
    <div className="general-container">
      <header>
        <Link to="/">
          <img src={logo} className="logo-rb" alt="logo villa rosa butiá" />
        </Link>
        <p className="subheadline">
          <span>Villa Rosa Butiá</span>
          <span className="spacer"> • </span>
          <span>Praia do Rosa</span>
          <span className="spacer"> • </span>
          <span>Santa Catarina</span>
          <span className="spacer"> • </span>
          <span>Brasil</span>
        </p>
      </header>

      <div className="cover">
        <div className="cover-background" />
        <h1 className="headline">
          <span>pode ser </span>
          <Typewriter words={HEADLINE_WORDS} />
        </h1>
        <h2 className="subheadline">
          chame como quiser, mas o lugar você já encontrou.
        </h2>
        <a
          className="main-cta"
          href="https://www.airbnb.com.br/p/rosabutia"
          target="_blank"
          rel="noreferrer"
        >
          Faça sua reserva pelo Airbnb
        </a>
      </div>

      <nav className="navegation">
        <ul>
          <li><Link to="/local">Localização</Link></li>
          <li><Link to="/photoschale1">Chalé 1</Link></li>
          <li><Link to="/photoschale2">Chalé 2</Link></li>
          <li><Link to="/photoschale3">Chalé 3</Link></li>
          <li><Link to="/infra">Infraestrutura</Link></li>
        </ul>
      </nav>

      <section className="content">
        <Outlet />
      </section>

      <Footer />
    </div>
  );
}

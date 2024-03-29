import { Outlet, Link } from "react-router-dom";
import logo from '../logo-rb.svg';
import Footer from '../components/Footer.js';
import '../App.css';
import Typist from 'react-typist';


const Layout = () => {
  return (
    <div className="general-container">
      <header>
        <Link to="/"><img src={logo} className="logo-rb" alt="logo villa rosa butiá" /></Link>
        <p className="subheadline">
          <span>Villa Rosa Butiá</span><span className="spacer"> • </span><span>Praia do Rosa</span><span className="spacer"> • </span><span>Santa Catarina</span><span className="spacer"> • </span><span>Brasil</span>
        </p>
      </header>
      <cover>
        <div className="cover-background"></div>
        <h1 className="headline">
        <Typist
          cursor={{ element: "." }}
        >
          <span>pode ser </span>
          <span>férias</span>
          <Typist.Backspace count={6} delay={1000} CursorElement={"."} />
          <span>mini-férias</span>
          <Typist.Backspace count={11} delay={1000} />
          <span>folga</span>
          <Typist.Backspace count={5} delay={1000} />
          <span>bate e volta</span>
          <Typist.Backspace count={12} delay={1000} />
          <span>dar um tempo</span>
          <Typist.Backspace count={12} delay={1000} />
          <span>relaxar</span>
          <Typist.Backspace count={7} delay={1000} />
          <span>trabalho</span>
          <Typist.Backspace count={8} delay={1000} />
          <span>home office</span>
          <Typist.Backspace count={11} delay={1000} />
          <span>reenergizar</span>
          <Typist.Backspace count={11} delay={1000} />
          <span>descançar</span>
        </Typist>
        </h1>
        <h2 className="subheadline">chame como quiser, mas o lugar você já encontrou.</h2>
        <a className="main-cta" href="https://www.airbnb.com.br/p/rosabutia" target="_blank" >Faça sua reserva pelo Airbnb</a>
      </cover>

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
  )
};

export default Layout;

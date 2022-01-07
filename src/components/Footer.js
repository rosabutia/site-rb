import logo from '../logo-rb.svg';

const rodape = () => {
  return (
    <section className="footer">

      <article>
        <p>
          <img src={logo} className="logo-rb" alt="logo villa rosa butiá" />
        </p>
        <p className="social-links">
          <a href="https://www.instagram.com/rosabutia/" taget="_blank"><i class="fab fa-instagram-square"></i></a>
          <a href="https://twitter.com/rosabutia" taget="_blank"><i class="fab fa-twitter-square"></i></a>
          <a href="https://www.facebook.com/rosabutia" taget="_blank"><i class="fab fa-facebook-square"></i></a>
          <a href="https://www.linkedin.com/company/rosabuti%C3%A1" taget="_blank"><i class="fab fa-linkedin"></i></a>
        </p>
        <p>
          © 2021 Villa Rosa Butiá.
        </p>
      </article>

      <article className="phone">
        <h5>telefone</h5>
        <p class="number">+55 48 99126-9809</p>
      </article>

      <address>
        <h5>endereço</h5>
        <p>R. Quarenta e Um Mil e Trezentos e Trinta e Dois<br />Praia do Rosa - Ibiraquera<br />Imbituba - SC, 88780-000 - Brasil</p>
      </address>


    </section>
  );
};

export default rodape;

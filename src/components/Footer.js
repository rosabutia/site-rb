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
        <h5>Airbnb</h5>
        <p class="number">
          <a href="https://www.airbnb.com.br/p/rosabutia" target="_blank" >http://www.airbnb.com.br/p/rosabutia</a>
        </p>
      </article>

      <article className="phone">
        <h5>Telefone (WhatsApp)</h5>
        <p class="number">
        <a href="https://api.whatsapp.com/send?phone=5548991269809&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20chal%C3%A9s%20da%20Villa%20Rosa%20Buti%C3%A1." target="_blank" >
        +55 48 99126-9809
        </a>
        </p>
      </article>

      <address>
        <h5>endereço</h5>
        <p>R. Quarenta e Um Mil e Trezentos e Trinta e Dois<br />Praia do Rosa - Ibiraquera<br />Imbituba - SC, 88780-000 - Brasil</p>
      </address>

    </section>
  );
};

export default rodape;

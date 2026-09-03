import logo from "../logo-rb.svg";

const SOCIAL = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/rosabutia/",
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1 0-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1.1-.2-1.7-.4-2.1a3.5 3.5 0 0 0-.8-1.3 3.5 3.5 0 0 0-1.3-.8c-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5-3.4a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/rosabutia",
    path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.6v8h3.6Z",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/rosabutia",
    path: "M18.9 7.3c.01.17.01.34.01.5 0 5.16-3.93 11.11-11.11 11.11-2.2 0-4.26-.65-5.99-1.76.31.04.61.05.93.05 1.83 0 3.51-.62 4.85-1.67a3.91 3.91 0 0 1-3.65-2.71c.24.04.48.07.74.07.36 0 .7-.05 1.03-.14A3.9 3.9 0 0 1 2.55 8.7v-.05c.53.29 1.13.47 1.77.49A3.9 3.9 0 0 1 3.1 5.83c0-.72.19-1.38.53-1.96a11.1 11.1 0 0 0 8.05 4.08 3.9 3.9 0 0 1 6.65-3.56 7.72 7.72 0 0 0 2.48-.94 3.92 3.92 0 0 1-1.72 2.16c.79-.09 1.54-.3 2.24-.61-.52.78-1.18 1.46-1.94 2Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/rosabuti%C3%A1",
    path: "M6.94 5A1.94 1.94 0 1 1 3.06 5a1.94 1.94 0 0 1 3.88 0ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.9V8.48Z",
  },
];

export default function Footer() {
  return (
    <section className="footer">
      <article>
        <p>
          <img src={logo} className="logo-rb" alt="logo villa rosa butiá" />
        </p>
        <p className="social-links">
          {SOCIAL.map(({ label, href, path }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={path} />
              </svg>
            </a>
          ))}
        </p>
        <p>© {new Date().getFullYear()} Villa Rosa Butiá.</p>
      </article>

      <article className="phone">
        <h5>Airbnb</h5>
        <p className="number">
          <a href="https://www.airbnb.com.br/p/rosabutia" target="_blank" rel="noreferrer">
            airbnb.com.br/p/rosabutia
          </a>
        </p>
      </article>

      <article className="phone">
        <h5>Telefone (WhatsApp)</h5>
        <p className="number">
          <a
            href="https://api.whatsapp.com/send?phone=5548991269809&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20chal%C3%A9s%20da%20Villa%20Rosa%20Buti%C3%A1."
            target="_blank"
            rel="noreferrer"
          >
            +55 48 99126-9809
          </a>
        </p>
      </article>

      <address>
        <h5>endereço</h5>
        <p>
          R. Quarenta e Um Mil e Trezentos e Trinta e Dois
          <br />
          Praia do Rosa - Ibiraquera
          <br />
          Imbituba - SC, 88780-000 - Brasil
        </p>
      </address>
    </section>
  );
}

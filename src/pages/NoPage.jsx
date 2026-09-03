import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <div>
      <h2>Página não encontrada</h2>
      <p>
        O endereço que você tentou acessar não existe. <Link to="/">Voltar ao início</Link>.
      </p>
    </div>
  );
}

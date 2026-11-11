import { Link } from "react-router-dom";

function NaoEncontrada() {
  return (
    <main className="container not-found-page">
      <span className="eyebrow">Erro 404</span>
      <h1>Esta página não foi encontrada.</h1>
      <p>O endereço pode ter sido alterado ou não existe neste projeto.</p>
      <Link to="/" className="button button-primary">Voltar ao início</Link>
    </main>
  );
}

export default NaoEncontrada;

import { Link, useParams } from "react-router-dom";
import { arvores } from "../data/arvores.js";

function DetalhesArvore() {
  const { id } = useParams();
  const arvore = arvores.find((item) => item.id === id);

  if (!arvore) {
    return (
      <main className="container empty-detail">
        <span className="eyebrow">Espécie não encontrada</span>
        <h1>Não encontramos essa árvore.</h1>
        <p>Volte ao catálogo para escolher uma das espécies disponíveis.</p>
        <Link to="/catalogo" className="button button-primary">Voltar ao catálogo</Link>
      </main>
    );
  }

  return (
    <main className="page-main">
      <section className="container detail-section">
        <Link to="/catalogo" className="back-link">← Voltar ao catálogo</Link>

        <div className="detail-layout">
          <div className="detail-image image-frame">
            <img
              src={arvore.imagem}
              alt={arvore.altImagem}
              onError={(event) => { event.currentTarget.style.display = "none"; }}
            />
          </div>

          <div className="detail-copy">
            <span className="eyebrow">Ficha da espécie</span>
            <h1>{arvore.nome}</h1>
            <p className="scientific-name">{arvore.nomeCientifico}</p>
            <p className="detail-description">{arvore.caracteristicas}</p>
            <div className="detail-tags">
              <span className="tag">{arvore.porte} porte</span>
              {arvore.ambientes.map((ambiente) => <span className="tag" key={ambiente}>{ambiente}</span>)}
            </div>
          </div>
        </div>

        <div className="detail-information-grid">
          <section className="detail-information-card">
            <h2>Porte e altura</h2>
            <p>{arvore.altura}.</p>
          </section>
          <section className="detail-information-card">
            <h2>Ambiente recomendado</h2>
            <p>{arvore.ambienteRecomendado}</p>
          </section>
          <section className="detail-information-card">
            <h2>Flores e frutos</h2>
            <p>{arvore.frutos}</p>
          </section>
          <section className="detail-information-card">
            <h2>Cuidados básicos</h2>
            <p>{arvore.cuidados}</p>
          </section>
        </div>

      </section>
    </main>
  );
}

export default DetalhesArvore;

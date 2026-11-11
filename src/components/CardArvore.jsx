import { Link } from "react-router-dom";

function CardArvore({ arvore }) {
  return (
    <article className="tree-card">
      <Link to={`/catalogo/${arvore.id}`} className="tree-card-link" aria-label={`Ver detalhes de ${arvore.nome}`}>
        <div className="tree-card-image-wrap">
          <img
            src={arvore.imagem}
            alt={arvore.altImagem}
            className="tree-card-image"
            loading="lazy"
            onError={(event) => { event.currentTarget.style.display = "none"; }}
          />
          <span className="tree-card-badge">{arvore.porte} porte</span>
        </div>
        <div className="tree-card-body">
          <p className="tree-card-kicker">{arvore.nomeCientifico}</p>
          <h2>{arvore.nome}</h2>
          <p className="tree-card-description">{arvore.resumo}</p>
          <div className="tag-list">
            {arvore.ambientes.map((ambiente) => (
              <span className="tag" key={ambiente}>{ambiente}</span>
            ))}
          </div>
          <span className="tree-card-action">Ver características <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </article>
  );
}

export default CardArvore;

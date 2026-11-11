import { useMemo, useState } from "react";
import CardArvore from "../components/CardArvore.jsx";
import { arvores } from "../data/arvores.js";

function CatalogoArvores() {
  const [busca, setBusca] = useState("");
  const [porteSelecionado, setPorteSelecionado] = useState("Todos");
  const [ambienteSelecionado, setAmbienteSelecionado] = useState("Todos");

  const arvoresFiltradas = useMemo(() => {
    const termo = busca.trim().toLocaleLowerCase("pt-BR");

    return arvores.filter((arvore) => {
      const correspondeBusca =
        arvore.nome.toLocaleLowerCase("pt-BR").includes(termo) ||
        arvore.nomeCientifico.toLocaleLowerCase("pt-BR").includes(termo);

      const correspondePorte =
        porteSelecionado === "Todos" || arvore.porte === porteSelecionado;

      const correspondeAmbiente =
        ambienteSelecionado === "Todos" || arvore.ambientes.includes(ambienteSelecionado);

      return correspondeBusca && correspondePorte && correspondeAmbiente;
    });
  }, [busca, porteSelecionado, ambienteSelecionado]);

  function limparFiltros() {
    setBusca("");
    setPorteSelecionado("Todos");
    setAmbienteSelecionado("Todos");
  }

  return (
    <main className="page-main">
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">Conheça as espécies</span>
          <h1>Catálogo de árvores</h1>
          <p>
            Compare espécies nativas e características importantes para encontrar
            opções que façam sentido para o espaço disponível.
          </p>
        </div>
      </section>

      <section className="container catalog-section">
        <div className="catalog-intro">
          <div>
            <h2>Encontre uma árvore para cada espaço</h2>
            <p>
              Use os filtros por porte e ambiente. As classificações são orientativas:
              a escolha final depende das condições do local e das regras municipais.
            </p>
          </div>
          <span className="result-count">{arvoresFiltradas.length} de {arvores.length} espécies</span>
        </div>

        <div className="catalog-filters">
          <label className="filter-field filter-search">
            <span>Pesquisar espécie</span>
            <input
              type="search"
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
              placeholder="Nome popular ou científico"
            />
          </label>

          <label className="filter-field">
            <span>Filtrar por porte</span>
            <select value={porteSelecionado} onChange={(event) => setPorteSelecionado(event.target.value)}>
              <option>Todos</option>
              <option>Pequeno</option>
              <option>Médio</option>
              <option>Grande</option>
            </select>
          </label>

          <label className="filter-field">
            <span>Filtrar por ambiente</span>
            <select value={ambienteSelecionado} onChange={(event) => setAmbienteSelecionado(event.target.value)}>
              <option>Todos</option>
              <option>Urbano</option>
              <option>Rural</option>
            </select>
          </label>

          <button className="button button-filter-reset" type="button" onClick={limparFiltros}>
            Limpar filtros
          </button>
        </div>

        {arvoresFiltradas.length > 0 ? (
          <div className="tree-grid">
            {arvoresFiltradas.map((arvore) => (
              <CardArvore key={arvore.id} arvore={arvore} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span aria-hidden="true">⌕</span>
            <h2>Nenhuma espécie encontrada</h2>
            <p>Tente outro nome ou remova algum filtro.</p>
            <button className="button button-primary" type="button" onClick={limparFiltros}>Limpar busca</button>
          </div>
        )}

        <div className="notice-box">
          <strong>Importante:</strong> este catálogo é educativo e não substitui a avaliação
          de um profissional ou a lista oficial de espécies recomendadas pelo município.
          Para calçadas e espaços públicos, verifique largura do passeio, fiação, tubulações,
          raízes e legislação local antes do plantio.
        </div>
      </section>
    </main>
  );
}

export default CatalogoArvores;

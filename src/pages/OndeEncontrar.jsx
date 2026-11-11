import { useMemo, useState } from "react";
import { estabelecimentos } from "../data/estabelecimentos.js";

function OndeEncontrar() {
  const [cidadeSelecionada, setCidadeSelecionada] = useState("Todas");
  const [busca, setBusca] = useState("");

  const cidades = useMemo(
    () => [...new Set(estabelecimentos.map((item) => item.cidade))].sort((a, b) => a.localeCompare(b, "pt-BR")),
    []
  );

  const resultados = useMemo(() => {
    const termo = busca.trim().toLocaleLowerCase("pt-BR");

    return estabelecimentos.filter((item) => {
      const correspondeCidade = cidadeSelecionada === "Todas" || item.cidade === cidadeSelecionada;
      const texto = `${item.nome} ${item.tipo} ${item.endereco} ${item.cidade}`.toLocaleLowerCase("pt-BR");
      return correspondeCidade && texto.includes(termo);
    });
  }, [cidadeSelecionada, busca]);

  return (
    <main className="page-main">
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">Rio Grande do Sul</span>
          <h1>Onde encontrar mudas</h1>
          <p>
            Consulte indicações iniciais de viveiros, floriculturas e garden centers.
            Antes de sair, confirme o atendimento e a disponibilidade da espécie desejada.
          </p>
        </div>
      </section>

      <section className="container locations-section">
        <div className="location-search-panel">
          <div>
            <span className="eyebrow">Pesquisa por município</span>
            <h2>Encontre estabelecimentos na sua região</h2>
            <p>Selecione uma cidade do Rio Grande do Sul ou pesquise pelo nome de um local.</p>
          </div>

          <div className="location-filters">
            <label className="filter-field">
              <span>Município</span>
              <select value={cidadeSelecionada} onChange={(event) => setCidadeSelecionada(event.target.value)}>
                <option value="Todas">Todos os municípios cadastrados</option>
                {cidades.map((cidade) => <option value={cidade} key={cidade}>{cidade}</option>)}
              </select>
            </label>
            <label className="filter-field">
              <span>Pesquisar estabelecimento</span>
              <input
                type="search"
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
                placeholder="Ex.: viveiro, jardim, floricultura"
              />
            </label>
          </div>
        </div>

        <div className="locations-results-heading">
          <h2>Estabelecimentos cadastrados</h2>
          <span className="result-count">{resultados.length} resultado(s)</span>
        </div>

        {resultados.length > 0 ? (
          <div className="locations-grid">
            {resultados.map((local) => {
              const enderecoBusca = encodeURIComponent(`${local.nome}, ${local.endereco}`);
              const linkMapa = `https://www.google.com/maps/search/?api=1&query=${enderecoBusca}`;

              return (
                <article className="location-card" key={local.id}>
                  <div className="location-card-top">
                    <span className="location-type">{local.tipo}</span>
                    <span className="location-city">{local.cidade} – RS</span>
                  </div>
                  <h3>{local.nome}</h3>
                  <p className="location-address">{local.endereco}</p>
                  <p className="location-description">{local.descricao}</p>
                  <div className="location-actions">
                    {local.telefone && (
                      <a href={`tel:${local.telefone.replace(/[^0-9+]/g, "")}`} className="text-link">
                        Ligar: {local.telefone}
                      </a>
                    )}
                    {local.email && (
                      <a href={`mailto:${local.email}`} className="text-link">Enviar e-mail</a>
                    )}
                    <a href={linkMapa} target="_blank" rel="noreferrer" className="button button-small button-secondary">
                      Ver localização ↗
                    </a>
                    {local.site && (
                      <a href={local.site} target="_blank" rel="noreferrer" className="text-link">
                        Site / informações oficiais ↗
                      </a>
                    )}
                  </div>

                </article>
              );
            })}
          </div>
        ) : (
          <div className="empty-state">
            <span aria-hidden="true">⌕</span>
            <h2>Nenhum estabelecimento encontrado</h2>
            <p>Não há indicações cadastradas para essa pesquisa. Tente outro município ou termo.</p>
            <button
              className="button button-primary"
              type="button"
              onClick={() => { setCidadeSelecionada("Todas"); setBusca(""); }}
            >
              Limpar pesquisa
            </button>
          </div>
        )}

        <div className="notice-box">
          <strong>Sobre esta lista:</strong> o cadastro inicial reúne locais de alguns municípios
          do RS, não representa todos os estabelecimentos do estado e pode precisar de atualização.
          Floriculturas e garden centers podem não trabalhar com mudas de árvores nativas.
          Confirme estoque, preços, horários e condições de atendimento diretamente com cada local.
        </div>
      </section>
    </main>
  );
}

export default OndeEncontrar;

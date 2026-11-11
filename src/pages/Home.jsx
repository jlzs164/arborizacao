import { Link } from "react-router-dom";
import InfoCard from "../components/InfoCard.jsx";

const imagemDestaque = "/images/pginicial1.jpg";

function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="container hero-layout">
          <div className="hero-copy">
            <span className="eyebrow">Arborização urbana e qualidade de vida</span>
            <h1>
              Mais árvores, cidades melhores:
              <span> o futuro começa pelo verde.</span>
            </h1>
            <p className="hero-description">
              Árvores transformam ruas, praças e bairros. Conheça seus benefícios,
              descubra espécies adequadas a diferentes espaços e aprenda a cuidar
              de uma muda desde o plantio.
            </p>
            <div className="hero-actions">
              <Link to="/catalogo" className="button button-primary">Conhecer as árvores</Link>
              <Link to="/orientacoes" className="button button-secondary">Como plantar</Link>
            </div>
          </div>

          <div className="hero-visual image-frame">
            <img
              src={imagemDestaque}
              alt="Paisagem verde com árvores, representando uma cidade mais arborizada"
              className="hero-image"
              onError={(event) => { event.currentTarget.style.display = "none"; }}
            />
          </div>
        </div>
      </section>

      <section className="information-section" id="informacoes">
        <div className="container">
          <div className="section-heading section-heading-centered">
            <span className="eyebrow">Por que isso importa?</span>
            <h2>Árvores fazem diferença no dia a dia</h2>
            <p>Os benefícios vão muito além da aparência das ruas.</p>
          </div>

          <div className="information-grid">
            <InfoCard title="Redução da temperatura">
              <p>
                A sombra e a evapotranspiração ajudam a amenizar o calor,
                tornando calçadas, praças e áreas externas mais confortáveis.
              </p>
            </InfoCard>

            <InfoCard title="Melhoria do ar">
              <p>
                As árvores capturam parte das partículas presentes no ar e
                contribuem para ambientes urbanos mais saudáveis.
              </p>
            </InfoCard>

            <InfoCard title="Biodiversidade">
              <p>
                Flores, frutos e copas oferecem alimento e abrigo para aves,
                insetos polinizadores e outros animais.
              </p>
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="container editorial-layout">
          <div className="editorial-copy">
            <span className="eyebrow">O desafio nas cidades</span>
            <h2>Quando falta verde, a cidade sente.</h2>
            <p>
              A expansão urbana sem planejamento pode reduzir áreas permeáveis
              e espaços vegetados. Com menos árvores, muitos locais ficam mais
              expostos ao sol, têm menos sombra e oferecem menos abrigo para a fauna.
            </p>
            <p>
              Arborizar não significa apenas plantar em qualquer espaço: é preciso
              considerar calçadas, fiação, redes subterrâneas, circulação de pessoas
              e o tamanho que a árvore terá quando adulta.
            </p>
            <Link to="/orientacoes" className="text-link">Entenda os cuidados antes do plantio <span aria-hidden="true">→</span></Link>
          </div>
          <div className="editorial-image image-frame image-frame-rounded">
            <img
              src="/images/pginicial2.jpg"
              alt="Edificações e estruturas urbanas em uma cidade"
              loading="lazy"
              onError={(event) => { event.currentTarget.style.display = "none"; }}
            />
          </div>
        </div>
      </section>

      <section className="editorial-section editorial-soft">
        <div className="container editorial-layout editorial-reverse">
          <div className="editorial-copy">
            <span className="eyebrow">O valor da arborização</span>
            <h2>Mais sombra, vida e equilíbrio.</h2>
            <p>
              Uma arborização bem planejada ajuda a reduzir a exposição ao calor,
              melhora a experiência de caminhar pela cidade e amplia os espaços
              disponíveis para a biodiversidade.
            </p>
            <p>
              Priorizar espécies nativas e diversificar os plantios também contribui
              para valorizar a vegetação regional e fortalecer as relações entre
              as pessoas e a natureza.
            </p>
            <Link to="/catalogo" className="text-link">Explore espécies para diferentes ambientes <span aria-hidden="true">→</span></Link>
          </div>
          <div className="editorial-image image-frame image-frame-rounded">
            <img
              src="/images/pginicial3.jpg"
              alt="Árvores altas formando uma área verde sombreada"
              loading="lazy"
              onError={(event) => { event.currentTarget.style.display = "none"; }}
            />
          </div>
        </div>
      </section>

      <section className="planting-callout">
        <div className="container planting-callout-inner">
          <div>
            <span className="eyebrow eyebrow-light">Antes de colocar a mão na terra</span>
            <h2>Um bom plantio começa com a escolha certa.</h2>
            <p>
              Veja as etapas básicas para preparar o local, escolher uma muda,
              plantar e acompanhar seu desenvolvimento.
            </p>
          </div>
          <Link to="/orientacoes" className="button button-light">Ver guia de plantio <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="explore-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Continue explorando</span>
            <h2>O próximo passo começa aqui.</h2>
            <p>Use os guias do projeto para transformar interesse em ação.</p>
          </div>

          <div className="explore-grid">
            <article className="explore-card">
              <h3>Encontre uma espécie</h3>
              <p>Compare porte, características e ambientes recomendados para cada árvore.</p>
              <Link to="/catalogo" className="text-link">Abrir catálogo <span aria-hidden="true">→</span></Link>
            </article>

            <article className="explore-card">
              <h3>Aprenda a cuidar</h3>
              <p>Consulte orientações introdutórias sobre solo, plantio, rega e manutenção.</p>
              <Link to="/orientacoes" className="text-link">Ver orientações <span aria-hidden="true">→</span></Link>
            </article>

            <article className="explore-card">
              <h3>Encontre onde comprar</h3>
              <p>Pesquise viveiros, floriculturas e locais de referência em municípios do RS.</p>
              <Link to="/viveiros" className="text-link">Buscar estabelecimentos <span aria-hidden="true">→</span></Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

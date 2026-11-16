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
              Mais árvores significam cidades melhores:
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
              alt="Paisagem verde com árvores representando uma cidade mais arborizada"
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
                As árvores proporcionam sombra e liberam vapor de água pelas folhas,
                ajudando a diminuir o calor. Isso contribui para tornar ruas e espaços
                públicos mais frescos e confortáveis.
              </p>
            </InfoCard>

            <InfoCard title="Melhoria do ar">
              <p>
                As folhas ajudam a reter parte das partículas presentes no ar,
                enquanto as árvores absorvem gás carbônico. Assim, contribuem
                para melhorar as condições ambientais das cidades.
              </p>
            </InfoCard>

            <InfoCard title="Biodiversidade">
              <p>
                As árvores oferecem alimento, abrigo e locais de reprodução para aves,
                insetos e outros animais. A presença de diferentes espécies vegetais
                também ajuda a manter os ecossistemas urbanos.
              </p>
            </InfoCard>

            <InfoCard title="Regulação da água da chuva">
              <p>
                A copa das árvores intercepta parte da água da chuva, enquanto suas
                raízes favorecem a infiltração no solo. Isso ajuda a reduzir o
                escoamento da água pelas ruas.
              </p>
            </InfoCard>

            <InfoCard title="Bem-estar e qualidade de vida">
              <p>
                Áreas arborizadas oferecem sombra e tornam os espaços públicos mais
                agradáveis. Elas incentivam caminhadas, atividades ao ar livre e
                momentos de convivência entre as pessoas.
              </p>
            </InfoCard>

            <InfoCard title="Armazenamento de carbono">
              <p>
                Durante seu crescimento, as árvores absorvem gás carbônico da
                atmosfera e armazenam parte desse carbono em seus troncos, galhos
                e raízes, contribuindo para reduzir o impacto das mudanças climáticas.
              </p>
            </InfoCard>
          </div>
        </div>
      </section>



      <section className="editorial-section">
        <div className="container editorial-layout">
          <div className="editorial-copy">
            <span className="eyebrow">O desafio nas cidades</span>
            <h2>O que acontece quando faltam árvores?</h2>
            <p>
              A falta de arborização afeta diretamente o ambiente urbano.
              Sem árvores, ruas e calçadas ficam mais expostas ao sol, aumentando
              a sensação de calor.
              A ausência de vegetação também reduz os espaços de abrigo para
              os animais e diminui a capacidade do solo de absorver a água da chuva.
            </p>
            <p>
              Arborizar não significa apenas plantar em qualquer espaço. É preciso
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
            <h2>Cidades mais verdes são cidades melhores.</h2>
            <p>
              A arborização urbana é essencial para construir cidades mais saudáveis
              e equilibradas. Além de melhorar o ambiente, as árvores contribuem para
              o conforto das pessoas, a proteção da biodiversidade e a qualidade dos
              espaços públicos. Cuidar da vegetação urbana é investir no bem-estar de toda a comunidade.
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

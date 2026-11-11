import { Link } from "react-router-dom";
import FaqItem from "../components/FaqItem.jsx";

const etapas = [
  {
    numero: "01",
    titulo: "Prepare o local e o solo",
    texto: "Observe o espaço disponível, a incidência de luz, a drenagem e as condições do solo. Em áreas urbanas, verifique a distância de muros, postes, redes subterrâneas e fiação antes de definir o ponto de plantio."
  },
  {
    numero: "02",
    titulo: "Escolha uma muda adequada",
    texto: "Prefira mudas vigorosas, com folhas e ramos saudáveis e sem sinais evidentes de pragas. Escolha uma espécie compatível com o clima, o tamanho do espaço e o ambiente onde será plantada."
  },
  {
    numero: "03",
    titulo: "Faça o plantio com cuidado",
    texto: "Prepare uma cova compatível com o torrão, retire a embalagem sem danificar as raízes e mantenha a muda na posição correta. Complete com terra, firme suavemente e evite enterrar o colo da planta."
  },
  {
    numero: "04",
    titulo: "Mantenha a irrigação",
    texto: "Após o plantio, regue para acomodar o solo ao redor das raízes. A frequência depende da espécie, do clima, do solo e da chuva; acompanhe a umidade e evite tanto o ressecamento quanto o encharcamento."
  },
  {
    numero: "05",
    titulo: "Acompanhe o desenvolvimento",
    texto: "Observe o crescimento, mantenha o entorno sem competição excessiva de plantas espontâneas e proteja a muda contra danos. Podas e intervenções devem seguir orientação técnica, especialmente em árvores urbanas."
  }
];

const perguntas = [
  {
    pergunta: "Qualquer árvore pode ser plantada na calçada?",
    resposta: "Não. A espécie precisa ser compatível com a largura da calçada, a presença de fiação, redes subterrâneas, acessos e espaço para as raízes e a copa. Consulte as orientações da prefeitura antes de plantar em passeio público."
  },
  {
    pergunta: "Qual é a melhor época para plantar?",
    resposta: "Em geral, períodos mais amenos e com maior disponibilidade de chuva podem facilitar o estabelecimento da muda. A época ideal varia conforme a espécie e o clima local; peça orientação ao viveiro ou à assistência técnica da região."
  },
  {
    pergunta: "Com que frequência devo regar?",
    resposta: "Não existe uma frequência única. Nos primeiros meses, acompanhe a umidade do solo e ajuste a rega conforme chuva, temperatura, tipo de solo e necessidade da espécie. Evite deixar o solo permanentemente encharcado."
  },
  {
    pergunta: "Como escolher uma árvore para um espaço pequeno?",
    resposta: "Observe o porte adulto, a largura da copa, as raízes e a distância de construções e redes. Não escolha apenas pelo tamanho da muda: uma árvore pequena no viveiro pode crescer bastante com o passar dos anos."
  },
  {
    pergunta: "Posso podar ou remover uma árvore da calçada por conta própria?",
    resposta: "As regras variam entre municípios. Em muitos locais, intervenções em árvores de calçadas e áreas públicas exigem autorização e execução por profissionais habilitados. Consulte a prefeitura antes de realizar qualquer intervenção."
  }
];

function Orientacoes() {
  return (
    <main className="page-main">
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">Guia básico</span>
          <h1>Orientações de plantio</h1>
          <p>
            Plantar é só o começo. A escolha do local, os cuidados iniciais e o
            acompanhamento fazem diferença no desenvolvimento da árvore.
          </p>
          <a href="#faq" className="button button-secondary button-ajuste">Ir para perguntas frequentes ↓</a>
        </div>
      </section>

      <section className="container steps-section">
        <div className="section-heading">
          <span className="eyebrow">Do planejamento à manutenção</span>
          <h2>Etapas básicas para um plantio responsável</h2>
          <p>Use este roteiro como introdução e procure orientação local para situações específicas.</p>
        </div>

        <div className="steps-list">
          {etapas.map((etapa) => (
            <article className="step-card" key={etapa.numero}>
              <div className="step-number">{etapa.numero}</div>
              <div className="step-content">
                <h2>{etapa.titulo}</h2>
                <p>{etapa.texto}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="notice-box">
          <strong>Plantio em calçadas e áreas públicas:</strong> não escolha o local ou a espécie
          sem consultar as regras municipais. A prefeitura pode indicar espécies, dimensões de
          canteiro e procedimentos específicos.
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="container faq-layout">
          <div className="faq-heading">
            <span className="eyebrow">Tire suas dúvidas</span>
            <h2>Perguntas frequentes</h2>
            <p>Respostas rápidas para dúvidas comuns de quem está começando.</p>
            <Link to="/catalogo" className="text-link">Voltar ao catálogo de espécies <span aria-hidden="true">→</span></Link>
          </div>

          <div className="faq-list">
            {perguntas.map((item) => (
              <FaqItem key={item.pergunta} pergunta={item.pergunta} resposta={item.resposta} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Orientacoes;

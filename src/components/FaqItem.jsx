import { useState } from "react";

function FaqItem({ pergunta, resposta }) {
  const [aberto, setAberto] = useState(false);
  const identificador = pergunta.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <article className={`faq-item ${aberto ? "is-open" : ""}`}>
      <h3>
        <button
          className="faq-question"
          type="button"
          aria-expanded={aberto}
          aria-controls={`resposta-${identificador}`}
          onClick={() => setAberto((estado) => !estado)}
        >
          <span>{pergunta}</span>
          <span className="faq-symbol" aria-hidden="true">{aberto ? "−" : "+"}</span>
        </button>
      </h3>
      {aberto && (
        <div className="faq-answer" id={`resposta-${identificador}`}>
          <p>{resposta}</p>
        </div>
      )}
    </article>
  );
}

export default FaqItem;

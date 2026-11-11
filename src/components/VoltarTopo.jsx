import { useEffect, useState } from "react";

function VoltarTopo() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    function verificarRolagem() {
      setVisivel(window.scrollY > 450);
    }

    window.addEventListener("scroll", verificarRolagem, { passive: true });
    verificarRolagem();

    return () => window.removeEventListener("scroll", verificarRolagem);
  }, []);

  if (!visivel) return null;

  return (
    <button
      className="back-to-top"
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
    >
      ↑
    </button>
  );
}

export default VoltarTopo;

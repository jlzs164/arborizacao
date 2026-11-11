import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section className="footer-about">
          <Link to="/" className="footer-brand">Raiz Urbana</Link>
          <p>
            Um guia introdutório sobre arborização, espécies nativas,
            plantio responsável e locais onde procurar mudas no Rio Grande do Sul.
          </p>
        </section>

        <nav className="footer-links" aria-label="Links do rodapé">
          <h2>Explore</h2>
          <ul>
            <li><Link to="/">Página inicial</Link></li>
            <li><Link to="/catalogo">Catálogo de árvores</Link></li>
            <li><Link to="/orientacoes">Orientações de plantio</Link></li>
            <li><Link to="/viveiros">Viveiros e floriculturas</Link></li>
          </ul>
        </nav>

        <section className="footer-contact">
          <h2>Sobre o projeto</h2>
          <p>
            Conteúdo educativo. Antes de plantar em calçadas ou espaços públicos,
            consulte as orientações e as regras do seu município.
          </p>
          <a href="mailto:raizurbana@gmail.com">raizurbana@gmail.com</a>
        </section>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Raiz Urbana</p>
          <p>Informação, planejamento e cuidado com o verde.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

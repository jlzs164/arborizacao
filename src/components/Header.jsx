import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  function classeLink({ isActive }) {
    return isActive ? "nav-link is-active" : "nav-link";
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={fecharMenu} aria-label="Raiz Urbana - página inicial">
          <span>Raiz Urbana</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuAberto}
          aria-controls="main-navigation"
          onClick={() => setMenuAberto((estado) => !estado)}
        >
          <span>{menuAberto ? "Fechar" : "Menu"}</span>
          <span className="menu-toggle-icon" aria-hidden="true">{menuAberto ? "×" : "☰"}</span>
        </button>

        <nav
          className={`main-nav ${menuAberto ? "is-open" : ""}`}
          id="main-navigation"
          aria-label="Navegação principal"
        >
          <NavLink to="/" end className={classeLink} onClick={fecharMenu}>
            Visão geral
          </NavLink>
          <Link to="/#informacoes" className="nav-link" onClick={fecharMenu}>
            Informações
          </Link>
          <NavLink to="/catalogo" className={classeLink} onClick={fecharMenu}>
            Árvores
          </NavLink>
          <NavLink to="/orientacoes" className={classeLink} onClick={fecharMenu}>
            Plantio
          </NavLink>
          <NavLink to="/viveiros" className={classeLink} onClick={fecharMenu}>
            Onde encontrar mudas
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;

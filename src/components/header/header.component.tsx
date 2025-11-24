import "./header.styles.css";

import { ShoppingBagIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="header-container">
      <h2 className="header-title">Club Clothing</h2>
      <nav className="header-items">
        <a className="header-item" href="#explore">
          Explorar
        </a>

        <a className="header-item" href="#login">
          Login
        </a>

        <a className="header-item" href="#signup">
          Criar Conta
        </a>

        <div className="header-item-cart">
          <ShoppingBagIcon color="#fff" size={20} />
          <span>5</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

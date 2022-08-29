import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const [valor, setValor] = useState(1);
  let abrir = valor % 2 === 0 ? "abrir" : "";
  return (
    <>
      <header>
        <button onClick={() => setValor(valor + 1)}><GiHamburgerMenu className="menu"/></button>
        <ul className={abrir}>
          <li>
            <a href="#Projetos">PROJETOS</a>
          </li>
          <li>
            <a href="#sobre">SOBRE</a>
          </li>

          <li>
            <a href="#footer">CONTATO</a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;

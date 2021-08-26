import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../Assets/FrontEnd Developer.svg";
import logoMobile from "../Assets/FrontEnd Developer Mobile.svg";
import UseMedia from "../Hooks/UseMedia";

const Header = () => {
  const [isHome, setIsHome] = useState("1");
  const mobile = UseMedia("(max-width: 40rem)");
  const [showUl, setShowUl] = React.useState(false);

  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">
          <img
            src={mobile ? logoMobile : logo}
            alt="Túlio Chaves"
            onClick={() => {
              setIsHome("1");
            }}
          />
        </Link>

        <button
          onClick={() => {
            setShowUl(!showUl);
          }}
          className={mobile ? styles.mobile : ""}
        ></button>

        <ul className={mobile ? styles.mobile : ""}>
          <li
            onClick={() => {
              setIsHome("1");
            }}
            className={isHome === "1" ? styles.ativo : ""}
          >
            <Link to="/">Quem sou</Link>
          </li>

          <li
            onClick={() => {
              setIsHome("2");
            }}
            className={isHome === "2" ? styles.ativo : ""}
          >
            <Link to="/projetos">Projetos</Link>
          </li>
          <li
            className={styles.separador}
            onClick={() => {
              setIsHome(null);
            }}
          >
            <Link className={styles.botao} to="/contato">
              Contato
            </Link>
          </li>
        </ul>

        <ul className={mobile && showUl ? styles.isMobile : styles.isNotMobile}>
          <li>
            <Link to="/">Quem sou</Link>
          </li>
          <li>
            <Link to="/projetos">Projetos</Link>
          </li>
          <li>
            <Link className={styles.botao} to="/contato">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import styles from "./Projetos.module.css";
import curriculo from "../Assets/projetos/curriculo online.png";
import dogs from "../Assets/projetos/dogs.png";
import react1 from "../Assets/projetos/react1.png";
import animais from "../Assets/projetos/animais.png";
import grid from "../Assets/projetos/cssgrid.png";
import darueiraD from "../Assets/projetos/darueiraD.png";

const Projetos = () => {
  const [accordeon, setAccordeon] = React.useState(false);
  const [accordeonDes, setAccordeonDes] = React.useState(false);
  const [accordeonMob, setAccordeonMob] = React.useState(false);
  return (
    <section className={styles.projetos}>
      <h1>PROJETOS</h1>
      <h6>Desenvolvimento</h6>
      <div className={styles.boxDevProjetos}>
        {/* Dev imagem 1 */}
        <a
          href="https://github.com/tuliochavess/curriculoonline"
          target="blank"
          className={styles.img1}
        >
          <img src={curriculo} alt="Túlio Chaves de Souza" />
        </a>
        {/* Dev imagem 2 */}
        <a
          href="https://github.com/tuliochavess/projeto-react-dogs"
          target="blank"
          className={styles.img2}
        >
          <img src={dogs} alt="Dogs - React Project" />
        </a>
        {/* Dev imagem 3 */}
        <a
          href="https://github.com/tuliochavess/primeiro-prejeto-react"
          target="blank"
          className={styles.img1}
        >
          <img src={react1} alt="Primeiro Projeto em React" />
        </a>
        {/* Dev imagem 4 */}
        <a
          href="https://github.com/tuliochavess/animais-fantasticos-origamid"
          target="blank"
          className={styles.img2}
        >
          <img src={animais} alt="Animais Fantásticos Origamid" />
        </a>
        <span
          className={
            accordeon ? styles.accordeonShow : styles.accordeonDontShow
          }
        >
          {/* Dev imagem 5 */}
          <a
            href="https://github.com/tuliochavess/css-grid-layout-origamid"
            target="blank"
            className={styles.img1}
          >
            <img src={grid} alt="Origamid CSS Grid Layout" />
          </a>
        </span>
        <h5
          className={accordeon ? styles.verTodosUp : styles.verTodos}
          onClick={() => setAccordeon(!accordeon)}
        >
          Ver todos
        </h5>
      </div>
      <h6 className={styles.interface}>Interfaces Desktop</h6>
      <div className={styles.boxDesktop}>
        {/* Desktop imagem 1 */}
        <a
          href="https://www.figma.com/proto/Umt5TvEmZNojCIYQidT5O1/Darueira?page-id=0%3A1&node-id=3%3A2&viewport=313%2C48%2C0.05&scaling=min-zoom"
          target="blank"
          className={styles.img1}
        >
          <img src={darueiraD} alt="Túlio Chaves de Souza" />
        </a>
        {/* Desktop imagem 2 */}
        <a
          href="https://www.figma.com/proto/Umt5TvEmZNojCIYQidT5O1/Darueira?page-id=0%3A1&node-id=3%3A2&viewport=313%2C48%2C0.05&scaling=min-zoom"
          target="blank"
          className={styles.img2}
        >
          <img src={darueiraD} alt="Túlio Chaves de Souza" />
        </a>
        {/* Desktop imagem 3 */}
        <a
          href="https://www.figma.com/proto/Umt5TvEmZNojCIYQidT5O1/Darueira?page-id=0%3A1&node-id=3%3A2&viewport=313%2C48%2C0.05&scaling=min-zoom"
          target="blank"
          className={styles.img3}
        >
          <img src={darueiraD} alt="Túlio Chaves de Souza" />
        </a>
        {/* Desktop imagem 4 */}
        <a
          href="https://www.figma.com/proto/Umt5TvEmZNojCIYQidT5O1/Darueira?page-id=0%3A1&node-id=3%3A2&viewport=313%2C48%2C0.05&scaling=min-zoom"
          target="blank"
          className={styles.img1}
        >
          <img src={darueiraD} alt="Túlio Chaves de Souza" />
        </a>
        {/* Desktop imagem 5 */}
        <a
          href="https://www.figma.com/proto/Umt5TvEmZNojCIYQidT5O1/Darueira?page-id=0%3A1&node-id=3%3A2&viewport=313%2C48%2C0.05&scaling=min-zoom"
          target="blank"
          className={styles.img2}
        >
          <img src={darueiraD} alt="Túlio Chaves de Souza" />
        </a>
        {/* Desktop imagem 6 */}
        <a
          href="https://www.figma.com/proto/Umt5TvEmZNojCIYQidT5O1/Darueira?page-id=0%3A1&node-id=3%3A2&viewport=313%2C48%2C0.05&scaling=min-zoom"
          target="blank"
          className={styles.img3}
        >
          <img src={darueiraD} alt="Túlio Chaves de Souza" />
        </a>
        <span
          className={
            accordeonDes ? styles.accordeonShow : styles.accordeonDontShow
          }
        >
          {/* Desktop imagem 7 */}
          <a
            href="https://www.figma.com/proto/Umt5TvEmZNojCIYQidT5O1/Darueira?page-id=0%3A1&node-id=3%3A2&viewport=313%2C48%2C0.05&scaling=min-zoom"
            target="blank"
            className={styles.img1}
          >
            <img src={darueiraD} alt="Túlio Chaves de Souza" />
          </a>
          {/* Desktop imagem 8 */}
          <a
            href="https://www.figma.com/proto/Umt5TvEmZNojCIYQidT5O1/Darueira?page-id=0%3A1&node-id=3%3A2&viewport=313%2C48%2C0.05&scaling=min-zoom"
            target="blank"
            className={styles.img2}
          >
            <img src={darueiraD} alt="Túlio Chaves de Souza" />
          </a>
          {/* Desktop imagem 9 */}
          <a
            href="https://www.figma.com/proto/Umt5TvEmZNojCIYQidT5O1/Darueira?page-id=0%3A1&node-id=3%3A2&viewport=313%2C48%2C0.05&scaling=min-zoom"
            target="blank"
            className={styles.img3}
          >
            <img src={darueiraD} alt="Túlio Chaves de Souza" />
          </a>
        </span>
        <h5
          className={accordeonDes ? styles.verTodosUp : styles.verTodos}
          onClick={() => setAccordeonDes(!accordeonDes)}
        >
          Ver todos
        </h5>
      </div>
      <h6 className={styles.interface}>Interfaces Mobile</h6>
      <div className={styles.boxMobile}>
        {/* Mobile imagem 1 */}
        <a
          href="https://www.figma.com/proto/Umt5TvEmZNojCIYQidT5O1/Darueira?page-id=0%3A1&node-id=3%3A2&viewport=313%2C48%2C0.05&scaling=min-zoom"
          target="blank"
          className={styles.img1}
        >
          <img src={darueiraD} alt="Túlio Chaves de Souza" />
        </a>
        {/* Mobile imagem 2 */}
        <a
          href="https://www.figma.com/proto/Umt5TvEmZNojCIYQidT5O1/Darueira?page-id=0%3A1&node-id=3%3A2&viewport=313%2C48%2C0.05&scaling=min-zoom"
          target="blank"
          className={styles.img2}
        >
          <img src={darueiraD} alt="Túlio Chaves de Souza" />
        </a>
        {/* Mobile imagem 3 */}
        <a
          href="https://www.figma.com/proto/Umt5TvEmZNojCIYQidT5O1/Darueira?page-id=0%3A1&node-id=3%3A2&viewport=313%2C48%2C0.05&scaling=min-zoom"
          target="blank"
          className={styles.img3}
        >
          <img src={darueiraD} alt="Túlio Chaves de Souza" />
        </a>
        {/* Mobile imagem 4 */}
        <a
          href="https://www.figma.com/proto/Umt5TvEmZNojCIYQidT5O1/Darueira?page-id=0%3A1&node-id=3%3A2&viewport=313%2C48%2C0.05&scaling=min-zoom"
          target="blank"
          className={styles.img1}
        >
          <img src={darueiraD} alt="Túlio Chaves de Souza" />
        </a>
        {/* Mobile imagem 5 */}
        <a
          href="https://www.figma.com/proto/Umt5TvEmZNojCIYQidT5O1/Darueira?page-id=0%3A1&node-id=3%3A2&viewport=313%2C48%2C0.05&scaling=min-zoom"
          target="blank"
          className={styles.img2}
        >
          <img src={darueiraD} alt="Túlio Chaves de Souza" />
        </a>
        {/* Mobile imagem 6 */}
        <a
          href="https://www.figma.com/proto/Umt5TvEmZNojCIYQidT5O1/Darueira?page-id=0%3A1&node-id=3%3A2&viewport=313%2C48%2C0.05&scaling=min-zoom"
          target="blank"
          className={styles.img3}
        >
          <img src={darueiraD} alt="Túlio Chaves de Souza" />
        </a>
        <span
          className={
            accordeonMob ? styles.accordeonShow : styles.accordeonDontShow
          }
        >
          peido
        </span>
        <h5
          className={accordeonMob ? styles.verTodosUp : styles.verTodos}
          onClick={() => setAccordeonMob(!accordeonMob)}
        >
          Ver todos
        </h5>
      </div>
    </section>
  );
};

export default Projetos;

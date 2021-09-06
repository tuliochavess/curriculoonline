import React from "react";
import styles from "./Projetos.module.css";
import curriculo from "../Assets/projetos/curriculo online.png";
import dogs from "../Assets/projetos/dogs.png";
import react1 from "../Assets/projetos/react1.png";
import animais from "../Assets/projetos/animais.png";
import grid from "../Assets/projetos/cssgrid.png";
import darueiraD from "../Assets/projetos/Desktop/darueiraD.png";
import BHCPD from "../Assets/projetos/Desktop/BHCPD.png";
import ggnD from "../Assets/projetos/Desktop/ggnD.png";
import elementoaD from "../Assets/projetos/Desktop/elementoaD.png";
import ecofloraD from "../Assets/projetos/Desktop/ecofloraD.png";
import frutosD from "../Assets/projetos/Desktop/frutosD.png";
import flavioD from "../Assets/projetos/Desktop/flavioD.png";
import advogadoD from "../Assets/projetos/Desktop/advogadoD.png";
import valleD from "../Assets/projetos/Desktop/valleD.png";
import fabiolaD from "../Assets/projetos/Desktop/fabiolaD.png";
import mindfulD from "../Assets/projetos/Desktop/mindfulD.png";
import bmkD from "../Assets/projetos/Desktop/bmkD.png";
import evercodeD from "../Assets/projetos/Desktop/evercodeD.png";
import darueiraM from "../Assets/projetos/Mobile/darueiraM.png";
import bhcpM from "../Assets/projetos/Mobile/bhcpM.png";
import ecofloraM from "../Assets/projetos/Mobile/ecofloraM.png";
import elementoaM from "../Assets/projetos/Mobile/elementoaM.png";
import bhcp2M from "../Assets/projetos/Mobile/bhcp2M.png";
import frutosM from "../Assets/projetos/Mobile/frutosM.png";
import valleM from "../Assets/projetos/Mobile/valleM.png";
import fabiolaM from "../Assets/projetos/Mobile/fabiolaM.png";
import mindfulM from "../Assets/projetos/Mobile/mindfulM.png";
import evercodeM from "../Assets/projetos/Mobile/evercodeM.png";

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
          {accordeon ? "Ver menos" : "Ver todos"}
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
          <img src={darueiraD} alt="Jornal Darueira" />
        </a>
        {/* Desktop imagem 2 */}
        <a
          href="https://www.figma.com/proto/HRH6R7EHHfvTPtm8repF80/BH-Cortinas-Desktop?page-id=0%3A1&node-id=1%3A2&viewport=313%2C48%2C0.38&scaling=min-zoom"
          target="blank"
          className={styles.img2}
        >
          <img src={BHCPD} alt="BHCP" />
        </a>
        {/* Desktop imagem 3 */}
        <a
          href="https://www.figma.com/proto/QwclppKTQx6EDxFysARlFA/GGN?page-id=0%3A1&node-id=19%3A2&viewport=313%2C48%2C0.15&scaling=min-zoom"
          target="blank"
          className={styles.img3}
        >
          <img src={ggnD} alt="Jornal GGN" />
        </a>
        {/* Desktop imagem 4 */}
        <a
          href="https://www.figma.com/proto/IeHfzwEmLYJY1G2Vf34jat/Elemento-A-Desktop-Copy?page-id=0%3A1&node-id=1%3A21&viewport=313%2C48%2C0.16&scaling=min-zoom"
          target="blank"
          className={styles.img1}
        >
          <img src={elementoaD} alt="Elemento A" />
        </a>
        {/* Desktop imagem 5 */}
        <a
          href="https://www.figma.com/proto/blIus2RyoF0B4w6bQlJHfj/Ecoflora-Desktop?page-id=0%3A1&node-id=7%3A147&viewport=313%2C48%2C0.16&scaling=min-zoom&starting-point-node-id=7%3A147"
          target="blank"
          className={styles.img2}
        >
          <img src={ecofloraD} alt="Ecoflora" />
        </a>
        {/* Desktop imagem 6 */}
        <a
          href="https://www.figma.com/proto/O2Fkgz5w2XaLHsyAyFZRM2/Frutos-de-Goiás-Protótipo?page-id=0%3A1&node-id=1%3A3&viewport=313%2C48%2C0.08&scaling=min-zoom&starting-point-node-id=1%3A3"
          target="blank"
          className={styles.img3}
        >
          <img src={frutosD} alt="Frutos de Goias" />
        </a>
        <span
          className={
            accordeonDes ? styles.accordeonShow : styles.accordeonDontShow
          }
        >
          {/* Desktop imagem 7 */}
          <a
            href="https://www.figma.com/proto/LqTGbjBnbJeAqVmyiUYifN/Flávio-Nierere-mais-Claro?page-id=0%3A1&node-id=31%3A2&viewport=313%2C48%2C0.19&scaling=min-zoom"
            target="blank"
            className={styles.img1}
          >
            <img src={flavioD} alt="Flavio Advogado" />
          </a>
          {/* Desktop imagem 8 */}
          <a
            href="https://www.figma.com/proto/c6HVTxwBksdHqpgxgEZwO3/CM-Advogados-Desktop?page-id=0%3A1&node-id=2%3A0&viewport=313%2C48%2C0.1&scaling=min-zoom"
            target="blank"
            className={styles.img2}
          >
            <img src={advogadoD} alt="CM Advogados" />
          </a>
          {/* Desktop imagem 9 */}
          <a
            href="https://www.figma.com/proto/r7aVPojQ3PPnfUuPo7uwwX/Valledaré?page-id=0%3A1&node-id=4%3A18&viewport=313%2C48%2C0.09&scaling=min-zoom"
            target="blank"
            className={styles.img3}
          >
            <img src={valleD} alt="Valle Daré" />
          </a>
          {/* Desktop imagem 10 */}
          <a
            href="https://www.figma.com/proto/a3Ia4QXRubOH5EvW1eVhSr/Fabíola-Rocha?page-id=0%3A1&node-id=30%3A2&viewport=313%2C48%2C0.16&scaling=min-zoom"
            target="blank"
            className={styles.img1}
          >
            <img src={fabiolaD} alt="Fabiola Rocha" />
          </a>
          {/* Desktop imagem 11 */}
          <a
            href="https://www.figma.com/proto/KgBnjbt0aHTgewdaHvbE7D/MindFulArte?page-id=0%3A1&node-id=2%3A0&viewport=313%2C48%2C0.13&scaling=min-zoom&starting-point-node-id=2%3A0"
            target="blank"
            className={styles.img2}
          >
            <img src={mindfulD} alt="MindFul Arte" />
          </a>
          {/* Desktop imagem 12 */}
          <a
            href="https://www.figma.com/proto/BZxdud8LDUrKGn6sKqJwZS/BMK-Partners-Destop?page-id=0%3A1&node-id=8%3A2&viewport=313%2C48%2C0.14&scaling=min-zoom&starting-point-node-id=8%3A2"
            target="blank"
            className={styles.img3}
          >
            <img src={bmkD} alt="BMK" />
          </a>
          {/* Desktop imagem 13 */}
          <a
            href="https://www.figma.com/proto/1GnhGpFblQnreBT4v8qExy/Protótipo-Final-Evercode-Web-Desktop?page-id=0%3A1&node-id=142%3A540&viewport=313%2C48%2C0.09&scaling=min-zoom&starting-point-node-id=142%3A540"
            target="blank"
            className={styles.img1}
          >
            <img src={evercodeD} alt="Evercode Web" />
          </a>
        </span>
        <h5
          className={accordeonDes ? styles.verTodosUp : styles.verTodos}
          onClick={() => setAccordeonDes(!accordeonDes)}
        >
          {accordeonDes ? "Ver menos" : "Ver todos"}
        </h5>
      </div>
      <h6 className={styles.interface}>Interfaces Mobile</h6>
      <div className={styles.boxMobile}>
        {/* Mobile imagem 1 */}
        <a
          href="https://www.figma.com/proto/Ecy90LxmUhGzxuiiPxB2p2/Darueira-Mobile-Copy?page-id=0%3A1&node-id=1%3A2&viewport=313%2C48%2C1.02&scaling=scale-down"
          target="blank"
          className={styles.img1}
        >
          <img src={darueiraM} alt="Jornal Darueira" />
        </a>
        {/* Mobile imagem 2 */}
        <a
          href="https://www.figma.com/proto/B5pdESBxtR4tFoMsOCChvw/LP-BH-Cortinas-Mobile?page-id=0%3A1&node-id=1%3A3&viewport=313%2C48%2C0.11&scaling=scale-down"
          target="blank"
          className={styles.img2}
        >
          <img src={bhcpM} alt="BHCP" />
        </a>
        {/* Mobile imagem 3 */}
        <a
          href="https://www.figma.com/proto/C7X7z6Am6ZwCQCyhKBdl9k/Ecoflora-Mobile-Alterado?page-id=0%3A1&node-id=1%3A2&viewport=313%2C48%2C0.52&scaling=scale-down"
          target="blank"
          className={styles.img3}
        >
          <img src={ecofloraM} alt="Ecoflora" />
        </a>
        {/* Mobile imagem 4 */}
        <a
          href="https://www.figma.com/proto/sxtokorpWu9lQtA0w1QLuN/Elemento-A-Mobile?page-id=0%3A1&node-id=1%3A2&viewport=313%2C48%2C0.14&scaling=scale-down"
          target="blank"
          className={styles.img1}
        >
          <img src={elementoaM} alt="Elemento A" />
        </a>
        {/* Mobile imagem 5 */}
        <a
          href="https://www.figma.com/proto/iLrU9fZuFZ7jpTiBKJb3sG/BH-Cortinas-Mobile?page-id=0%3A1&node-id=1%3A2&viewport=313%2C48%2C0.17&scaling=scale-down"
          target="blank"
          className={styles.img2}
        >
          <img src={bhcp2M} alt="BHCP" />
        </a>
        {/* Mobile imagem 6 */}
        <a
          href="https://www.figma.com/proto/q55uFrcKUApykG9GsDFEPU/Frutos-de-Goiás-Mobile?page-id=0%3A1&node-id=1%3A2&viewport=313%2C48%2C0.23&scaling=scale-down&starting-point-node-id=1%3A2"
          target="blank"
          className={styles.img3}
        >
          <img src={frutosM} alt="Frutos de Goias" />
        </a>
        <span
          className={
            accordeonMob ? styles.accordeonShow : styles.accordeonDontShow
          }
        >
          {/* Mobile imagem 7 */}
          <a
            href="https://www.figma.com/proto/DfhvGLT9rmntNB9gcYDsHg/ValleDaré-Mobile?page-id=0%3A1&node-id=1%3A2&viewport=313%2C48%2C0.11&scaling=scale-down"
            target="blank"
            className={styles.img1}
          >
            <img src={valleM} alt="Valle Daré" />
          </a>
          {/* Mobile imagem 8 */}
          <a
            href="https://www.figma.com/proto/rxpTo9t3fHDiv9AfylAHYo/Fabíola-Rocha-Mobile?page-id=0%3A1&node-id=1%3A2&viewport=313%2C48%2C0.16&scaling=scale-down"
            target="blank"
            className={styles.img2}
          >
            <img src={fabiolaM} alt="Fabiola Rocha" />
          </a>
          {/* Mobile imagem 9 */}
          <a
            href="https://www.figma.com/proto/1gwZdIsLf2EQOjJOWASDKa/MindfulArte-mobile?page-id=0%3A1&node-id=1%3A202&viewport=313%2C48%2C0.67&scaling=scale-down"
            target="blank"
            className={styles.img3}
          >
            <img src={mindfulM} alt="MindFul Arte" />
          </a>
          {/* Mobile imagem 10 */}
          <a
            href="https://www.figma.com/proto/BIjHrpnRXY6kTUfOgGRLUh/Protótipo-Final-Evercode-Web-Mobile?page-id=0%3A1&node-id=1%3A545&viewport=313%2C48%2C0.12&scaling=scale-down&starting-point-node-id=1%3A545"
            target="blank"
            className={styles.img1}
          >
            <img src={evercodeM} alt="Evercode Web" />
          </a>
        </span>
        <h5
          className={accordeonMob ? styles.verTodosUp : styles.verTodos}
          onClick={() => setAccordeonMob(!accordeonMob)}
        >
          {accordeonMob ? "Ver menos" : "Ver todos"}
        </h5>
      </div>
    </section>
  );
};

export default Projetos;

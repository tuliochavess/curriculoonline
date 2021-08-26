import React from "react";
import styles from "./Cursos.module.css";
import UseMedia from "../Hooks/UseMedia";
import origamid from "../Assets/cursos/origamid.svg";
import origamidM from "../Assets/cursos/mobile/origamidM.svg";
import udemy from "../Assets/cursos/udemy.svg";
import udemyM from "../Assets/cursos/mobile/udemyM.svg";

const Cursos = () => {
  const mobile = UseMedia("(max-width: 40rem)");
  const [accordeon, setAccordeon] = React.useState(false);

  return (
    <section className={styles.cursos}>
      <h1 className={mobile ? styles.h1Mobile : ""}>CURSOS</h1>
      <h6 className={mobile ? styles.h6Mobile : ""}>Desenvolvimento</h6>

      {/* primeiro box desktop */}
      <div
        className={mobile ? styles.boxNotShow : styles.box1}
        onClick={(e) => {
          e.preventDefault();
          window.open("https://example.org", "_blank");
        }}
      >
        <div className={styles.logoFaculdade}>
          <img src={origamid} alt="Origamid" />
        </div>
        <div className={styles.infoFaculdade}>
          <h3>React Completo</h3>
          <div className={styles.dataFaculdade}>
            <p className={styles.nome}>Origamid</p>
            <p className={styles.tempo}>36 horas</p>
            <p className={styles.data}>08/2021</p>
          </div>
        </div>
      </div>

      {/* primeiro box mobile */}
      <div
        className={mobile ? styles.box1Mobile : styles.boxNotShow}
        onClick={(e) => {
          e.preventDefault();
          window.open("https://example.org", "_blank");
        }}
      >
        <h3>React Completo</h3>
        <div className={styles.imgEdados}>
          <img src={origamidM} alt="Origamid" />
          <div className={styles.dados}>
            <div className={styles.inline}>
              <p className={styles.nome}>Origamid</p>
              <p className={styles.data}>08/2021</p>
            </div>
            <p className={styles.tempo}>36 horas</p>
          </div>
        </div>
      </div>

      {/* segundo box desktop */}
      <div
        className={mobile ? styles.boxNotShow : styles.box2}
        onClick={(e) => {
          e.preventDefault();
          window.open("https://example.org", "_blank");
        }}
      >
        <div className={styles.logoFaculdade}>
          <img src={origamid} alt="Origamid" />
        </div>
        <div className={styles.infoFaculdade}>
          <h3>JavaScript Completo ES6</h3>
          <div className={styles.dataFaculdade}>
            <p className={styles.nome}>Origamid</p>
            <p className={styles.tempo}>74 horas</p>
            <p className={styles.data}>05/2021</p>
          </div>
        </div>
      </div>

      {/* segundo box mobile */}
      <div
        className={mobile ? styles.box1Mobile : styles.boxNotShow}
        onClick={(e) => {
          e.preventDefault();
          window.open("https://example.org", "_blank");
        }}
      >
        <h3>JavaScript Completo ES6</h3>
        <div className={styles.imgEdados}>
          <img src={origamidM} alt="Origamid" />
          <div className={styles.dados}>
            <div className={styles.inline}>
              <p className={styles.nome}>Origamid</p>
              <p className={styles.data}>05/2021</p>
            </div>
            <p className={styles.tempo}>74 horas</p>
          </div>
        </div>
      </div>

      {/* terceiro box desktop */}
      <div
        className={mobile ? styles.boxNotShow : styles.box3}
        onClick={(e) => {
          e.preventDefault();
          window.open("https://example.org", "_blank");
        }}
      >
        <div className={styles.logoFaculdade}>
          <img src={origamid} alt="Origamid" />
        </div>
        <div className={styles.infoFaculdade}>
          <h3>CSS Grid Layout</h3>
          <div className={styles.dataFaculdade}>
            <p className={styles.nome}>Origamid</p>
            <p className={styles.tempo}>10 horas</p>
            <p className={styles.data}>03/2021</p>
          </div>
        </div>
      </div>

      {/* terceiro box mobile */}
      <div
        className={mobile ? styles.box1Mobile : styles.boxNotShow}
        onClick={(e) => {
          e.preventDefault();
          window.open("https://example.org", "_blank");
        }}
      >
        <h3>CSS Grid Layout</h3>
        <div className={styles.imgEdados}>
          <img src={origamidM} alt="Origamid" />
          <div className={styles.dados}>
            <div className={styles.inline}>
              <p className={styles.nome}>Origamid</p>
              <p className={styles.data}>03/2021</p>
            </div>
            <p className={styles.tempo}>10 horas</p>
          </div>
        </div>
      </div>

      {/* quarto box desktop */}
      <div
        className={mobile ? styles.boxNotShow : styles.box4}
        onClick={(e) => {
          e.preventDefault();
          window.open("https://example.org", "_blank");
        }}
      >
        <div className={styles.logoFaculdade}>
          <img src={udemy} alt="Udemy" />
        </div>
        <div className={styles.infoFaculdade}>
          <h3> Understanding TypeScript ...</h3>
          <div className={styles.dataFaculdade}>
            <p className={styles.nome}>Udemy</p>
            <p className={styles.tempo}>15 horas</p>
            <p className={styles.data}>07/2021</p>
          </div>
        </div>
      </div>

      {/* quarto box mobile */}
      <div
        className={mobile ? styles.box1Mobile : styles.boxNotShow}
        onClick={(e) => {
          e.preventDefault();
          window.open("https://example.org", "_blank");
        }}
      >
        <h3> Understanding TypeScript ...</h3>
        <div className={styles.imgEdados}>
          <img src={udemyM} alt="Udemy" />
          <div className={styles.dados}>
            <div className={styles.inline}>
              <p className={styles.nome}>Udemy</p>
              <p className={styles.data}>07/2021</p>
            </div>
            <p className={styles.tempo}>15 horas</p>
          </div>
        </div>
      </div>

      {/* aqui começa o span */}
      <span
        className={accordeon ? styles.accordeonShow : styles.accordeonDontShow}
      >
        {/* quinto box desktop */}
        <div
          className={mobile ? styles.boxNotShow : styles.box3}
          onClick={(e) => {
            e.preventDefault();
            window.open("https://example.org", "_blank");
          }}
        >
          <div className={styles.logoFaculdade}>
            <img src={origamid} alt="Origamid" />
          </div>
          <div className={styles.infoFaculdade}>
            <h3>React Completo</h3>
            <div className={styles.dataFaculdade}>
              <p className={styles.nome}>Origamid</p>
              <p className={styles.tempo}>36 horas</p>
              <p className={styles.data}>08/2021</p>
            </div>
          </div>
        </div>

        {/* quinto box mobile */}
        <div
          className={mobile ? styles.box1Mobile : styles.boxNotShow}
          onClick={(e) => {
            e.preventDefault();
            window.open("https://example.org", "_blank");
          }}
        >
          <h3>React Completo</h3>
          <div className={styles.imgEdados}>
            <img src={origamidM} alt="Origamid" />
            <div className={styles.dados}>
              <div className={styles.inline}>
                <p className={styles.nome}>Origamid</p>
                <p className={styles.data}>08/2021</p>
              </div>
              <p className={styles.tempo}>36 horas</p>
            </div>
          </div>
        </div>

        {/* sexto box desktop */}
        <div
          className={mobile ? styles.boxNotShow : styles.box4}
          onClick={(e) => {
            e.preventDefault();
            window.open("https://example.org", "_blank");
          }}
        >
          <div className={styles.logoFaculdade}>
            <img src={udemy} alt="Udemy" />
          </div>
          <div className={styles.infoFaculdade}>
            <h3> Understanding TypeScript ...</h3>
            <div className={styles.dataFaculdade}>
              <p className={styles.nome}>Udemy</p>
              <p className={styles.tempo}>15 horas</p>
              <p className={styles.data}>07/2021</p>
            </div>
          </div>
        </div>

        {/* sexto box mobile */}
        <div
          className={mobile ? styles.box1Mobile : styles.boxNotShow}
          onClick={(e) => {
            e.preventDefault();
            window.open("https://example.org", "_blank");
          }}
        >
          <h3> Understanding TypeScript ...</h3>
          <div className={styles.imgEdados}>
            <img src={udemyM} alt="Udemy" />
            <div className={styles.dados}>
              <div className={styles.inline}>
                <p className={styles.nome}>Udemy</p>
                <p className={styles.data}>07/2021</p>
              </div>
              <p className={styles.tempo}>15 horas</p>
            </div>
          </div>
        </div>
      </span>
      <h5 className={styles.verTodos} onClick={() => setAccordeon(!accordeon)}>
        Ver todos
      </h5>
    </section>
  );
};

export default Cursos;

import React from "react";
import styles from "./Formacao.module.css";
import unopar from "../Assets/formacao/unopar.svg";
import fumec from "../Assets/formacao/fumec.svg";
import unoparM from "../Assets/formacao/mobile/unoparM.svg";
import fumecM from "../Assets/formacao/mobile/fumecM.svg";
import UseMedia from "../Hooks/UseMedia";

const Formacao = () => {
  const mobile = UseMedia("(max-width: 40rem)");
  const [accordeon, setAccordeon] = React.useState(false);

  return (
    <section className={styles.formacao}>
      <h1 className={mobile ? styles.h1Mobile : ""}>FORMAÇÃO</h1>

      <div
        className={mobile ? styles.boxNotShow : styles.box1}
        title="Tecnólogo em Análise e Desenvolvimento de Sistemas"
      >
        <div className={styles.logoFaculdade}>
          <img src={unopar} alt="UNOPAR" />
        </div>
        <div className={styles.infoFaculdade}>
          <h3>Tecnólogo em Análise e Desenvolvi...</h3>
          <div className={styles.dataFaculdade}>
            <p className={styles.nome}>UNOPAR</p>
            <p className={styles.tempo}>Cursando - 5º período</p>
            <p className={styles.data}>06/2022</p>
          </div>
        </div>
      </div>

      <div
        className={mobile ? styles.box1Mobile : styles.boxNotShow}
        title="Tecnólogo em Análise e Desenvolvimento de Sistemas"
      >
        <h3>Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
        <div className={styles.imgEdados}>
          <img src={unoparM} alt="UNOPAR" />
          <div className={styles.dados}>
            <div className={styles.inline}>
              <p className={styles.nome}>UNOPAR</p>
              <p className={styles.data}>06/2022</p>
            </div>
            <p className={styles.tempo}>Cursando - 5º período</p>
          </div>
        </div>
      </div>

      <div className={mobile ? styles.boxNotShow : styles.box2}>
        <div className={styles.logoFaculdade}>
          <img src={fumec} alt="FUMEC" />
        </div>
        <div className={styles.infoFaculdade}>
          <h3>Bacharel em Ciência da Computação</h3>
          <div className={styles.dataFaculdade}>
            <p className={styles.nome}>FUMEC</p>
            <p className={styles.tempo}>Trancada - 5º período</p>
            <p className={styles.data}>12/2015</p>
          </div>
        </div>
      </div>

      <div className={mobile ? styles.box1Mobile : styles.boxNotShow}>
        <h3>Bacharel em Ciência da Computação</h3>
        <div className={styles.imgEdados}>
          <img src={fumecM} alt="Fumec" />
          <div className={styles.dados}>
            <div className={styles.inline}>
              <p className={styles.nome}>FUMEC</p>
              <p className={styles.data}>12/2015</p>
            </div>
            <p className={styles.tempo}>Trancada - 5º período</p>
          </div>
        </div>
      </div>

      <span
        className={accordeon ? styles.accordeonShow : styles.accordeonDontShow}
      >
        <div
          className={mobile ? styles.boxNotShow : styles.box3}
          title="Tecnólogo em Redes de Computadores"
        >
          <div className={styles.logoFaculdade}>
            <img src={fumec} alt="FUMEC" />
          </div>
          <div className={styles.infoFaculdade}>
            <h3>Tecnólogo em Redes de Computado...</h3>
            <div className={styles.dataFaculdade}>
              <p className={styles.nome}>FUMEC</p>
              <p className={styles.tempo}>Trancada - 2º período</p>
              <p className={styles.data}>12/2017</p>
            </div>
          </div>
        </div>

        <div
          className={mobile ? styles.box1Mobile : styles.boxNotShow}
          title="Tecnólogo em Redes de Computadores"
        >
          <h3>Tecnólogo em Redes de Computadores</h3>
          <div className={styles.imgEdados}>
            <img src={fumecM} alt="Fumec" />
            <div className={styles.dados}>
              <div className={styles.inline}>
                <p className={styles.nome}>FUMEC</p>
                <p className={styles.data}>12/2017</p>
              </div>
              <p className={styles.tempo}>Trancada - 2º período</p>
            </div>
          </div>
        </div>

        <div
          className={mobile ? styles.boxNotShow : styles.box4}
          title="Bacharel em Engenharia Bioenergética"
        >
          <div className={styles.logoFaculdade}>
            <img src={fumec} alt="FUMEC" />
          </div>
          <div className={styles.infoFaculdade}>
            <h3>Bacharel em Engenharia Bioenergé...</h3>
            <div className={styles.dataFaculdade}>
              <p className={styles.nome}>FUMEC</p>
              <p className={styles.tempo}>Trancada - 7º período</p>
              <p className={styles.data}>12/2013</p>
            </div>
          </div>
        </div>

        <div
          className={mobile ? styles.box1Mobile : styles.boxNotShow}
          title="Bacharel em Engenharia Bioenergética"
        >
          <h3>Bacharel em Engenharia Bioenergética</h3>
          <div className={styles.imgEdados}>
            <img src={fumecM} alt="Fumec" />
            <div className={styles.dados}>
              <div className={styles.inline}>
                <p className={styles.nome}>FUMEC</p>
                <p className={styles.data}>12/2013</p>
              </div>
              <p className={styles.tempo}>Trancada - 7º período</p>
            </div>
          </div>
        </div>
      </span>

      <h6
        className={accordeon ? styles.verTodosUp : styles.verTodos}
        onClick={() => setAccordeon(!accordeon)}
      >
        {accordeon ? "Ver menos" : "Ver todos"}
      </h6>
    </section>
  );
};

export default Formacao;

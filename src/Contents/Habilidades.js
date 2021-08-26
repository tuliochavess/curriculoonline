import React from "react";
import styles from "./Habilidades.module.css";
import react from "../Assets/habilidades/react.svg";
import js from "../Assets/habilidades/js.svg";
import html from "../Assets/habilidades/html.svg";
import css from "../Assets/habilidades/css.svg";
import wp from "../Assets/habilidades/wp.svg";
import php from "../Assets/habilidades/php.svg";
import uxui from "../Assets/habilidades/ux ui logo.svg";
import figma from "../Assets/habilidades/figma.svg";
import cores from "../Assets/habilidades/cores.svg";
import tipo from "../Assets/habilidades/tipo.svg";
import reactM from "../Assets/habilidades/mobile/reactMobile.svg";
import jsM from "../Assets/habilidades/mobile/jsMobile.svg";
import htmlM from "../Assets/habilidades/mobile/htmlMobile.svg";
import cssM from "../Assets/habilidades/mobile/cssMobile.svg";
import wpM from "../Assets/habilidades/mobile/wpMobile.svg";
import phpM from "../Assets/habilidades/mobile/phpMobile.svg";
import figmaM from "../Assets/habilidades/mobile/figmaM.svg";
import uxuiM from "../Assets/habilidades/mobile/ux ui logoM.svg";
import tipoM from "../Assets/habilidades/mobile/tipoM.svg";
import coresM from "../Assets/habilidades/mobile/coresM.svg";
import UseMedia from "../Hooks/UseMedia";

const Habilidades = () => {
  const mobile = UseMedia("(max-width: 40rem)");

  return (
    <section className={styles.habilidades}>
      <h1 className={mobile ? styles.h1Mobile : ""}>HABILIDADES</h1>
      <h6 className={mobile ? styles.h6Mobile : ""}>Desenvolvimento</h6>
      <div className={mobile ? styles.boxDevMobile : styles.boxDev}>
        <div className={styles.principais}>
          <div className={styles.react}>
            <img src={react} alt="react" />
            <h5>React</h5>
          </div>
          <div className={styles.js}>
            <img src={js} alt="JavaScript" />
            <h5>JavaScript</h5>
          </div>
          <div className={styles.html}>
            <img src={html} alt="HTML 5" />
            <h5>HTML 5</h5>
          </div>
          <div className={styles.css}>
            <img src={css} alt="CSS 3" />
            <h5>CSS 3</h5>
          </div>
          <div className={styles.wp}>
            <img src={wp} alt="WordPress" />
            <h5>WordPress</h5>
          </div>
          <div className={styles.php}>
            <img src={php} alt="PHP" />
            <h5>PHP</h5>
          </div>
        </div>
        <div className={styles.outros}>
          <div>
            <p>JQuery</p>
            <p>TypeScript</p>
          </div>
          <div>
            <p>Bootstrap</p>
            <p>SEO</p>
          </div>
          <div>
            <p>Ajax </p>
            <p>SharePoint</p>
          </div>
          <div>
            <p>Webpack</p>
            <p>Node.js </p>
          </div>
          <div>
            <p>SASS </p>
            <p>Git </p>
          </div>
          <div>
            <p>Gulp.js</p>
            <p>SQL </p>
          </div>
        </div>
      </div>

      <div
        className={
          mobile ? styles.boxDevShowMobile : styles.boxDevNotShowMobile
        }
      >
        <div className={styles.principaisMobile}>
          <div className={styles.tresPrimeiras}>
            <div className={styles.js}>
              <img src={jsM} alt="JavaScript" />
              <h5>JavaScript</h5>
            </div>
            <div className={styles.react}>
              <img src={reactM} alt="react" />
              <h5>React</h5>
            </div>
            <div className={styles.html}>
              <img src={htmlM} alt="HTML 5" />
              <h5>HTML 5</h5>
            </div>
          </div>
          <div className={styles.tresUltimas}>
            <div className={styles.css}>
              <img src={cssM} alt="CSS 3" />
              <h5>CSS 3</h5>
            </div>
            <div className={styles.wp}>
              <img src={wpM} alt="WordPress" />
              <h5>WordPress</h5>
            </div>
            <div className={styles.php}>
              <img src={phpM} alt="PHP" />
              <h5>PHP</h5>
            </div>
          </div>
          <div className={styles.outrosMobile}>
            <div>
              <p>JQuery</p>
              <p>TypeScript</p>
              <p>Bootstrap</p>
              <p>SEO</p>
              <p>Ajax </p>
              <p>SharePoint</p>
            </div>
            <div className={styles.outros2Mobile}>
              <p>Webpack</p>
              <p>Node.js </p>
              <p>SASS </p>
              <p>Git </p>
              <p>Gulp.js</p>
              <p>SQL </p>
            </div>
          </div>
        </div>
      </div>
      <h6 className={mobile ? styles.h6Mobile : ""}>Design</h6>
      <div className={mobile ? styles.boxDesMobile : styles.boxDes}>
        <div className={mobile ? styles.uxuiM : styles.uxui}>
          <img src={mobile ? uxuiM : uxui} alt="UX-UI" />
          <h5>UX / UI</h5>
        </div>
        <div className={mobile ? styles.figmaM : styles.figma}>
          <img src={mobile ? figmaM : figma} alt="Figma" />
          <h5>Figma</h5>
        </div>
        <div className={mobile ? styles.coresM : styles.cores}>
          <img src={mobile ? coresM : cores} alt="Cores" />
          <h5>Cores</h5>
        </div>
        <div className={mobile ? styles.tipoM : styles.tipo}>
          <img src={mobile ? tipoM : tipo} alt="Tipografia" />
          <h5>Tipografia</h5>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;

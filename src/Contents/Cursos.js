import React from "react";
import styles from "./Cursos.module.css";
import UseMedia from "../Hooks/UseMedia";
import origamid from "../Assets/cursos/origamid.svg";
import origamidM from "../Assets/cursos/mobile/origamidM.svg";
import udemy from "../Assets/cursos/udemy.svg";
import udemyM from "../Assets/cursos/mobile/udemyM.svg";
import code from "../Assets/cursos/code.svg";
import codeM from "../Assets/cursos/mobile/codeM.svg";

const Cursos = () => {
  const mobile = UseMedia("(max-width: 40rem)");
  const [accordeon, setAccordeon] = React.useState(false);
  const [accordeonDes, setAccordeonDes] = React.useState(false);

  return (
    <section className={styles.cursos}>
      <h1 className={mobile ? styles.h1Mobile : ""}>CURSOS</h1>
      <h6 className={mobile ? styles.h6Mobile : ""}>Desenvolvimento</h6>

      {/* primeiro box desktop */}
      <div
        className={mobile ? styles.boxNotShow : styles.box1}
        onClick={(e) => {
          e.preventDefault();
          window.open(
            "https://www.origamid.com/certificate/76dd2043/",
            "_blank"
          );
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
          window.open(
            "https://www.origamid.com/certificate/76dd2043/",
            "_blank"
          );
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
          window.open(
            "https://www.origamid.com/certificate/280d68ea/",
            "_blank"
          );
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
          window.open(
            "https://www.origamid.com/certificate/280d68ea/",
            "_blank"
          );
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
          window.open(
            "https://www.origamid.com/certificate/5efe5b97/",
            "_blank"
          );
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
          window.open(
            "https://www.origamid.com/certificate/5efe5b97/",
            "_blank"
          );
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
          window.open(
            "https://www.udemy.com/certificate/UC-466c2879-3626-4a74-933e-ca32b6dfd10f/",
            "_blank"
          );
        }}
        title="Understanding TypeScript 2021 Edition"
      >
        <div className={styles.logoFaculdade}>
          <img src={udemy} alt="Udemy" />
        </div>
        <div className={styles.infoFaculdade}>
          <h3>Understanding TypeScript - 2021...</h3>
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
          window.open(
            "https://www.udemy.com/certificate/UC-466c2879-3626-4a74-933e-ca32b6dfd10f/",
            "_blank"
          );
        }}
        title="Understanding TypeScript 2021 Edition"
      >
        <h3>Understanding TypeScript - 2021 Edition</h3>
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
            window.open(
              "https://www.origamid.com/certificate/9d20ae29/",
              "_blank"
            );
          }}
        >
          <div className={styles.logoFaculdade}>
            <img src={origamid} alt="Origamid" />
          </div>
          <div className={styles.infoFaculdade}>
            <h3>Automação Front End com NPM</h3>
            <div className={styles.dataFaculdade}>
              <p className={styles.nome}>Origamid</p>
              <p className={styles.tempo}>08 horas</p>
              <p className={styles.data}>05/2021</p>
            </div>
          </div>
        </div>

        {/* quinto box mobile */}
        <div
          className={mobile ? styles.box1Mobile : styles.boxNotShow}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.origamid.com/certificate/9d20ae29/",
              "_blank"
            );
          }}
        >
          <h3>Automação Front End com NPM</h3>
          <div className={styles.imgEdados}>
            <img src={origamidM} alt="Origamid" />
            <div className={styles.dados}>
              <div className={styles.inline}>
                <p className={styles.nome}>Origamid</p>
                <p className={styles.data}>05/2021</p>
              </div>
              <p className={styles.tempo}>08 horas</p>
            </div>
          </div>
        </div>

        {/* sexto box desktop */}
        <div
          className={mobile ? styles.boxNotShow : styles.box4}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.udemy.com/certificate/UC-fa835458-6835-4c24-a953-b6856bf654fb/",
              "_blank"
            );
          }}
          title="Microsoft SharePoint para Administradores"
        >
          <div className={styles.logoFaculdade}>
            <img src={udemy} alt="Udemy" />
          </div>
          <div className={styles.infoFaculdade}>
            <h3>Microsoft SharePoint para Admi...</h3>
            <div className={styles.dataFaculdade}>
              <p className={styles.nome}>Udemy</p>
              <p className={styles.tempo}>21,5 horas</p>
              <p className={styles.data}>04/2021</p>
            </div>
          </div>
        </div>

        {/* sexto box mobile */}
        <div
          className={mobile ? styles.box1Mobile : styles.boxNotShow}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.udemy.com/certificate/UC-fa835458-6835-4c24-a953-b6856bf654fb/",
              "_blank"
            );
          }}
          title="Microsoft SharePoint para Administradores"
        >
          <h3>Microsoft SharePoint para Administradores</h3>
          <div className={styles.imgEdados}>
            <img src={udemyM} alt="Udemy" />
            <div className={styles.dados}>
              <div className={styles.inline}>
                <p className={styles.nome}>Udemy</p>
                <p className={styles.data}>04/2021</p>
              </div>
              <p className={styles.tempo}>21,5 horas</p>
            </div>
          </div>
        </div>

        {/* setimo box desktop */}
        <div
          className={mobile ? styles.boxNotShow : styles.box3}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.origamid.com/certificate/087a7d94/",
              "_blank"
            );
          }}
        >
          <div className={styles.logoFaculdade}>
            <img src={origamid} alt="Origamid" />
          </div>
          <div className={styles.infoFaculdade}>
            <h3>CSS com SASS </h3>
            <div className={styles.dataFaculdade}>
              <p className={styles.nome}>Origamid</p>
              <p className={styles.tempo}>12 horas</p>
              <p className={styles.data}>03/2021</p>
            </div>
          </div>
        </div>

        {/* setimo box mobile */}
        <div
          className={mobile ? styles.box1Mobile : styles.boxNotShow}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.origamid.com/certificate/087a7d94/",
              "_blank"
            );
          }}
        >
          <h3>CSS com SASS </h3>
          <div className={styles.imgEdados}>
            <img src={origamidM} alt="Origamid" />
            <div className={styles.dados}>
              <div className={styles.inline}>
                <p className={styles.nome}>Origamid</p>
                <p className={styles.data}>03/2021</p>
              </div>
              <p className={styles.tempo}>12 horas</p>
            </div>
          </div>
        </div>

        {/* oitavo box desktop */}
        <div
          className={mobile ? styles.boxNotShow : styles.box4}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.origamid.com/certificate/13399574/",
              "_blank"
            );
          }}
        >
          <div className={styles.logoFaculdade}>
            <img src={origamid} alt="Udemy" />
          </div>
          <div className={styles.infoFaculdade}>
            <h3>WordPress Como CMS </h3>
            <div className={styles.dataFaculdade}>
              <p className={styles.nome}>Udemy</p>
              <p className={styles.tempo}>18 horas</p>
              <p className={styles.data}>12/2020</p>
            </div>
          </div>
        </div>

        {/* oitavo box mobile */}
        <div
          className={mobile ? styles.box1Mobile : styles.boxNotShow}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.origamid.com/certificate/13399574/",
              "_blank"
            );
          }}
        >
          <h3>WordPress Como CMS </h3>
          <div className={styles.imgEdados}>
            <img src={origamidM} alt="Udemy" />
            <div className={styles.dados}>
              <div className={styles.inline}>
                <p className={styles.nome}>Udemy</p>
                <p className={styles.data}>12/2020</p>
              </div>
              <p className={styles.tempo}>18 horas</p>
            </div>
          </div>
        </div>

        {/* nono box desktop */}
        <div
          className={mobile ? styles.boxNotShow : styles.box3}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.origamid.com/certificate/2fddd138/",
              "_blank"
            );
          }}
        >
          <div className={styles.logoFaculdade}>
            <img src={origamid} alt="Origamid" />
          </div>
          <div className={styles.infoFaculdade}>
            <h3>WooCommerce Como CMS</h3>
            <div className={styles.dataFaculdade}>
              <p className={styles.nome}>Origamid</p>
              <p className={styles.tempo}>20 horas</p>
              <p className={styles.data}>12/2020</p>
            </div>
          </div>
        </div>

        {/* nono box mobile */}
        <div
          className={mobile ? styles.box1Mobile : styles.boxNotShow}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.origamid.com/certificate/2fddd138/",
              "_blank"
            );
          }}
        >
          <h3>WooCommerce Como CMS</h3>
          <div className={styles.imgEdados}>
            <img src={origamidM} alt="Origamid" />
            <div className={styles.dados}>
              <div className={styles.inline}>
                <p className={styles.nome}>Origamid</p>
                <p className={styles.data}>12/202</p>
              </div>
              <p className={styles.tempo}>20 horas</p>
            </div>
          </div>
        </div>

        {/* decimo box desktop */}
        <div
          className={mobile ? styles.boxNotShow : styles.box4}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.udemy.com/certificate/UC-b500c752-b3af-4b06-ab6e-efdbc2409406/",
              "_blank"
            );
          }}
          title="Wordpress for Beginners Master Wordpress Quickly"
        >
          <div className={styles.logoFaculdade}>
            <img src={udemy} alt="Udemy" />
          </div>
          <div className={styles.infoFaculdade}>
            <h3>Wordpress for Beginners Master...</h3>
            <div className={styles.dataFaculdade}>
              <p className={styles.nome}>Udemy</p>
              <p className={styles.tempo}>09 horas</p>
              <p className={styles.data}>10/2020</p>
            </div>
          </div>
        </div>

        {/* decimo box mobile */}
        <div
          className={mobile ? styles.box1Mobile : styles.boxNotShow}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.udemy.com/certificate/UC-b500c752-b3af-4b06-ab6e-efdbc2409406/",
              "_blank"
            );
          }}
          title="Wordpress for Beginners Master Wordpress Quickly"
        >
          <h3>Wordpress for Beginners - Master Wordpress Quickly</h3>
          <div className={styles.imgEdados}>
            <img src={udemyM} alt="Udemy" />
            <div className={styles.dados}>
              <div className={styles.inline}>
                <p className={styles.nome}>Udemy</p>
                <p className={styles.data}>10/2020</p>
              </div>
              <p className={styles.tempo}>09 horas</p>
            </div>
          </div>
        </div>

        {/* decimo primeiro box desktop */}
        <div
          className={mobile ? styles.boxNotShow : styles.box3}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.udemy.com/certificate/UC-12e4067e-444d-4039-9945-beda0ecb2f29/",
              "_blank"
            );
          }}
          title="Curso Desenvolvedor Web Completo + 10 projetos"
        >
          <div className={styles.logoFaculdade}>
            <img src={udemy} alt="Udemy" />
          </div>
          <div className={styles.infoFaculdade}>
            <h3>Curso Desenvolvedor Web Compl...</h3>
            <div className={styles.dataFaculdade}>
              <p className={styles.nome}>Udemy</p>
              <p className={styles.tempo}>52 horas</p>
              <p className={styles.data}>10/2020</p>
            </div>
          </div>
        </div>

        {/* decimo primeiro box mobile */}
        <div
          className={mobile ? styles.box1Mobile : styles.boxNotShow}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.udemy.com/certificate/UC-12e4067e-444d-4039-9945-beda0ecb2f29/",
              "_blank"
            );
          }}
          title="Curso Desenvolvedor Web Completo + 10 projetos"
        >
          <h3>Curso Desenvolvedor Web Completo + 10 projetos</h3>
          <div className={styles.imgEdados}>
            <img src={udemyM} alt="Udemy" />
            <div className={styles.dados}>
              <div className={styles.inline}>
                <p className={styles.nome}>Udemy</p>
                <p className={styles.data}>10/2020</p>
              </div>
              <p className={styles.tempo}>52 horas</p>
            </div>
          </div>
        </div>
      </span>
      {/* aqui termina o span */}

      <h5
        className={accordeon ? styles.verTodosUp : styles.verTodos}
        onClick={() => setAccordeon(!accordeon)}
      >
        {accordeon ? "Ver menos" : "Ver todos"}
      </h5>
      <h6 className={mobile ? styles.h6MobileDesi : ""}>Design</h6>

      {/* primeiro box desktop */}
      <div
        className={mobile ? styles.boxNotShow : styles.box1}
        onClick={(e) => {
          e.preventDefault();
          window.open(
            "https://www.origamid.com/certificate/cdaa758b/",
            "_blank"
          );
        }}
      >
        <div className={styles.logoFaculdade}>
          <img src={origamid} alt="Origamid" />
        </div>
        <div className={styles.infoFaculdade}>
          <h3>UI design Avançado</h3>
          <div className={styles.dataFaculdade}>
            <p className={styles.nome}>Origamid</p>
            <p className={styles.tempo}>30 horas</p>
            <p className={styles.data}>12/2020</p>
          </div>
        </div>
      </div>

      {/* primeiro box mobile */}
      <div
        className={mobile ? styles.box1Mobile : styles.boxNotShow}
        onClick={(e) => {
          e.preventDefault();
          window.open(
            "https://www.origamid.com/certificate/cdaa758b/",
            "_blank"
          );
        }}
      >
        <h3>UI design Avançado</h3>
        <div className={styles.imgEdados}>
          <img src={origamidM} alt="Origamid" />
          <div className={styles.dados}>
            <div className={styles.inline}>
              <p className={styles.nome}>Origamid</p>
              <p className={styles.data}>12/2020</p>
            </div>
            <p className={styles.tempo}>30 horas</p>
          </div>
        </div>
      </div>

      {/* segundo box desktop */}
      <div
        className={mobile ? styles.boxNotShow : styles.box2}
        onClick={(e) => {
          e.preventDefault();
          window.open(
            "https://www.origamid.com/certificate/892d21ef/",
            "_blank"
          );
        }}
      >
        <div className={styles.logoFaculdade}>
          <img src={origamid} alt="Origamid" />
        </div>
        <div className={styles.infoFaculdade}>
          <h3>UX Design Heurísticas</h3>
          <div className={styles.dataFaculdade}>
            <p className={styles.nome}>Origamid</p>
            <p className={styles.tempo}>16 horas</p>
            <p className={styles.data}>03/2021</p>
          </div>
        </div>
      </div>

      {/* segundo box mobile */}
      <div
        className={mobile ? styles.box1Mobile : styles.boxNotShow}
        onClick={(e) => {
          e.preventDefault();
          window.open(
            "https://www.origamid.com/certificate/892d21ef/",
            "_blank"
          );
        }}
      >
        <h3>UX Design Heurísticas</h3>
        <div className={styles.imgEdados}>
          <img src={origamidM} alt="Origamid" />
          <div className={styles.dados}>
            <div className={styles.inline}>
              <p className={styles.nome}>Origamid</p>
              <p className={styles.data}>03/2021</p>
            </div>
            <p className={styles.tempo}>16 horas</p>
          </div>
        </div>
      </div>

      {/* terceiro box desktop */}
      <div
        className={mobile ? styles.boxNotShow : styles.box3}
        onClick={(e) => {
          e.preventDefault();
          window.open(
            "https://www.origamid.com/certificate/56a192d0/",
            "_blank"
          );
        }}
      >
        <div className={styles.logoFaculdade}>
          <img src={origamid} alt="Origamid" />
        </div>
        <div className={styles.infoFaculdade}>
          <h3>Tipografia Avançada</h3>
          <div className={styles.dataFaculdade}>
            <p className={styles.nome}>Origamid</p>
            <p className={styles.tempo}>16 horas</p>
            <p className={styles.data}>03/2021</p>
          </div>
        </div>
      </div>

      {/* terceiro box mobile */}
      <div
        className={mobile ? styles.box1Mobile : styles.boxNotShow}
        onClick={(e) => {
          e.preventDefault();
          window.open(
            "https://www.origamid.com/certificate/56a192d0/",
            "_blank"
          );
        }}
      >
        <h3>Tipografia Avançada</h3>
        <div className={styles.imgEdados}>
          <img src={origamidM} alt="Origamid" />
          <div className={styles.dados}>
            <div className={styles.inline}>
              <p className={styles.nome}>Origamid</p>
              <p className={styles.data}>03/2021</p>
            </div>
            <p className={styles.tempo}>16 horas</p>
          </div>
        </div>
      </div>

      {/* quarto box desktop */}
      <div
        className={mobile ? styles.boxNotShow : styles.box4}
        onClick={(e) => {
          e.preventDefault();
          window.open(
            "https://www.codecademy.com/profiles/tuliochavess/certificates/0a6884fad1dbf4afe5df084d2ec1e7c3",
            "_blank"
          );
        }}
      >
        <div className={styles.logoFaculdade}>
          <img src={code} alt="Codecademy" />
        </div>
        <div className={styles.infoFaculdade}>
          <h3>Learn Color Design Course</h3>
          <div className={styles.dataFaculdade}>
            <p className={styles.nome}>Codecademy</p>
            <p className={styles.tempo}>03 horas</p>
            <p className={styles.data}>08/2021</p>
          </div>
        </div>
      </div>

      {/* quarto box mobile */}
      <div
        className={mobile ? styles.box1Mobile : styles.boxNotShow}
        onClick={(e) => {
          e.preventDefault();
          window.open(
            "https://www.codecademy.com/profiles/tuliochavess/certificates/0a6884fad1dbf4afe5df084d2ec1e7c3",
            "_blank"
          );
        }}
      >
        <h3>Learn Color Design Course</h3>
        <div className={styles.imgEdados}>
          <img src={codeM} alt="Udemy" />
          <div className={styles.dados}>
            <div className={styles.inline}>
              <p className={styles.nome}>Codecademy</p>
              <p className={styles.data}>08/2021</p>
            </div>
            <p className={styles.tempo}>03 horas</p>
          </div>
        </div>
      </div>

      <span
        className={
          accordeonDes ? styles.accordeonShow : styles.accordeonDontShow
        }
      >
        {/* quinto box desktop */}
        <div
          className={mobile ? styles.boxNotShow : styles.box3}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.udemy.com/certificate/UC-2a26a6db-dd68-4e0b-ad9a-008be0c10729/",
              "_blank"
            );
          }}
        >
          <div className={styles.logoFaculdade}>
            <img src={udemy} alt="Udemy" />
          </div>
          <div className={styles.infoFaculdade}>
            <h3>Learn Figma UI/UX Design Essenti...</h3>
            <div className={styles.dataFaculdade}>
              <p className={styles.nome}>Udemy</p>
              <p className={styles.tempo}>04 horas</p>
              <p className={styles.data}>08/2020</p>
            </div>
          </div>
        </div>

        {/* quinto box mobile */}
        <div
          className={mobile ? styles.box1Mobile : styles.boxNotShow}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.udemy.com/certificate/UC-2a26a6db-dd68-4e0b-ad9a-008be0c10729/",
              "_blank"
            );
          }}
        >
          <h3>Learn Figma UI/UX Design Essential Training</h3>
          <div className={styles.imgEdados}>
            <img src={udemyM} alt="Udemy" />
            <div className={styles.dados}>
              <div className={styles.inline}>
                <p className={styles.nome}>Udemy</p>
                <p className={styles.data}>08/2020</p>
              </div>
              <p className={styles.tempo}>04 horas</p>
            </div>
          </div>
        </div>
      </span>

      <h5
        className={
          accordeonDes ? styles.verTodosUltimoUp : styles.verTodosUltimo
        }
        onClick={() => setAccordeonDes(!accordeonDes)}
      >
        {accordeonDes ? "Ver menos" : "Ver todos"}
      </h5>
    </section>
  );
};

export default Cursos;

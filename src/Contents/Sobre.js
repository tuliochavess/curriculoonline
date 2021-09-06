import React from "react";
import styles from "./Sobre.module.css";
import whatsapp from "../Assets/whatsapp-square.svg";
import email from "../Assets/envelope.svg";
import linkedin from "../Assets/linkedin.svg";
import github from "../Assets/github-square.svg";
import curriculo from "../Assets/file-user.svg";
import UseMedia from "../Hooks/UseMedia";

const Sobre = () => {
  const mobile = UseMedia("(max-width: 40rem)");
  const [accordeon, setAccordeon] = React.useState(true);

  return (
    <section className={styles.sobre}>
      <div className={mobile ? styles.firstBoxMobile : styles.firstBox}>
        <h1 className={mobile ? styles.h1Mobile : ""}>SOBRE MIM</h1>
        <div className={mobile ? styles.textoMobile : styles.textoDesktop}>
          <p className={styles.primeroP}>
            Explorei a área de tecnologia até descobrir o que realmente gosto:
            Códigos que se convertem em interfaces intuitivas e funcionais.
          </p>
          <p>
            Sou o doido da customização, fissurado por entender como as coisas
            funcionam. Gosto de testar, errar e aprender, esse ciclo infinito
            ensinado em Dark Souls que sempre aprimora minhas habilidades.
          </p>
          <span
            className={
              mobile && accordeon
                ? styles.accordeonShow
                : styles.accordeonDontShow
            }
          >
            <p className={styles.fixMargin1}>
              Quero crescer e me destacar no mundo web, colocar em prática todo
              o conhecimento que venho consumindo avidamente nos últimos meses.
            </p>
            <p className={styles.fixMargin}>
              Onde eu estiver, contribuo com meu dinamismo e bom humor, e uma
              disposição fora do comum para investigar os problemas e ir além na
              proposta de soluções.
            </p>
          </span>
          <h6
            className={accordeon ? styles.lerTudoUp : styles.lerTudo}
            onClick={() => setAccordeon(!accordeon)}
          >
            {accordeon ? "Ler tudo" : "Ler menos"}
          </h6>
        </div>
        <div className={mobile ? styles.idiomaMobile : styles.idioma}>
          <h6>Idiomas</h6>
          <p className={styles.usa}>Inglês: Fluente</p>
          <p className={styles.br}>Português: Nativo</p>
        </div>
        <div className={mobile ? styles.linksMobile : styles.links}>
          <a
            href="https://api.whatsapp.com/send?phone=5531997266369&text=Me%20manda%20uma%20mensagem"
            target="blank"
          >
            <img src={whatsapp} alt="whatsapp" />
            (31) 9 9726-6369
          </a>
          <a href="mailto: tuliochavess@gmail.com" target="blank">
            <img src={email} alt="email" />
            tuliochavess@gmail.com
          </a>
          <a
            href="https://drive.google.com/file/d/12n4RbXTZfdHL9ztw-OIG-diSpVDR9yXP/view?usp=sharing"
            target="blank"
          >
            <img src={curriculo} alt="curriculo" />
            Currículo
          </a>
          <a href="https://github.com/tuliochavess" target="blank">
            <img src={github} alt="github" />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/t%C3%BAlio-chaves-8b75b378/"
            target="blank"
          >
            <img src={linkedin} alt="linkedin" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className={mobile ? styles.textoOriginal : styles.secondBox}>
        <p>
          Explorei a área de tecnologia até descobrir o que realmente gosto:
          Códigos que se convertem em interfaces intuitivas e funcionais.
        </p>
        <p>
          Sou o doido da customização, fissurado por entender como as coisas
          funcionam. Gosto de testar, errar e aprender, esse ciclo infinito
          ensinado em Dark Souls que sempre aprimora minhas habilidades.
        </p>
        <p>
          Quero crescer e me destacar no mundo web, colocar em prática todo o
          conhecimento que venho consumindo avidamente nos últimos meses.
        </p>
        <p>
          Onde eu estiver, contribuo com meu dinamismo e bom humor, e uma
          disposição fora do comum para investigar os problemas e ir além na
          proposta de soluções.
        </p>
      </div>
    </section>
  );
};

export default Sobre;

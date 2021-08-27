import React from "react";
import styles from "./Home.module.css";
import foto from "../Assets/foto.svg";
import fotoMobile from "../Assets/foto mobile.svg";
import whatsapp from "../Assets/whatsapp-square.svg";
import email from "../Assets/envelope.svg";
import linkedin from "../Assets/linkedin.svg";
import github from "../Assets/github-square.svg";
import curriculo from "../Assets/file-user.svg";
import Sobre from "../Contents/Sobre";
import UseMedia from "../Hooks/UseMedia";
import Habilidades from "../Contents/Habilidades";
import Formacao from "../Contents/Formacao";
import Cursos from "../Contents/Cursos";
import Historico from "../Contents/Historico";

const Home = () => {
  const mobile = UseMedia("(max-width: 40rem)");

  return (
    <>
      <section className={styles.home}>
        <div
          className={mobile ? styles.apresentacaoMobile : styles.apresentacao}
        >
          <div className={styles.foto}>
            <img src={mobile ? fotoMobile : foto} alt="Foto Túlio Chaves" />
          </div>
          <div className={mobile ? styles.conteudoMobile : styles.conteudo}>
            <p>Olá, me chamo</p>
            <h1>Túlio Chaves</h1>
            <p>FrontEnd Developer / Web Designer</p>
          </div>
          <div className={mobile ? styles.linksMobile : styles.links}>
            <a
              href="https://api.whatsapp.com/send?phone=5531997266369&text=Me%20manda%20uma%20mensagem"
              target="blank"
            >
              <img src={whatsapp} alt="whatsapp" />
            </a>
            <a href="mailto: tuliochavess@gmail.com" target="blank">
              <img src={email} alt="email" />
            </a>
            <a
              href="https://www.linkedin.com/in/t%C3%BAlio-chaves-8b75b378/"
              target="blank"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/tuliochavess" target="blank">
              <img src={github} alt="github" />
            </a>
            <a href="https://www.google.com/" target="blank">
              <img src={curriculo} alt="curriculo" />
            </a>
          </div>
        </div>
      </section>
      <Sobre />
      <Habilidades />
      <Formacao />
      <Cursos />
      <Historico />
    </>
  );
};

export default Home;

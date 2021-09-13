import React from "react";
import styles from "./Contato.module.css";

const Contato = () => {
  return (
    <section className={styles.contato}>
      <h1>Contato</h1>
      <h4>Contato Direto</h4>

      <a
        href="mailto: tuliochavess@gmail.com"
        target="blank"
        className={styles.fisrtA}
      >
        Me envie um e-mail
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5531997266369&text=Me%20manda%20uma%20mensagem"
        target="blank"
        className={styles.secondA}
      >
        Me chame no whatsapp
      </a>

      <h4>Informações de contato</h4>

      <div className={styles.firstBox}>
        <a
          href="https://tuliochavess.github.io/"
          target="blank"
          className={styles.user}
        >
          Túlio Chaves de Souza
        </a>
        <a
          href="https://goo.gl/maps/FkfJEjbB5RPtiMyA6"
          target="blank"
          className={styles.adress}
        >
          Rua Coronel Pres - Sagrada Família - BH
        </a>
        <a
          href="mailto: tuliochavess@gmail.com"
          className={styles.email}
          target="blank"
        >
          tuliochavess@gmail.com
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5531997266369&text=Me%20manda%20uma%20mensagem"
          className={styles.whatsapp}
          target="blank"
        >
          (31) 9 9726-6369
        </a>
      </div>
      <div className={styles.secondBox}>
        <a
          href="https://drive.google.com/file/d/1_4k-q9TW9Bvh9X9fb2Zlbf1kevz9G_89/view?usp=sharing"
          className={styles.curriculo}
          target="blank"
        >
          Currículo
        </a>
        <a
          href="https://github.com/tuliochavess"
          className={styles.github}
          target="blank"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/t%C3%BAlio-chaves-8b75b378/"
          className={styles.linkedin}
          target="blank"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contato;

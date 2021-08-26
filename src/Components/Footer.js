import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../Assets/FrontEnd Developer.svg";
import logoMobile from "../Assets/FrontEnd Developer Mobile.svg";
import UseMedia from "../Hooks/UseMedia";

const Footer = () => {
  const mobile = UseMedia("(max-width: 40rem)");

  return (
    <footer className={mobile ? styles.footerMobile : styles.footer}>
      <Link to="/">
        <img
          className={mobile ? styles.logoMobile : styles.logo}
          src={mobile ? logoMobile : logo}
          alt="Túlio Chaves"
        />
      </Link>
      <div className={mobile ? styles.firtsBoxMobile : styles.first_box}>
        <a
          href="https://api.whatsapp.com/send?phone=5531997266369&text=Me%20manda%20uma%20mensagem"
          className={styles.whatsapp}
          target="blank"
        >
          (31) 9 9726-6369
        </a>
        <a
          href="mailto: tuliochavess@gmail.com"
          className={styles.email}
          target="blank"
        >
          tuliochavess@gmail.com
        </a>
      </div>
      <div className={mobile ? styles.secondBoxMobile : styles.second_box}>
        <a
          href="https://www.google.com/"
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
    </footer>
  );
};

export default Footer;

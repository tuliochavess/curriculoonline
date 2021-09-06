import React from "react";
import styles from "./Historico.module.css";
import symplicity from "../Assets/experiencia/symplicity.svg";
import quantum from "../Assets/experiencia/quantum.svg";
import evercode from "../Assets/experiencia/evercode.svg";
import buca from "../Assets/experiencia/buca.svg";
import planetfone from "../Assets/experiencia/planetfone.svg";
import bonsplans from "../Assets/experiencia/bonsplans.svg";
import mastermaq from "../Assets/experiencia/mastermaq.svg";
import santo from "../Assets/experiencia/santo.svg";

const Historico = () => {
  const [accordeon, setAccordeon] = React.useState(false);

  return (
    <section className={styles.historico}>
      <h1>EXPERIÊNCIA</h1>

      <div
        className={styles.box1}
        title="Estagiário de desenvolvimento frontend, trabalhando diretamente com o
          time americano nas demandas dos produtos da empresa."
      >
        <img src={symplicity} alt="symplicity" />
        <h2>Estagiário Desenvolvedor Front End</h2>
        <p>
          Estagiário de desenvolvimento frontend, trabalhando diretamente com o
          time americano nas demandas dos produtos da empresa.
        </p>
        <p className={styles.data}>06/2021 - atual</p>
      </div>

      <div
        className={styles.box2}
        title="Estagiário de desenvolvimento frontend, responsável pela intranet e
          pelas demandas web da empresa."
      >
        <img src={quantum} alt="Quantum Web" />
        <h2>Estagiário Desenvolvedor Front End</h2>
        <p>
          Estagiário de desenvolvimento frontend, responsável pela intranet e
          pelas demandas web da empresa.
        </p>
        <p className={styles.data}>04/2021 - 06/2021</p>
      </div>

      <div
        className={styles.box1}
        title="Estagiário responsável por criação de interfaces voltadas para usuário, desenvolvimento e manutenção de sites
em Wordpress e Woocommerce."
      >
        <img src={evercode} alt="EverCode Web" />
        <h2>Estagiário de Desenvolvimento Web</h2>
        <p>
          Estagiário responsável por criação de interfaces voltadas para
          usuário, desenvolvimento e manutenção de sites em Wordpress ...
        </p>
        <p className={styles.data}>12/2020 - 04/2021</p>
      </div>

      <div
        className={styles.box2}
        title="Atuação como barman mixologista, e liderança dos auxiliares de bar. Apoio no gerenciamento das rotinas do bar;
controle de estoque, distribuição de tarefas, organização do espaço, e atendimento ao cliente. O Bucaneiro
representa uma fase exploratória de minha vida, onde posso ser eu mesmo, exercer um hobby de forma
profissional, e expandir minhas habilidades de relacionamento interpessoal."
      >
        <img src={buca} alt="Bucaneiro" />
        <h2>Chefe de Bar e Mixologista</h2>
        <p>
          Atuação como barman mixologista, e liderança dos auxiliares de bar.
          Apoio no gerenciamento das rotinas do bar, controle de estoque...
        </p>
        <p className={styles.data}>08/2017 - 01/2021</p>
      </div>

      <span
        className={accordeon ? styles.accordeonShow : styles.accordeonDontShow}
      >
        <div
          className={styles.box1}
          title="Responsável pelo suporte de mais de 500 clientes, implementação e manutenção nos produtos de telefonia da
empresa montados na plataforma Asterisk, na hospedagem dos sites, nos servidores de email, arquivo, telefonia,
etc."
        >
          <img src={planetfone} alt="Planetfone" />
          <h2>Estagiário de Suporte</h2>
          <p>
            Responsável pelo suporte de mais de 500 clientes, implementação e
            manutenção nos produtos de telefonia da empresa montados...
          </p>
          <p className={styles.data}>04/2016 - 02/2017</p>
        </div>

        <div
          className={styles.box2}
          title="Startup Marketplace de anúncio e venda de artigos moda, arte e decoração dentro de BH e região. Fui fundador
e responsável pelo comercial e gestão do operacional da empresa."
        >
          <img src={bonsplans} alt="Bonsplans" />
          <h2>Chief Operating Officer</h2>
          <p>
            Startup Marketplace de anúncio e venda de artigos moda, arte e
            decoração dentro de BH e região. Fui fundador e responsável...
          </p>
          <p className={styles.data}>02/2015 - 03/2026</p>
        </div>

        <div
          className={styles.box1}
          title="Técnico focado na manutenção dos equipamentos, gestão da equipe de TI, manutenção da rede e dos servidores
da empresa, implementação de soluções para otimização do rendimento dos usuários, e soluções preventivas."
        >
          <img src={mastermaq} alt="Mastermaq" />
          <h2>Técnico de Informática</h2>
          <p>
            Técnico focado na manutenção dos equipamentos, gestão da equipe de
            TI, manutenção da rede e dos servidores da empresa, implementa...
          </p>
          <p className={styles.data}>06/2014 - 02/2015</p>
        </div>

        <div
          className={styles.box2}
          title="Suporte a alunos e professores nos laboratórios de informática da unidade, zelando pelos equipamentos e
realizando manutenções técnicas relativas a Hardware e Software."
        >
          <img src={santo} alt="Colégio Santo Agostinho" />
          <h2>Estagiário de TI</h2>
          <p>
            Suporte a alunos e professores nos laboratórios de informática da
            unidade, zelando pelos equipamentos e realizando manutenções ...
          </p>
          <p className={styles.data}>06/2013 - 06/2024</p>
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

export default Historico;

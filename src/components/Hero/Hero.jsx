// src/components/Hero/Hero.jsx

import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.hero__container}>
        <h1 className={styles.hero__title}>Lucas Picollo</h1>
        <section className={styles.hero__intro}>
          <img src="/assets/foto_titulo.png" className={styles.hero__profile_photo} alt="Foto de Lucas Picollo" />
          <div className={styles.hero__social_links}>
            <a className={styles.social_links__button} href="https://www.instagram.com/marciijunior/" target="_blank" rel="noopener noreferrer">
              <img className={styles.social_links__icon} src="/assets/instagram.png" alt="Ícone do Instagram" />
              Instagram
            </a>
            <a className={styles.social_links__button} href="https://www.linkedin.com/in/marciijunior" target="_blank" rel="noopener noreferrer">
              <img className={styles.social_links__icon} src="/assets/linkedin.png" alt="Ícone do Linkedin" />
              Linkedin
            </a>
            <a className={styles.social_links__button} href="https://github.com/marciijunior">
              <img className={styles.social_links__icon} src="/assets/youtube.png" alt="Ícone do YouTube" />
              YouTube
            </a>
          </div>
        </section>
        <section className={styles.about_me}>
          <h2 className={styles.about_me__title}>Sobre mim</h2>
          <p className={styles.about_me__text}>
            Meu nome é Lucas Picollo, tenho 22 anos. Sou jornalista desde o início de 2025 e atuo na área desde junho de 2023. Comecei minha jornada profissional como estagiário no SBT Interior de Araçatuba, cidade onde nasci e fui criado. Ao fim do estágio, fui contratado e hoje sou videorrepórter pela emissora. Minha experiência no SBT abriu muitas portas em outros veículos de comunicação, como rádio e emissoras que transmitem futebol, esporte pelo qual sou apaixonado. Abaixo você acompanha trechos de cada um dos meus trabalhos.
          </p>
        </section>
      </div>
    </header>
  );
}

export default Hero;
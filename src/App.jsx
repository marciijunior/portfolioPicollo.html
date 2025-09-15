// src/App.jsx

import React from 'react';
import Hero from './components/Hero/Hero';
import WorkSection from './components/WorkSection/WorkSection';
import Footer from './components/Footer/Footer';
import styles from './App.module.css'; 

import './reset.css';
import './index.css';

const portfolioData = [
  {
    title: "SBT Interior",
    description: "Meus primeiros trabalhos como jornalista foram ainda durante meu estágio no SBT Interior, quando precisei substituir alguns repórteres. Fui contratado ao fim do estágio e hoje atuo como videorrepórter.",
    logoSrc: "/assets/img_sbt.png",
    isReversed: false,
    videos: [
      { url: "https://www.youtube.com/embed/ngpS6viP6OM?si=fn1xOUUq9QYJQ8bX&amp;start=80", title: "Reportagem Dengue", caption: "Birigui-SP inaugurou um serviço de atendimento para pacientes com sintomas de dengue devido ao aumento alarmante de casos." },
      { url: "https://www.youtube.com/embed/ui17vDskaqQ?si=MRZJ_DzO34uHHSBP&amp;start=29", title: "Reportagem Hospital do Amor", caption: "A cerimônia do sino no Hospital do Amor simboliza a vitória dos pacientes que completaram o tratamento contra o câncer." },
      { url: "https://www.youtube.com/embed/_rbBdrxzFUQ?si=k3X79L7mwKM3WUuW&amp;start=10", title: "Reportagem UNESP", caption: "A UNESP de Araçatuba promove uma campanha de prevenção ao câncer de boca, com avaliação bucal e orientações." }
    ]
  },
  {
    title: "SBT Nacional",
    description: "Um dos momentos mais marcantes foi quando tive a oportunidade de aparecer em rede nacional. Ver meu trabalho sendo compartilhado para todo o país reforçou minha paixão pelo jornalismo.",
    logoSrc: "/assets/img_sbt2.png",
    isReversed: true,
    videos: [
       { url: "https://www.youtube.com/embed/RiEi3WCU2y8?si=rIkTe_vqgi6kjyhf&amp;start=1339", title: "Reportagem SBT Agro", caption: "Matéria exibida em âmbito nacional no programa SBT Agro. (Reportagem no minuto 21:25)" },
       { url: "https://www.youtube.com/embed/2xr4TgWSDhA?si=Cre7e4Fs6lacm-Cm&amp;start=12", title: "Entrada ao vivo Primeiro Impacto", caption: "Entrada ao vivo para todo o Brasil no Primeiro Impacto para dar detalhes sobre o assassinato de um casal em Birigui." }
    ]
  },
  {
    title: "Cultura FM 95,5",
    description: "Trabalhei por quase um ano na rádio de maior audiência de Araçatuba, desempenhando funções como repórter, operador de som e apresentador de programas jornalísticos.",
    logoSrc: "/assets/img_sbt3.png",
    isReversed: false,
    videos: [
       { url: "https://www.youtube.com/embed/ANQyCC_MqdE?si=0jKCI_oeFlcAk_sf", title: "Reportagem Polícia Rodoviária", caption: "Reportagem sobre a operação de Ano Novo da Polícia Rodoviária, destacando o balanço de acidentes e infrações na região de Araçatuba." },
       { url: "https://www.youtube.com/embed/NojmSUxXJeg?si=gPbYPcr2AyD6BREF", title: "Transmissão Câmara Municipal", caption: "Retorno do programa de jornalismo com Marcos Serelepe para uma transmissão ao vivo da Câmara Municipal de Araçatuba." }
    ]
  },
  {
    title: "Federação Paulista de Futebol",
    description: "Por mais de um ano, fui comentarista esportivo oficial da Federação Paulista de Futebol durante os jogos da Associação Esportiva Araçatuba no Paulistão 2024 e 2025.",
    logoSrc: "/assets/img_sbt4.png",
    isReversed: true,
    videos: [
       { url: "https://www.youtube.com/embed/0hCu64m0vOA?si=dmvjcrl4XVpRTeGA", title: "Comentários Paulistão Sub-23", caption: "Análise da importância de um jogo decisivo para o Mauaense no Paulistão 2024 sub-23, segunda divisão." }
    ]
  }
];

function App() {
  return (
    <>
      <Hero />
      <main className={styles.portfolio_works}>
        {portfolioData.map((work, index) => (
          <WorkSection
            key={index}
            {...work}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
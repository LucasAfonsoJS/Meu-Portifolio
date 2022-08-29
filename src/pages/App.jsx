//import { useState } from 'react'

import "../style/Global.css";
import "../style/Header.css";
import "../style/Bem-vindo.css";
import "../style/Tecnologias.css";
import "../style/Sobre.css";
import "../style/Projetos.css";
import "../style/Footer.css";
import Header from "../components/header";
import Footer from "../components/footer";
import BemVindo from "../components/bem-vindo";
import Sobre from "../components/sobre";
import Projetos from "../components/projetos";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <BemVindo />
      <Sobre />
      <Projetos />
      <Footer />
    </>
  );
}

export default App;

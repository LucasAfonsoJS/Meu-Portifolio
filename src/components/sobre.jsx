import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import foto from "../imgs/foto-minha.png";
import ScrollReveal from "scrollreveal";
import axios from "axios";
import { useState, useEffect } from "react";


function Sobre() {
  const apiGit = "https://api.github.com/users/LucasAfonsoJS";

  const [user, setUser] = useState({name: '', avatar: ''});
  
  useEffect(() => {
    fetch(apiGit)
    .then(res => res.json())
    .then(data => setUser({
      name: data.name,
      avatar: data.avatar_url
    }))
    .catch(erro => {console.log(erro);})
  },[])
  
  return (
    <>
      <article id="sobre" className="sobre">
        <h2>Sobre</h2>
        <section className="sobre_container">
          <section className="sobre_mim">
            <h3>Lucas</h3>
            <p>
              Sou um Dev Front-end moro em tubarão sc, vou fazer 20 anos comecei
              em no começo de 2021. me cosidero uma pessoa muito persistente.
            </p>
            <p>
              As tecnologias que eu utilizo são Javascript, Typescript, React e
              styled components.
            </p>
          </section>

          <section className="sobre_imgs">
            <img src={user.avatar} alt="" />
            {/* <SiTypescript className="tyescript"/>
            <SiJavascript className="javascript"/>
            <SiStyledcomponents  className="styled-components"/>
            <SiHtml5 className="html"/>
            <SiCss3 className="css"/> */}
          </section>
        </section>
      </article>
    </>
  );
}
export default Sobre;

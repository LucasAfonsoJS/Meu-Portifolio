import Astronalta from "../imgs/astronalta.png";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import AOS from "aos";
import ScrollReveal from "scrollreveal";


function BemVindo() {

  
  
  return (
    <>
      <main className="main_fundo">
        <article className="main_container">
          <section className="main_container_aprentacao">
            <h2>
              Olá meu nome é <span>Lucas</span>
            </h2>
            <p className="item">
              Desenvolvedor Front-end, sempre procurando evoluir
            </p>
          </section>

          <figure className="main_container_astronauta">
            <img src={Astronalta} alt="" />
            <ul>
              <a
                href="https://www.linkedin.com/in/lucas-afonso-258621223/"
                target="_blank"
              >
                <BsLinkedin className="tamanho-dos-icones" />
              </a>
              <a
                href="https://www.instagram.com/lucasafonsofk/"
                target="_blank"
              >
                <BsInstagram className="tamanho-dos-icones" />
              </a>
              <a href="https://github.com/LucasAfonsoJS" target="_blank">
                <BsGithub className="tamanho-dos-icones" />
              </a>
            </ul>
          </figure>
        </article>
      </main>
    </>
  );
}
export default BemVindo;

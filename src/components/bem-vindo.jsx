import Astronalta from "../imgs/astronalta.png";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function BemVindo() {
  useEffect(() => {
    ScrollReveal({ reset: true }).reveal(".anima", {
      duration: 1000,
      origin: "left",
      distance: "60px",
    });
  }, []);

  return (
    <>
      <main className="main_fundo">
        <article className="main_container">
          <section className="main_container_aprentacao">
            <h2 className="anima">
              Olá meu nome é <span>Lucas</span>
            </h2>
            <p className="anima">
              Desenvolvedor Front-end, sempre procurando evoluir
            </p>
          </section>

          <figure className="main_container_astronauta anima">
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

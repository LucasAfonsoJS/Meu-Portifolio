import Container from "../assets/styled-components";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";

function Projetos() {
  return (
    <>
      <article className="fundo-projetos">
        <Container className="fundo_container">
          <section className="box-wraper">
            <section className="box-single">
              <h2>Calculadora</h2>
              <p>
                Aprendi muito com esse projeto, durante o desevolvimento apredi
                a manipular o dom, junto com isso conheci novos métodos e novas
                formas de criar o codigo.
              </p>
              <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
            </section>

            <section className="box-single">
              <h2>formulario</h2>
              <p>
                Nesse formulario possui validações para o usuário não validar
                senha ou email envalido. Esse formulario abriu minha mente em
                como faço codigo hoje como existe varias formas de chegar no
                mesmo resultado.
              </p>
            </section>

            <section className="box-single">
              <h2>Loja de Carro</h2>
              <p>Um site reposivo que se adapta a qualquer dispositivo</p>
            </section>

            <section className="box-single">
              <h2>API Pokémon</h2>
              <p>
                Nesse projeto foi consumido uma api que nela contém pokémons.
                Para pegar os pokemons basta escrever o numero de pokémons que
                você deseja.
              </p>
            </section>

            <section className="box-single">
              <h2>Jogo do Mario</h2>
              <p>
                Um jogo do mario se baseia em pular os obstaculos e para pular
                basta clickar qualquer tecla.
              </p>
            </section>

            <section className="box-single">
              <h2>Portifolio de Dentista</h2>
              <p>
                Uma pagina que consiste em ter sliders rolantes, totalmente
                responsivo. No desenvolvimento utilizei uma bibliote chamada
                slick slider.
              </p>
            </section>

            <section className="box-single"></section>
          </section>
        </Container>
      </article>
    </>
  );
}

export default Projetos;

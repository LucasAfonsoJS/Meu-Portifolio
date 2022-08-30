import { Container, LineBox } from "../assets/styled-components";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Projetos() {
  const [total, setTotal] = useState(0);
  //PEGAR O NUMERO E COMPARAR PARA VER SE É PRA FECHAR OU ABRIR
  //IMPAR:FECHAR, PAR:ABRIR
  let openAndClose = total % 2 === 0 ? "fechar" : "anima2";

  useEffect(() => {
    ScrollReveal({ reset: true }).reveal("#anima2", {
      duration: 2000,
      origin: "left",
      distance: "60px",
    });
  }, []);

  return (
    <>
      <article className="fundo-projetos">
        <Container id="Projetos" className="fundo_container">
          <h1 className="anima">Projetos</h1>
          <section className="box-wraper">
            <section className="box-single anima">
              <h2>lista de presença</h2>
              <p>
                Aprendi muito com esse projeto, durante o desevolvimento aprendi
                a manipular o dom, junto com isso conheci novos métodos e novas
                formas de criar o codigo, inclusive que classes que até esse
                projeto eu não conhecia.
              </p>
              <ul>
                <SiReact className="ts" />
                <SiTypescript className="ts" />
                <SiHtml5 className="html" />
                <SiCss3 className="css" />
                <SiJavascript className="js" />
              </ul>
              <LineBox>
                <a href="https://apigit2.netlify.app" target="_blank">
                  Veja
                </a>
              </LineBox>
            </section>
            <section className="box-single anima">
              <h2>Calculadora</h2>
              <p>
                Aprendi muito com esse projeto, durante o desevolvimento aprendi
                a manipular o dom, junto com isso conheci novos métodos e novas
                formas de criar o codigo, inclusive que classes que até esse
                projeto eu não conhecia.
              </p>
              <ul>
                <SiHtml5 className="html" />
                <SiCss3 className="css" />
                <SiJavascript className="js" />
              </ul>
              <LineBox>
                <a href="https://calculadora10.netlify.app" target="_blank">
                  Veja
                </a>
              </LineBox>
            </section>

            <section className="box-single anima">
              <h2>Formulario</h2>
              <p>
                Nesse formulario possui validações para o usuário não validar
                senha ou email envalido. Esse formulario abriu minha mente em
                como faço codigo hoje como existe varias formas de chegar no
                mesmo resultado.
              </p>
              <ul>
                <SiHtml5 className="html" />
                <SiCss3 className="css" />
                <SiJavascript className="js" />
              </ul>
              <LineBox>
                <a href="https://formulario20.netlify.app" target="_blank">
                  Veja
                </a>
              </LineBox>
            </section>

            <section id={openAndClose} className="box-single">
              <h2>API Pokémon</h2>
              <p>
                Nesse projeto foi consumido uma api que nela contém pokémons.
                Para pegar os pokemons basta escrever o numero de pokémons que
                você deseja.
              </p>
              <ul>
                <SiHtml5 className="html" />
                <SiCss3 className="css" />
                <SiJavascript className="js" />
              </ul>
              <LineBox>
                <a href="" target="_blank">
                  Veja
                </a>
              </LineBox>
            </section>

            <section id={openAndClose} className="box-single">
              <h2>Jogo do Mario</h2>
              <p>
                Um jogo do mario se baseia em pular os obstaculos e para pular
                basta clickar qualquer tecla.
              </p>
              <ul>
                <SiHtml5 className="html" />
                <SiCss3 className="css" />
                <SiJavascript className="js" />
              </ul>
              <LineBox>
                <a href="" target="_blank">
                  Veja
                </a>
              </LineBox>
            </section>

            <section id={openAndClose} className="box-single">
              <h2>Portifolio Dentista</h2>
              <p>
                Uma pagina que consiste em ter sliders rolantes, totalmente
                responsivo. No desenvolvimento utilizei uma bibliote chamada
                slick slider.
              </p>
              <ul>
                <SiHtml5 className="html" />
                <SiCss3 className="css" />
                <SiJavascript className="js" />
              </ul>
              <LineBox>
                <a href="https://site-dentista.netlify.app" target="_blank">
                  Veja
                </a>
              </LineBox>
            </section>

            <section id={openAndClose} className="box-single">
              <h2>Loja de Carro</h2>
              <p>
                Um site reposivo que se adapta a qualquer dispositivo, possui
                barra de filtro de preço com paginas de venda sobre
              </p>
              <ul>
                <SiHtml5 className="html" />
                <SiCss3 className="css" />
                <SiJavascript className="js" />
              </ul>
              <LineBox>
                <a href="https://loja-de-carro.netlify.app" target="_blank">
                  Veja
                </a>
              </LineBox>
            </section>

            <section id={openAndClose} className="box-single">
              <h2>Pagina responsiva</h2>
              <p>
                Uma pagina simples que se adapta a qualquer formato de tela,
                possui formulario de contato é usado float.
              </p>
              <ul>
                <SiHtml5 className="html" />
                <SiCss3 className="css" />
                <SiJavascript className="js" />
              </ul>
              <LineBox>
                <a href="https://lading-page90.netlify.app" target="_blank">
                  Veja
                </a>
              </LineBox>
            </section>

            <section id={openAndClose} className="box-single">
              <h2>Progamação</h2>
              <p>
                Nesta pagina possui google maps e uma slider que vai passando
                automaticamente, esta pagina é responsiva pra qualquer tipo de
                tela.
              </p>
              <ul>
                <SiHtml5 className="html" />
                <SiCss3 className="css" />
                <SiJavascript className="js" />
              </ul>
              <LineBox>
                <a
                  href="https://pagina-de-progamacao.netlify.app"
                  target="_blank"
                >
                  Veja
                </a>
              </LineBox>
            </section>
          </section>
          <button className="verMais" onClick={() => setTotal(total + 1)}>
            VER MAIS
          </button>
        </Container>
      </article>
    </>
  );
}

export default Projetos;

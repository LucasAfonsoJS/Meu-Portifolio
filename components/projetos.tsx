import { Container, LineBox } from "../assets/styled-components";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { useState } from "react";
import BoxProjetos from "../components-mini/box-projetos";
type OpenClose = {
  open: true;
  close: false;
};

function Projetos() {
  const [total, setTotal] = useState(0);
  //PEGAR O NUMERO E COMPARAR PARA VER SE É PRA FECHAR OU ABRIR
  //IMPAR:FECHAR, PAR:ABRIR
  let openAndClose = total % 2 === 0 ? "" : "fechar";

  return (
    <>
      <article className="fundo-projetos">
        <Container id="Projetos" className="fundo_container">
          <h1>Projetos</h1>
          <section className="box-wraper">
            

            <section className="box-single">
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
                <a href="">Veja</a>
              </LineBox>
            </section>

            <section className="box-single">
              <h2>formulario</h2>
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
                <a href="">Veja</a>
              </LineBox>
            </section>

            <section className="box-single">
              <h2>Loja de Carro</h2>
              <p>Um site reposivo que se adapta a qualquer dispositivo</p>
              <ul>
                <SiHtml5 className="html" />
                <SiCss3 className="css" />
                <SiJavascript className="js" />
              </ul>
              <LineBox>
                <a href="">Veja</a>
              </LineBox>
            </section>

            <section className="box-single">
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
                <a href="">Veja</a>
              </LineBox>
            </section>

            <section className="box-single">
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
                <a href="">Veja</a>
              </LineBox>
            </section>

            <section className="box-single">
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
                <a href="">Veja</a>
              </LineBox>
            </section>
            
            <section id={openAndClose} className="box-single">
              <h2>Pagina de serviços</h2>
              <p>
                Nela se pode adicionar o nome da pessoa, é marcardo a hora que
                foi adicionado e junto nesse projeto eu uso a api do GitHub,
                peguei da api minha foto e o link que vai para meu perfil no
                GitHub1
              </p>
              <ul>
                <SiHtml5 className="html" />
                <SiCss3 className="css" />
                <SiJavascript className="js" />
              </ul>
              <LineBox>
                <a href="">Veja</a>
              </LineBox>
            </section>
            <section id={openAndClose} className="box-single">
              <h2>Pagina de serviços</h2>
              <p>
                Nela se pode adicionar o nome da pessoa, é marcardo a hora que
                foi adicionado e junto nesse projeto eu uso a api do GitHub,
                peguei da api minha foto e o link que vai para meu perfil no
                GitHub
              </p>
              <ul>
                <SiHtml5 className="html" />
                <SiCss3 className="css" />
                <SiJavascript className="js" />
              </ul>
              <LineBox>
                <a href="">Veja</a>
              </LineBox>
            </section>

            <section id={openAndClose} className="box-single">
              <h2>Pagina de serviços</h2>
              <p>
                Nela se pode adicionar o nome da pessoa, é marcardo a hora que
                foi adicionado e junto nesse projeto eu uso a api do GitHub,
                peguei da api minha foto e o link que vai para meu perfil no
                GitHub
              </p>
              <ul>
                <SiHtml5 className="html" />
                <SiCss3 className="css" />
                <SiJavascript className="js" />
              </ul>
              <LineBox>
                <a href="">Veja</a>
              </LineBox>
            </section>

          </section>
          <button className="verMais" onClick={() => setTotal(total + 1)}>
              VER MAIS {total}
            </button>
        </Container>
      </article>
    </>
  );
}

export default Projetos;

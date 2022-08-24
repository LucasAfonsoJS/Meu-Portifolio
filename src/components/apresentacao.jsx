import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";


function Apresentacao() {
  return (
    <>
      <main className="fundo">
        <article className="container">
          <section className="icones">

            {/* <a href="">
              <FaFacebookF className="tamanho-dos-icones" />
            </a> */}
            <a href="">
              <BsLinkedin className="tamanho-dos-icones" />
            </a>
            <a href="">
              <BsInstagram className="tamanho-dos-icones" />
              </a>
            <a href="">
              <BsGithub className="tamanho-dos-icones" />
            </a>
            
          </section>
          <figure className="icones_foto-minha">
            </figure>

          {/* <img src={Ts} alt="" /> */}
        </article>
      </main>
    </>
  );
}
export default Apresentacao;

import Ts from "../imgs/ts.png";
import Js from "../imgs/javascript-logo.svg";
import ReactJs from "../imgs/react.png";


function Tecnologias() {
  return (
    <>
      <article  className="tecnologias">
        
          <figure className="tecnologias_javascript">
            <img src={Js} alt="javascript" />
            <legend>Javascript</legend>
          </figure>

          <figure className="tecnologias_javascript">
            <img src={Ts} alt="Typescript" className="Typescript" />
            <legend>Typescript</legend>
          </figure>

          <figure className="tecnologias_javascript">
            <img src={ReactJs} alt="sass" />
            <legend>React</legend>
          </figure>
      </article>
    </>
  );
}

export default Tecnologias;

import axios from "axios";
import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
type Apis = {
  name: string;
  avatar: string;
};
function Sobre() {
  const apiGit: string = "https://api.github.com/users/LucasAfonsoJS";

  const [user, setUser] = useState({} as Apis);

  useEffect(() => {
    fetch(apiGit)
      .then((res) => res.json())
      .then((data) =>
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        })
      )
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <>
      <article id="sobre" className="sobre">
        <h2>Sobre</h2>
        <section className="sobre_container">
          <section className="sobre_mim">
            <h3 className="anima">Quem sou eu?</h3>
            <p className="anima">
              Sou um Dev Front-end moro em tubarão SC, vou fazer 20 anos comecei
              em no começo de 2021. me cosidero uma pessoa muito persistente.
            </p>
            <p className="anima">
              As tecnologias que eu utilizo são Javascript, Typescript, React e
              styled components.
            </p>
          </section>

          <section className="sobre_imgs anima">
            <img src={user.avatar} alt="" />
          </section>
        </section>
      </article>
    </>
  );
}
export default Sobre;

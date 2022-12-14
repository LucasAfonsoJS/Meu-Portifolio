import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer id="footer">
        <ul>
          <h2>Contato</h2>
          <li>
            <a href="https://www.instagram.com/lucasafonsofk/">
              <BsInstagram className="tamanho-dos-icones" /> Instagram
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=5548996996188&text=Vim%20pelo%20portif%C3%B3lio">
              <BsWhatsapp className="tamanho-dos-icones" /> Whatzapp
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;

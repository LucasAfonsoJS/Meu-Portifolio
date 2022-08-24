import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

function  Footer() {
    return (
        <>
        <footer id="tecnologia">

            <ul>
                <h2>Contato</h2>
                <li>
                    <a href="/"><BsInstagram className="tamanho-dos-icones" /> Instagram</a>
                </li>
                <li>
                    <a href="/"><BsWhatsapp className="tamanho-dos-icones" /> Whatzapp</a>
                </li>
            </ul>
            
        </footer>
        </>
    )
}

export default Footer;
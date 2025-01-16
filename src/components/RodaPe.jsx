
import './RodaPe.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const RodaPe = () => {
    return (
        <div className="rodape">
            <div className="icons">
                <FaInstagram className="icones" />
                <FaFacebook className="icones" />
                <FaXTwitter className="icones" />
            </div>
            <div className="rodape-text">
                <p className="paragrafo-text">© 2024. Todos os direitos reservados.</p>
            </div>
        </div>
    );
};

export default RodaPe;

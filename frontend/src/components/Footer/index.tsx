import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <p className="text-light">Desenvolvido por <FontAwesomeIcon icon={faGhost} /> <a href="https://github.com/thiagodorea" target="_blank" rel="noreferrer"> Thiago Dorea</a></p>
            </div>
        </footer>
    );
}

export default Footer;
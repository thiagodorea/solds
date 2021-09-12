import ImgSold from 'assets/img/sold.png';
import ImgBody from 'assets/img/relatorios.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import 'assets/css/landing.css';

const Home = () => {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img className="img-logo" src={ImgSold} alt="Happy" />
                {/* <h1 className="txt-logo display-4"><strong>Vendeu</strong></h1> */}
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="jumbotron txt-body col-7">
                            <h1 className="display-4"><strong>Vendeu</strong></h1>
                            <h2><strong>Analise o desempenho das suas vendas por diferentes perspectivas</strong></h2>
                            <p className="lead mt-4">Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                            <p><small>Atenção: O primeiro carregamento da página demora devido a hospedagem do banco de dados.</small></p>
                        </div>
                        <div className="img-Body col-5">
                            <img className="img-fluid" src={ImgBody} alt="Vendeu" />
                        </div>
                        <Link to="/dashboard" className="enter-app">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
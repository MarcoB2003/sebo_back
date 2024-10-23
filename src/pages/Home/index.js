import './index.scss';
import { Link } from 'react-router-dom'

import Cabecalho from '../../components/cabecalho';


export default function Home() {
    return (
        <div className='pagina-home'>
            <Cabecalho titulo="HOME" />
            
            <div>
                <h1> Conteúdo</h1>
            </div>

            <div>
                <ul>
                    <li>
                        <Link to='/contato'> Contato </Link>
                    </li>

                    <li>
                        <Link to='/variavelestado'> Variáve de Estado </Link>
                    </li>

                    <li>
                        <Link to='/calculadora'> Calculadora </Link>
                    </li>

                    <li>
                        <Link to='/listanegra'> ListaNegra </Link>
                    </li>
                    <li>
                        <Link to='/discord'> Discord</Link>
                    </li>


                </ul>
            </div>
        </div>
    )
}


import './index.scss';
import { useState } from 'react';

import Cabecalho from '../../components/cabecalho';

export default function VarEstado() {

    const [contador, setContador] = useState(10);
    // let contador = 10;

    let titulo = 'Contador';

    function incrementar() {
        // contador = contador + 1;
        // alert(contador);
        setContador(contador + 1)
    }


    return (
        <div className='pagina-var-estado'>
            <Cabecalho />

            <main>

                <h1> Variáveis de Estado </h1>

                <div className='contador'>
                    <h2> {titulo} </h2>
                    <span> {contador} </span>
                    <button onClick={incrementar}> Incrementar </button>
                </div>
                
            </main>
        </div>
    )
}
import { useState } from 'react';
import './index.scss';

import Cabecalho from '../../components/cabecalho';

export default function Calculadora() {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resposta, setResposta] = useState(0);

    function somar() {
        let r = Number(numero1) + Number(numero2);

        if (isNaN(r))
            setResposta('Informe só números poha!');
        else
            setResposta(r);
    }

    return (
        <div className='pagina-calculadora'>
            <Cabecalho titulo="Calculadora" />

            <main>
                <h1> Calculadora </h1>

                <div className='form-calc'>
                    <div>
                        <label> Número 01: </label>
                        <input type='text' value={numero1} onChange={e => setNumero1(e.target.value) } />  
                    </div>

                    <div>
                        <label> Número 02: </label>
                        <input type='text' value={numero2} onChange={e => setNumero2(e.target.value) } />
                    </div>

                    <div id='res'>
                        <div> {resposta} </div>
                    </div>

                    <div id='botoes'>
                        <button onClick={somar}> Somar </button>
                    </div>
                </div>
                
            </main>
        </div>
    )
}


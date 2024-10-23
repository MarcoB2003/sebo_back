import './index.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function Inserir() {
    const [nome, setNome] = useState('');
    const [motivo, setMotivo] = useState('');
    const [vinganca, setVinganca] = useState('');
    const [notaOdio, setNotaOdio] = useState(0);
    const [perdoado, setPerdoado] = useState(false);


    const { id } = useParams();
    
    
    // funcao que executa assim que a tela carrega
    useEffect(() => {
        if (id != undefined) {
            buscarPorId();
        }
    }, [])


    async function buscarPorId() {
        let token = localStorage.getItem('TOKEN');

        let resp = await axios.get('http://localhost:3010/listanegra/' + id, {
            headers: { 'x-access-token': token }
        });

        setNome(resp.data.nome);
        setMotivo(resp.data.motivo);
        setVinganca(resp.data.vinganca.substr(0, 10));
        setNotaOdio(resp.data.notaOdio);
        setPerdoado(resp.data.perdoado);
        
    }
    

    async function salvar() {
        let body = {
            'nome': nome,
            'motivo': motivo,
            'vinganca': vinganca,
            'notaOdio': notaOdio,
            'perdoado': perdoado
        }

        let token = localStorage.getItem('TOKEN');

        if (id == undefined) {
            let resp = await axios.post('http://localhost:3010/listanegra', body, { headers: { 'x-access-token': token }});
            alert('Novo registro inserido: ' + resp.data.novoId);
        }
        else {
            let resp = await axios.put('http://localhost:3010/listanegra/' + id, body, { headers: { 'x-access-token': token }});
            alert('Registro alterado');
        }
    }


    return (
        <div className='pagina-ln-inserir'>
            <h1> Lista Negra </h1>

            <h1>{id == undefined ? 'Inserir' : 'Alterar'}</h1>
            <div className='form'>
                <div>
                    <label>Nome</label>
                    <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Motivo</label>
                    <input type='text' value={motivo} onChange={e => setMotivo(e.target.value)}  />
                </div>
                <div>
                    <label>Vingança</label>
                    <input type='date' value={vinganca} onChange={e => setVinganca(e.target.value)} />
                </div>
                <div>
                    <label>Nota do Ódio</label>
                    <input type='text' value={notaOdio} onChange={e => setNotaOdio(e.target.value)}  />
                </div>
                <div>
                    <label>Perdoado</label>
                    <input type='checkbox' checked={perdoado} onChange={e => setPerdoado(e.target.checked)}  />
                </div>
                <div>
                    <button onClick={salvar}> {id == undefined ? 'Salvar' : 'Alterar'} </button>
                </div>
            </div>
        </div>
    )
}
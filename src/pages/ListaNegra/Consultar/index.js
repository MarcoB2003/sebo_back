import axios from 'axios'

import { useEffect, useState } from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom';


export default function ListaNegra() {    
    const [lista, setLista] = useState([]);

    const navigate = useNavigate();
    

    useEffect(() => {
        if (localStorage.getItem('TOKEN') == undefined) {
            navigate('/listanegra/login');
        }

    }, []);


    async function buscar() {
        let token = localStorage.getItem('TOKEN');

        let resp = await axios.get('http://localhost:3010/listanegra', {
            headers: { 'x-access-token': token }
        });

        setLista(resp.data);
    }


    async function excluir(id) {
        let resp = await axios.delete('http://localhost:3010/listanegra/' + id);
        alert('Registro excluído');

        await buscar();
    }




    return (
        <div className='pagina-ln-consultar'>
            <h1> Lista Negra </h1>

            <h1> Itens da Lista Negra </h1>
            <button onClick={buscar}> Buscar </button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Motivo</th>
                        <th>Vingança</th>
                        <th>Nota Ódio</th>
                        <th>Perdoado</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>

                    {lista.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.motivo}</td>
                            <td>{new Date(item.vinganca).toLocaleDateString()}</td>
                            <td>{item.notaOdio}</td>
                            <td>{item.perdoado ? 'Sim' : 'Não'}</td>
                            <td>
                                <button onClick={() => navigate('/listanegra/inserir/' + item.id) }>Alterar</button>
                            </td>
                            <td>
                                <button onClick={() => excluir(item.id)}>Excluir</button>
                            </td>
                        </tr>
                    )}
                        
                </tbody>
            </table>


        </div>
    )
}
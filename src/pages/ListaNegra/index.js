import './index.scss'
import axios from 'axios'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function ListaNegra() {

    const navigate = useNavigate();

    function logoff() {
        localStorage.removeItem('TOKEN');
        navigate('/listanegra/login');
    }


    return (
        <div className='pagina-lista-negra'>
            
            <h1> Lista Negra </h1>

            <Link to='/listanegra/inserir'> Inserir</Link>
            <Link to='/listanegra/consultar'> Consultar</Link>

            <button onClick={logoff}> Logoff </button>
           

        </div>
    )
}
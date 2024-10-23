import './index.scss';


export default function Cabecalho(props) {

    return (
        <div className='comp-cabecalho'>
            <div>SENAC</div>
            <h1> {props.titulo} </h1>
            <div>2403</div>
        </div>
    )
}


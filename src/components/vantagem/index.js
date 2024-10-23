import './index.scss';



export default function Vantagem({ imagem, titulo }) {


    return (
        <div className='comp-vantagem'>
            <h1> {titulo} </h1>
            <img src={imagem} />
        </div>
    )
}


import './Bebidas.css'

type Props = {
    titulo: string
    agua: string
    Menu: Bebidas[]
}

type Bebidas = {
    tipo: string
    nome1: string
    nome2: string
    nome3: string
}
function Bebidas(props: Props) {
    return (
        <div className='bebidas'>
            <h4 className='bebidas-header'>{props.titulo}</h4>
            <ul className='lista-bebidas-itens'>
                <li className='bebidas-item'><h5>{ props.agua}</h5></li>
                {props.Menu.map((Bebidas, index) => (
                    <li className='bebidas-item' key={index}>
                        <h5>{Bebidas.tipo}</h5>
                        <p>-{Bebidas.nome1}</p>
                        <p>-{Bebidas.nome2}</p>
                        <p>-{Bebidas.nome3}</p>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Bebidas;
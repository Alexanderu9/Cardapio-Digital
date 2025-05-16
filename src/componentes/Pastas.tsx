import './Pastas.css'

type Props = {
    titulo: string,
    massas: Prato[];
}

type Prato = {
    nome: string;
    ilustracao: string;
    valor: string;
    molhos: string[];
  };


  function Pastas(props: Props) {
    return (
      <>
        <h4 className='Pastas-header'>{props.titulo}</h4>
        <ul className="Pastas-itens-lista">
          {props.massas.map((prato, index) => (
            <li className="Pastas-item" key={index}>
              <h5>{prato.nome}</h5>
              <img src={prato.ilustracao} alt={prato.nome} />
              <p>Valor: {prato.valor}</p>
              <p><strong>"Molhos"</strong><br />
               {prato.molhos.join("  ,  ")}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }


export default Pastas;
import './Gnocchi.css';

function Gnocchi() {
  return (
    <section className="gnocchi">
      <div className="gnocchi-header">
        <h3>Menu de Gnocchi</h3>
      </div>

      <ul className="gnocchi-itens-lista">
        <li className="gnocchi-item">
          <img src="/batata.jpeg" alt="imagem de gnocchi" />
          <p className="nome">Gnocchi de Batata</p>
          <p>R$ 60,00</p>
        </li>

        <li className="gnocchi-item">
          <img src="/espinafre.jpeg" alt="imagem de gnocchi" />
          <p className="nome">Gnocchi de Espinafre</p>
          <p>R$ 45,00</p>
        </li>

        <li className="gnocchi-item">
          <img src="/cenoura.jpeg" alt="imagem de gnocchi" />
          <p className="nome">Gnocchi de Cenoura</p>
          <p>R$ 50,00</p>
        </li>

        <li className="gnocchi-item">
          <img src="/beterraba.jpeg" alt="imagem de gnocchi" />
          <p className="nome">Gnocchi de Beterraba</p>
          <p>R$ 75,00</p>
        </li>
      </ul>
    </section>
  );
}

export default Gnocchi;


import './informacoes.css';

function Informacoes() {
    return (
        <>
        <section className="informacoes">
            <div className="informacoes-esquerda">
                <h2>Servindo massas à mais de 70 anos</h2>
                <p>Qualidade passada por gerações</p>
            </div>

            <div className="informacoes-direita">
                <img src="/imgPasta.jpg" alt="Imagem sobre massa" />
            </div>
        </section>
        </>
    );
}

export default Informacoes
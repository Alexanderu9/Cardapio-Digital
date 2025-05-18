import './rodape.css';

function Rodape() {
    return (
        <footer className="rodape">
            <div className="redes-sociais">
                <ul>
                    <li><img src="./facebook.png" alt="Facebook" width={30} /></li>
                    <li><img src="./instagram.png" alt="Instagram" width={30} /></li>
                    <li><img src="./whatsapp.png" alt="Whatsapp" width={30} /></li>
                </ul>
            </div>
            <div className="info">
                <p className="desenvolvido">Desenvolvido por: Alexander Urdaneta</p>
                <p className="endereco">Rua da Laranjeira 123 - Centro - Belo Horizonte</p>
            </div>
            <div className='copyr'>
                <p className="copy">© 2023 - Todos os direitos reservados</p>
            </div>
        </footer>
    );
}

export default Rodape;

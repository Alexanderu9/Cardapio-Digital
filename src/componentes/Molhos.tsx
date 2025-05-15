import './Gnocchi.css'

function Molhos() {
    return (
        <>
        <section className='Molhos'>
                <div className="gnocchi-header">
                <h2>Molhos</h2>
                </div>
                <ul className='gnocchi-itens-lista'>
                    <li>
                        <p className='molhoHover'>Alla Puttanesca</p>
                        <img className='imagem' src="./Puttanesca.jpeg" alt="Alla Puttanesca" width={200} />
                     </li>
                    <li>
                        <p className='molhoHover'>Al Pesto di Basilico</p>
                        <img className='imagem' src="./Basilico.jpeg" alt="Al Pesto di Basilico" width={200} />
                    </li>
                    <li>
                        <p className='molhoHover'>Cacio e Pepe</p>   
                        <img className='imagem' src="./Pepe.jpeg" alt="Cacio e Pepe" width={200} />          
                    </li>
                    <li>
                        <p className='molhoHover'>Alla Matriciana</p>
                        <img className='imagem' src="./Matriciana.jpeg" alt="Alla Matriciana" width={200} />
                    </li>
                </ul>
                </section>
        </>
    )
}

export default Molhos
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
                        <p>Alla Puttanesca</p>
                        <img src="./Puttanesca.jpeg" alt="Alla Puttanesca" width={200} />
                     </li>
                    <li>
                        <p>Al Pesto di Basilico</p>
                        <img src="./Basilico.jpeg" alt="Al Pesto di Basilico" width={200} />
                    </li>
                    <li>
                        <p>Cacio e Pepe</p>   
                        <img src="./Pepe.jpeg" alt="Cacio e Pepe" width={200} />          
                    </li>
                    <li>
                        <p>Alla Matriciana</p>
                        <img src="./Matriciana.jpeg" alt="Alla Matriciana" width={200} />
                    </li>
                </ul>
                </section>
        </>
    )
}

export default Molhos
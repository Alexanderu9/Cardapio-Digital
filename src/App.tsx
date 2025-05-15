
import CardapioDigital from './componentes/CardapioDigital'
import Informacoes from './componentes/Informacoes'
import Gnocchi from './componentes/Gnocchi'
import Molhos from './componentes/Molhos'
import Pastas from './componentes/Pastas'
import'./App.css'


function App() {


  return (
    <>
<div className="container">
  <div className="cardapio"><CardapioDigital /></div>
  <div className="info"><Informacoes /></div>
  <div className="gnocchi"><Gnocchi /></div>
  <div className="molhos"><Molhos /></div>
  <div className='pastas'><Pastas titulo="Menu de Massas" massas={[
        {
          nome: "Espaguete:",
          ilustracao: "./Espaguete.jpeg",
          valor: "R$ 32,90",
          molhos: ["Alla Puttanesca", "Al Pesto di Basilico", "Cacio e Pepe", "Alla Matriciana"]
        },
        {
          nome: "Tagliatelle:",
          ilustracao: "./Tagliatelle.jpeg",
          valor: "R$ 35,00",
          molhos: ["Alla Puttanesca", "Alla Matriciana"]
        },
        {
          nome: "Fettuccine:",
          ilustracao: "./Fettuccine.jpeg",
          valor: "R$ 38,00",
          molhos: ["Alla Puttanesca", "Al Pesto di Basilico", "Cacio e Pepe"]
        },
        {
          nome: "Penne:",
          ilustracao: "./Penne.jpeg",
          valor: "R$ 40,00",
          molhos: ["Alla Puttanesca", "Cacio e Pepe"]
        },
        {
          nome: "Rigatoni:",
          ilustracao: "./Rigatoni.jpeg",
          valor: "R$ 45,00",
          molhos: ["Alla Matriciana"]
        },
        {
          nome: "Pappardelle:",
          ilustracao: "./Pappardelle.jpeg",
          valor: "R$ 65,00",
          molhos: ["Alla Puttanesca", " Alla Matriciana"]
        },
      ]} /></div>
  </div>
    </>
  )
}

export default App


import CardapioDigital from './componentes/CardapioDigital'
import Informacoes from './componentes/informacoes'
import Gnocchi from './componentes/Gnocchi'
import'./App.css'


function App() {


  return (
    <>
<div className="container">
  <div className="cardapio"><CardapioDigital /></div>
  <div className="info"><Informacoes /></div>
  <div className="gnocchi"><Gnocchi /></div>
</div>
    </>
  )
}

export default App

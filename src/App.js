import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import { useState } from 'react';
function App() {

  const[numClic, setNumClics] = useState(0)

const manejarClic = () => {
setNumClics(numClic + 1);
}

const Reiniciarcontador = () => {
  setNumClics (0);
}
const Restarclic = () =>{
  setNumClics(numClic -1);
}

  return (
    <div className="App">
      <div className='texto-titulo'>
        <h1>contador de clic</h1>
      </div>
      <div className='contenedor-principal'>
       <Contador numClic={numClic}/>
       <Boton 
       texto='clic +'
       esBotonDeclic={true}
       manejarClic={manejarClic}/>
      <Boton
      texto='clic -'
      esBotonDeclic={true}
      manejarClic={Restarclic}/>
      <Boton
      texto='Reiniciar'
      esBotonDeclic={false}
      manejarClic={Reiniciarcontador}/>
       
      </div>
    </div>
  );
}

export default App;

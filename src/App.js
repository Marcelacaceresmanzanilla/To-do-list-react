
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import TareaFormulario  from './componentes/TareaFormulario';
import ListaDeTareas from './componentes/ListaDeTareas';




function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img
         src={freeCodeCampLogo} 
         className='freecodecamp-logo'
         alt='imagen' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
        
      </div>
      
      
    </div>
  );
}
export default App;



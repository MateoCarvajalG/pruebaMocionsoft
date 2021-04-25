import logo from './logo.svg';
import './App.css';
import React, {Fragment,useEffect,useState}from 'react'
import {Button,Modal, ModalHeader,ModalBody,ModalFooter} from 'reactstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Preguntas from './components/preguntas'

function App() {

  /*
  se crean dos estados de react en donde se guardaran en un array
   las preguntas y las respuestas para luego poder usar esta informacion
  con mayor facilidad
  */

  const [preguntas,setPreguntas]=useState([])
  const [respuestas,setRespuestas] = useState([])
  
  /*
  en esta funcion asincrona se consume la informacion que suministra la api
  con las preguntas que luego seran mostradas en el componente; como en esta informacion
  habia errores como &quot;  y &#039; se corrigieron mostrando el valor correspondiente en assci
  y luego esta informacion se guarda en el estado de preguntas
  */
  const consumirApi = async () => {
    const data = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean");
    const Preguntas= await data.json(); 
    const newQuestion=[] 
    Preguntas.results.some(function(item){
      while (item.question.includes('&quot')){
        item.question=item.question.replace('&quot;','"')
      }
      while (item.question.includes('&#039;')){
        item.question=item.question.replace('&#039;',"'")
      }
      newQuestion.push(item)
    })
    setPreguntas(newQuestion);
  }

  /*
  en el useEffect se ejecuta el metodo consumirapi, el cual nos traera toda la informacion 
  necesaria antes de que la pagina cargue por completo, para asi poder tener esta informacion
  desde el inicio del programa
  */
  useEffect(() =>{
    consumirApi();
  },[]);

  return (
  /*
  En el return se encuentra lo que se va a renderizar segun la ruta 
  o path que se encuentre digitado, por ejemplo:
  en el endpoint /inicio se renderizara una bienvenida a la pagina y se 
  encontrara una informacion previa, y se encontrara con un boton Iniciar test
  que nos redirigira hacia la ruta preguntas con su respectivo componente
  */
  <Router>
    <Switch>
   
      <Route path='/inicio'>

        <div className="grid-container">
            <div className="titulo">
              <h1>

              Bienvenido al reto de las trivias
              </h1>
            </div>
          <div className="area-ppal">
            <div className="descripcion">
                  Se te presentaran 10 preguntas aleatorias con respuestas de falso y verdadero
                  <br/>
                  Eres capaz de contestar correctamente el 100% de las preguntas?
                  <br/>
            </div>
            
            <div className="boton-de-inicio">
              <Link className="btn btn-primary btn-lg" to="/preguntas">Iniciar el test!
              </Link>
            </div>
          </div>
        </div>

      </Route>

   { /* En este endpoint: /preguntas se renderizara la vista y el componente
   de la ruta, y se la pasa por props los estados preguntas y respuestas para 
   usarlos desde el componente preguntas
   */ }

      <Route path="/preguntas" >
        <Preguntas 
        preguntas = {preguntas}
        respuestas = {respuestas}
        setRespuestas = {setRespuestas}
        />
      </Route>
    </Switch>
    </Router>
  
  );
}

export default App;

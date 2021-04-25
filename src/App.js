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

  const [preguntas,setPreguntas]=useState([])
  const [respuestas,setRespuestas] = useState([])
  
  
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
  console.log(preguntas)
  useEffect(() =>{
    consumirApi();
  },[]);

  return (
  
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

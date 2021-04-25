import React ,{Fragment,useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
  import Resultados from '../components/resultados'
import '../preguntas.css'
import Inicio from '../App'
const Preguntas = (props) => {
    const [numPregunta,setNumPregunta] = useState(0)
    const aumentar = () =>{
        
    }

    const saveTrue= () =>{
        setNumPregunta(numPregunta+1)
        props.setRespuestas([...props.respuestas,'True'])
    }
    const saveFalse= () =>{
        setNumPregunta(numPregunta+1)
        props.setRespuestas([...props.respuestas,'False'])
    }

    return ( 
    <Router>
    <Switch>

    {
        numPregunta < 10 ? 
        
        
    <div className="grid-container1">
        <div className="categoria">
            <h1>
                {props.preguntas[numPregunta].category}
            </h1>
            <h3>{numPregunta} de 10</h3>
        </div>
        <div className="Pregunta">
            <div className="tarjeta">
                <div className="card " >
                    <div className="card-body">
                        <h5 className="card-title">{props.preguntas[numPregunta].question}</h5>

                        
                    </div>
                    <button type="button" className="btn btn-success  btn-lg my-4 botones" onClick={saveTrue}>True</button>
                    <button type="button" className="btn btn-danger  btn-lg botones" onClick={saveFalse}>False</button>
                </div>
            </div>
            <div className="num-pregunta"></div>
            
        </div>
    </div>
    
    : 
    <div>
        <h1>Has terminado el cuestionario!!</h1>
    <Link 
    className="btn btn-warning botones btn-lg"
        to="/resultados">
        Ver resultados
    </Link>
    <Route path="/resultados"  >
        <Resultados
        preguntas={props.preguntas}
        respuestas={props.respuestas}
        />
    </Route>
    <Route path="/inicio"  >
        <Inicio
        />
    </Route>
    </div>
}    
    
    </Switch>
    </Router>
     );
}
 
export default Preguntas;
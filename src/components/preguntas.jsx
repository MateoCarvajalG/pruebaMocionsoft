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

/*
en este componente se recibe por props los estados que vienen desde
el App 
*/
const Preguntas = (props) => {
    const [numPregunta,setNumPregunta] = useState(0)

    /*
    estos dos metodos se ejecutaran en el momento que el cliente haga click 
    sobre el boton sea falso o verdadero y se guardara en un estado las respuestas
    que el click realice
    */
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
        {/* En esta parte se encuentra un if ternario en el cual va a renderizar
        diferentes vistas dependiendo la cantidad de preguntas que respondio, 
        si aun le quedan preguntas por responder, este renderizara cada pregunta,
        si llego al limite de preguntas por responder, este renderizara que el 
        cuestionario ha terminado y puede visualizar los resultados
        */}
    {
        numPregunta < 10 ? 
        
        // lado positivo del if ternario
        
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

    // Lado negativo del if ternario

   
    <div>
        <h1>Has terminado el cuestionario!!</h1>
    
    {/* cuando se le haga click al boton ver resultados, este redirigia a otra ruta 
    /resultados en el cual se van a poder visualizar las preguntas y si se respondio
    de manera correcta, ademas de obtener la claificacion */}
    <Link 
    className="btn btn-warning botones btn-lg"
        to="/resultados">
        Ver resultados
    </Link>
    {/* Se le pasa por props al componente resultados, las mismas preguntas y las respuestas 
    para ser manipulados en este componente */}
    <Route path="/resultados"  >
        <Resultados
        preguntas={props.preguntas}
        respuestas={props.respuestas}
        />
    </Route>
    </div>
}    
    
    </Switch>
    </Router>
     );
}
 
export default Preguntas;
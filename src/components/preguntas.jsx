import React ,{Fragment,useState} from 'react';
// import '../preguntas.css'
const Preguntas = (props) => {
    console.log(props)
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

    <div className="grid-container">
        <div className="categoria">
            {props.preguntas[numPregunta].category}
            
        </div>
        <div className="Pregunta">
            <div className="tarjeta">
                <div className="card tarjeta1 " >
                    <div className="card-body">
                        <h5 className="card-title">{props.preguntas[numPregunta].question}</h5>

                        <button type="button" className="btn btn-success mx-5 btn-lg" onClick={saveTrue}>True</button>
                        <button type="button" className="btn btn-danger mx-5 my-2 btn-lg" onClick={saveFalse}>False</button>
                    </div>
                </div>
            </div>
            <div className="num-pregunta"></div>
            <button type="button" className="btn btn-primary" onClick={aumentar} >Siguiente Pregunta</button>
        </div>
    </div>

     );
}
 
export default Preguntas;
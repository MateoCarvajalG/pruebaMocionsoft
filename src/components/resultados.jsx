import React ,{Fragment,useState,useEffect} from 'react';
const Resultados = (props) => {
    const[respuestasbuenas,setRespuestasbuenas]=useState(0)
    const[porcentajeAcierto,setPorcentajeAcierto]=useState(0)
    
    const sumar = () =>{
        let contador=0
        props.preguntas.some(function(item,index){
            if (item.correct_answer === props.respuestas[index]){
                contador=contador+1
            }
        })
        setPorcentajeAcierto((contador*100)/10)
        setRespuestasbuenas(contador)
    }
    useEffect(() =>{
        sumar();
      },[]);
    return ( 
        <Fragment>

    <div className="card" >
        <ul className="list-group list-group-flush">
            { props.preguntas.map((item,index)=>(
                item.correct_answer === props.respuestas[index] ? 
                <li className="list-group-item text-success h5 "> <i class="fas fa-plus"></i>     {item.question}</li>
                :
                <li className="list-group-item text-danger h6"><i className="fas fa-minus"></i>   {item.question} </li>

            ))
            }
        </ul>
        
    </div>
    <h5>has tenido {respuestasbuenas} preguntas correctas  </h5>
    <h2>con un resultado de {porcentajeAcierto} %</h2>
        </Fragment>
     );
}
 
export default Resultados;
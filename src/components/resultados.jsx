import React ,{Fragment,useState,useEffect} from 'react';

// de la misma forma se reciben los props desde el componente preguntas
const Resultados = (props) => {
    const[respuestasbuenas,setRespuestasbuenas]=useState(0)
    const[porcentajeAcierto,setPorcentajeAcierto]=useState(0)
    /* En este metodo se realiza antes de la renderizada de las preguntas
     se realiza la comparacion de cuantas preguntas buenas tuvo y el porcentaje de acierto*/
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
            {/* en esta parte se realiza un mapeo de las preguntas que vienen por los props 
            y se realiza la comparacion de si la respuesta es correcta para tomar una decision
            de como renderizar la informacion, en verde si la repsuesta fue correcta, o en rojo si 
            la respuesta fue incorrecta
            */}

            { props.preguntas.map((item,index)=>(
                item.correct_answer === props.respuestas[index] ? 
                <li className="list-group-item text-success h5 "> <i class="fas fa-plus"></i>     {item.question}</li>
                :
                <li className="list-group-item text-danger h6"><i className="fas fa-minus"></i>   {item.question} </li>

            ))
            }
        </ul>
        
    </div>
    {/* se renderiza el resultado y se añade un boton de intentarlo de nuevo que redirigira 
    hacia la ruta de inicio y de nuevo la aplicacion vuelve a comenzar */}
    <footer >
        <div className="footer1">
            <p className="h2"> Tu puntuacion es :  {respuestasbuenas} / 10    </p>
            <p className="h2"> Con un resultado de {porcentajeAcierto} %</p>
        </div>
        <div className="f2">
            <p className>
                <a href="/inicio" class="btn btn-success fb btn-lg ">Intentalo de nuevo</a>
            </p>
        </div>
    </footer>
        </Fragment>
     );
}
 
export default Resultados;
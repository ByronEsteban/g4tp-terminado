import axios from 'axios';
import { useState, useEffect } from 'react';

//Racha, una variable igual a la de Form y un índice para filteredQuestions
let racha = 0;
let a = 1;
let question_index = 0;

const Play = props => {

  const [questions, setQuestions] = useState([]);
  //Preguntas filtradas por tema
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  //Para esconder o mostrar botones
  const [hidden, setHidden] = useState(false);
  const [trueAnswer, setTrueAnswer] = useState([
    {correct: false}, {correct: false}, {correct: false}, {correct: false}]);

  //Función para elegir opción correcta
  const handleChange = e => {
    a = 0;
    const name = e.target.id;
    for (let i = 0; i < 4; i++)
      trueAnswer[i].correct = false;
    trueAnswer[name].correct = true;
    console.log(trueAnswer);
  }

  //Función del botón "Reintentar"
  const tryAgain = e => {
    setHidden(false);
    racha = 0;
    question_index++;
    if (question_index >= filteredQuestions.length)
      question_index = 0;
  }

  //Función del botón "Jugar"
  const handleClick = e => {
    if (document.getElementById('select').value != "Seleccionar Tema") {
      console.log(question_index);
      if (question_index == filteredQuestions.length)
        question_index = 0;
      setHidden(false);
      setFilteredQuestions(questions.filter(question =>
        question.tema == document.getElementById('select').value
      ));
      document.getElementById('jugar').disabled = true;
      document.getElementById('select').disabled = true;
    } else alert("Elegí un tema");
  }

  //Función del botón "Cambiar tema"
  const changeTheme = e =>{
    document.getElementById('jugar').disabled = false;
    document.getElementById('select').disabled = false;
    setFilteredQuestions([]);
  }

  //Función del botón "Enviar" respuesta
  const sendAnswer = e => {
    //Si no se eligió una respuesta correcta no hace nada
    if (a) {
      alert("Elegí una opción correcta");
      return;
    }
    a = 1;
    let win = 0;
    for (let i = 0; i < 4; i++) {
      if (trueAnswer[i].correct == true && filteredQuestions[question_index].answers[i].correct == true) {
        win = 1;
        break;
      }
    }
    if (win) {
      question_index++;
      if (question_index == filteredQuestions.length)
        question_index = 0;
      alert("Biennn!!! No sos tan bruto");
      racha++;
      setFilteredQuestions(questions.filter(question =>
        question.tema == document.getElementById('select').value
      ));
      setTrueAnswer([
        {correct: false}, {correct: false}, {correct: false}, {correct: false}
      ]);
    }
    else {
      alert("Tremendo maloooo");
      setHidden(true);
    }
  }

  //Hace un mapeo de las preguntas
  const Question = props => {

    const { text, tema, answers } = props.question;

    return (
      <div>
        <h2>{text}</h2>
        {answers.map((answer, idx) => (
          <div>
            <label>{answer.text}</label>
            <input required type="radio" name={text} id={idx} onChange={handleChange}/>
            <br />
          </div>
        ))}
        <h4>Tema: {tema}</h4>
      </div>
    );
  };

  //Hace un GET a la base de datos y almacena las preguntas
  useEffect(() => {
    axios.get('/question')
      .then(res => {
        console.log(res.data);
       setQuestions(res.data);
     });
  },[]);

  return (
    <div>
      <br />
      <select id="select" onChange={e => {document.getElementById('jugar').disabled = false}}>
        <option>Seleccionar Tema</option>
        <option>Dragon Ball</option>
        <option>Marvel</option>
        <option>Inglés</option>
        <option>DC</option>
        <option>Stranger Things</option>
        <option>The Walking Dead</option>
        <option>4to 4ta</option>
      </select>
      <input id="jugar" type="button" value="Jugar" onClick={handleClick}/>
        {filteredQuestions.map((question,idx) => {
          if (question_index === idx){
            console.log(idx);
            return (<div>
              <Question key={idx} question={question} />
              <input type="button" value="Enviar" onClick={sendAnswer} hidden={hidden}/>
              <br /><br />
              <label>Racha: {racha}</label>
              <br /><br />
              <input type="button" value="Reintentar" onClick={tryAgain} hidden={!hidden}/>
              <input type="button" value="Cambiar tema" onClick={changeTheme} hidden={!hidden}/>
              </div>)
          }
        }
        )}
    </div>
  );
}

export default Play;

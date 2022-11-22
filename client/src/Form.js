import axios from 'axios';
import { useState } from 'react';

//Se habilita cuando se elige una opción correcta y se desabilita si no se elige
let a = 0;

const Form = props => {
  //Esquema de las respuestas
  const [answerData, setAnswerData] = useState([
    {text: '', correct: false},
    {text: '', correct: false},
    {text: '', correct: false},
    {text: '', correct: false}
  ]);
  
  //Esquema de las preguntas
  const [questionData, setQuestionData] = useState({
    text: '',
    tema: '',
    answers: answerData
  });

  //Temporal donde se guardan los textos de las respuestas
  const [temp, setTemp] = useState({
    text1: '', text2: '', text3: '', text4: ''
  });
  
  //Función para elegir opción correcta
  const handleChange = e => {
    a = 1;
    const name = e.target.previousSibling.name;
    for (let i = 0; i < 4; i++)
      answerData[i].correct = false;
    answerData[name].correct = true;
  };
  
  //Función que se activa con el botón "Enviar" pregunta
  const addAnswer = e => {
    if (a && questionData.tema != 'Seleccionar Tema' && questionData.tema != '') {
      a = 0;
      answerData[0].text = temp.text1;
      answerData[1].text = temp.text2;
      answerData[2].text = temp.text3;
      answerData[3].text = temp.text4;
      //Devolvemos los elementos a su valor original
      axios.post('/question', questionData)
        .then(res => {setTemp({text1: '', text2: '', text3: '', text4: ''})
      });
      setQuestionData({text: '', tema: ''});
      const radius = document.getElementsByName('radius');
      for (let i = 0; i < radius.length; i++) 
        radius[i].checked = false;
      document.getElementById('topics').value = "Seleccionar Tema";
    } else alert("Falta completar cosas");
  };

  return (
    <div>
    <form onSubmit={e => {e.preventDefault()}}>
      <select id="topics" onChange={e => {setQuestionData({...questionData, tema: e.target.value})}}>
        <option>Seleccionar Tema</option>
        <option>Dragon Ball</option>
        <option>Marvel</option>
        <option>Inglés</option>
        <option>DC</option>
        <option>Stranger Things</option>
        <option>The Walking Dead</option>
        <option>4to 4ta</option>
      </select>
      <br />
      <br />

      <label>¿Cúal es tu pregunta? : </label>
      <br />
      <input
        required
        type="text"
        name="text"
        onChange={e => setQuestionData({...questionData, text: e.target.value})}
        value={questionData.text}
      />

      <br />
      <br />
      <label>Respuesta 1: </label>
      <input
        type="text"
        name= "0"
        required
        onChange={e => setTemp({...temp, text1: e.target.value})}
        value={temp.text1}
      />
      <input required name="radius" onChange={handleChange} type="radio" />
      <br />
      <br />
      <label>Respuesta 2: </label>
      <input
        type="text"
        name="1"
        required
        onChange={e => setTemp({...temp, text2: e.target.value})}
        value={temp.text2}
      />
      <input required name="radius" onChange={handleChange} type="radio" />
      <br />
      <br />

      <label>Respuesta 3: </label>
      <input
        type="text"
        name="2"
        required
        onChange={e => setTemp({...temp, text3: e.target.value})}
        value={temp.text3}
      />
      <input required name="radius" onChange={handleChange} type="radio" />
      <br />
      <br />

      <label>Respuesta 4: </label>
      <input
        type="text"
        name="3"
        required
        onChange={e => setTemp({...temp, text4: e.target.value})}
        value={temp.text4}
      />
      <input required name="radius" onChange={handleChange} type="radio" />
      <br />

      <button onClick={addAnswer}>Mandar </button>
      </form>
    </div>
  );
};

export default Form;

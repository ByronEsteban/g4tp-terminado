import axios from 'axios';
import { useState } from 'react';

const Form = props => {

  const [answerData, setAnswerData] = useState([
    {text: 'MArsupial', correct: false},
    {text: '', correct: false},
    {text: '', correct: false},
    {text: '', correct: false}]);

  const [formData, setFormData] = useState({
    text: '',
    tema: '',
    answers: answerData
  });

  const [temp, setTemp] = useState({
    text: '', tema: '', text1: '', text2: '', text3: '', text4: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Sending data to server...', formData);
  };

  const handleChange = e => {
    const name = e.target.previousSibling.name;
    console.log(name);
    for (let i = 0; i < 4; i++)
      answerData[i].correct = false;
    answerData[name].correct = true;
    console.log(answerData);
  };

  const prueba = e => {
    temp.tema = e.target.value;
  };

  const addAnswer = e => {
    formData.text = temp.text;
    formData.tema = temp.tema;
    answerData[0].text = temp.text1;
    answerData[1].text = temp.text2;
    answerData[2].text = temp.text3;
    answerData[3].text = temp.text4;
    axios.post('/question', formData)
      .then(res => {setTemp({text: '', tema: '', text1: '', text2: '', text3: '', text4: ''});
    });
    console.log(formData);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <select onChange={prueba}>
        <option>Seleccionar Tema</option>
        <option>Matemática</option>
        <option>Inglés</option>
        <option>Historia</option>
        <option>Dragon Ball</option>
        <option>Fulbo</option>
        <option>Marvel</option>
      </select>
      <br />
      <br />

      <label>¿Cúal es tu pregunta? : </label>
      <br />
      <input
        required
        type="text"
        name="text"
        onChange={e => setTemp({...temp, text: e.target.value})}
        value={temp.text}
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
      <input name="qsy" onChange={handleChange} type="radio" />
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
      <input name="qsy" onChange={handleChange} type="radio" />
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
      <input name="qsy" onChange={handleChange} type="radio" />
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
      <input name="qsy" onChange={handleChange} type="radio" />
      <br />

      <button onClick={addAnswer}>Mandar </button>
      </form>
    </div>
  );
};

export default Form;

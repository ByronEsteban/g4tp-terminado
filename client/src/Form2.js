import axios from 'axios';
import { useState } from 'react';

const Form2 = props => {

  const [answerData, setAnswerData] = useState({
    answer1: {text: '', correct: false},
    answer2: {text: '', correct: false},
    answer3: {text: '', correct: false},
    answer4: {text: '', correct: false}
  });

  const [formData, setFormData] = useState({
    text: '',
    tema: '',
    answers: [answerData]
  });

  const [temp, setTemp] = useState({
    tema: 'avestruz', text: '', text1: '', text2: '', text3: '', text4: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Sending data to server...', formData);
  };

  const handleChange = e => {
    const name = e.target.previousSibling.name;
    // const prevname = name;
    answerData.answer1.correct = false;
    answerData.answer2.correct = false;
    answerData.answer3.correct = false;
    answerData.answer4.correct = false;
    answerData[name].correct = true;
  };

  const prueba = e => {
    const aaa = e.target.value;
    temp.tema = aaa;
     console.log(temp);
  };

  const addAnswer = e => {
    console.log(temp.tema);
    console.log(temp.text);
    setFormData({...formData, text: temp.text, tema: temp.tema});
    answerData.answer1.text = temp.text1;
    answerData.answer2.text = temp.text2;
    answerData.answer3.text = temp.text3;
    answerData.answer4.text = temp.text4;
    axios.post('/question/preguntas', formData)
      .then(res => {setTemp({tema: '', text: '', text1: '', text2: '', text3: '', text4: ''});
    });
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
        name="answer1"
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
        name="answer2"
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
        name="answer3"
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
        name="answer4"
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

export default Form2;

import axios from 'axios';
import { useState } from 'react';

const Form2 = props => {

  const [answerData, setAnswerData] = useState({
    answer1: {text: '', correct: false},
    answer2: {text: '', correct: false},
    answer3: {text: 'pINGUINO RA', correct: false},
    answer4: {text: '', correct: false}
  });

  const [formData, setFormData] = useState({
    text: '',
    answers: [answerData]
  });
  const [temp5, setTemp5] = useState({
    text: '', text1: '', text2: '', text3: '', text4: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Sending data to server...', formData);
  };

  // const handleRadio = e => {
  //   console.log(e.target.previousSibling.name);
  //   const name = e.target.previousSibling.name;
  // }

  const handleChange = e => {
    const name = e.target.previousSibling.name;
    answerData.answer1.correct = false;
    answerData.answer2.correct = false;
    answerData.answer3.correct = false;
    answerData.answer4.correct = false;
    answerData[name].correct = true;
    console.log(answerData.answer1.correct);
    console.log(answerData.answer2.correct);
    console.log(answerData.answer3.correct);
    console.log(answerData.answer4.correct);
  };

  const addAnswer = e => {
    setFormData({...formData, text: temp5.text});
    answerData.answer1.text = temp5.text1;
    answerData.answer2.text = temp5.text2;
    answerData.answer3.text = temp5.text3;
    answerData.answer4.text = temp5.text4;
    axios.post('/question/preguntas', formData)
      .then(res => {
        setTemp5({text: '', text1: '', text2: '', text3: '', text4: ''});
    });
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>¿Cúal es tu pregunta? : </label>
      <br />
      <input
        required
        type="text"
        name="text"
        onChange={e => setTemp5({...temp5, text: e.target.value})}
        value={temp5.text}
      />

      <br />
      <br />
      <label>Respuesta 1: </label>
      <input
        type="text"
        name="answer1"
        required
        onChange={e => setTemp5({...temp5, text1: e.target.value})}
        value={temp5.text1}
      />
      <input name="qsy" onChange={handleChange} type="radio" />
      <br />
      <br />
      <label>Respuesta 2: </label>
      <input
        type="text"
        name="answer2"
        required
        onChange={e => setTemp5({...temp5, text2: e.target.value})}
        value={temp5.text2}
      />
      <input name="qsy" onChange={handleChange} type="radio" />
      <br />
      <br />

      <label>Respuesta 3: </label>
      <input
        type="text"
        name="answer3"
        required
        onChange={e => setTemp5({...temp5, text3: e.target.value})}
        value={temp5.text3}
      />
      <input name="qsy" onChange={handleChange} type="radio" />
      <br />
      <br />

      <label>Respuesta 4: </label>
      <input
        type="text"
        name="answer4"
        required
        onChange={e => setTemp5({...temp5, text4: e.target.value})}
        value={temp5.text4}
      />
      <input name="qsy" onChange={handleChange} type="radio" />
      <br />

      <button onClick={addAnswer}>Mandar </button>
      </form>
    </div>
  );
};

export default Form2;

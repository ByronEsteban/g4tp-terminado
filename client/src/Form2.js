import axios from 'axios';
import { useState } from 'react';

const Form2 = props => {

  const [answerData, setAnswerData] = useState({
    text1: '',
    correct1: Boolean
  }, {
    text2: '',
    correct2: Boolean
  }, {
    text3: '',
    correct3: Boolean
  }, {
    text4: '',
    correct4: Boolean
  });

  const [formData, setFormData] = useState({
    text: '',
    answers: [answerData]
  });
  const [temp, setTemp] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Sending data to server...', formData);
  };

  const handleRadio = e => {
    console.log(e.target.previousSibling.name);
    const name = e.target.previousSibling.name;
  }

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [name]: value});
  };
  const addAnswer = e => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData, answers: [[name]: value]});
    axios.post('/question/preguntas', formData)
      .then(res => {
        // setFormData({...formData, answers: [{...formData.answers, [text1]: value, [correct1]: value, temp},
         // {...formData.answers, [text2]: value, [correct2]: value},
         // {...formData.answers, [text3]: value, [correct3]: value},
         // {...formData.answers, [text4]: value, [correct4]: value}]});
        // setFormData({...formData, answers: [{...formData.answers, answerData text1, correct1, temp}});
        setTemp('');
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
        onChange={handleChange}
        value={formData.text}
      />

      <br />
      <br />
      <label>Respuesta 1: </label>
      <input
        type="text"
        name="text1"
        required
        onChange={e => setTemp(e.target.value)}
        value={answerData.text1}
      />
      <input name="qsy" type="radio" />
      <br />
      <br />
      <label>Respuesta 2: </label>
      <input
        type="text"
        name="text2"
        required
        onChange={e => setTemp(e.target.value)}
        value={answerData.text2}
      />
      <input name="qsy" type="radio" />
      <br />
      <br />

      <label>Respuesta 3: </label>
      <input
        type="text"
        name="text3"
        onChange={e => setTemp(e.target.value)}
        value={answerData.text3}
      />
      <input name="qsy" type="radio" />
      <br />
      <br />

      <label>Respuesta 4: </label>
      <input
        type="text"
        name="text4"
        onChange={e => setTemp(e.target.value)}
        value={answerData.text4}
      />
      <input name="qsy" type="radio" />
      <br />

      <button onClick={addAnswer}>Mandar </button>
      </form>
    </div>
  );
};

export default Form2;

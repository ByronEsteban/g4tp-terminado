import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState('');
  // const [question, setQuestion] = useState({
  //   text: '',
  //   img: '',
  //   answers: []
  // });
  const [temp, setTemp] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    //SI ANDA
    const question = { text: text,
    img: img
    };
    axios.post('/question/preguntas', question)
      .then(res => {
        console.log(res.question);
        console.log(res.image);
        //setQuestion('');
        setText('');
        setImg('');
      });
  };

  const handleChange = e => {
    setText(e.target.value);
  };
  const handleChange1 = e => {
    setImg(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={text}
        name="text"
        type="text"
        placeholder="Tu Mensaje"
      />
      <input
        onChange={handleChange1}
        value={img}
        name="image"
        type="text"
        placeholder="Tu imagen"
      />
    <input className="btn-submit" type="submit" value="Enviar" />
    </form>
  );
}

export default Form;

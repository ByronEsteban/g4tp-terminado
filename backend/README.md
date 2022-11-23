import React from 'react';

const Footer = () => {
return(
  <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
      <li className="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
      <li className="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li className="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p className="text-center">Preguntados La35</p>
  </footer>
</div>
  );
};
export default Footer;

import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = { text: text };
    axios.post('/question/preguntas', data)
      .then(res => {
        console.log(res.data);
        setText('');
      });
  };

  const handleChange = e => {
    setText(e.target.value);
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
    <input className="btn-submit" type="submit" value="Enviar" />
    </form>
  );
}

export default Form;

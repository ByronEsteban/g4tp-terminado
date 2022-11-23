import React, { useState } from 'react';
import axios from 'axios';
//Se habilita cuando se elige una opción correcta y se desabilita si no se elige
let a = 0;

const Form = props => {
  const [hiddenForm, setHiddenForm] = useState(true);
  const changeHiddenForm = () => {
  setHiddenForm(prev => !prev)
  }
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
    if (a && questionData.tema != 'Seleccionar Tema' && questionData.tema != '' && temp.text1 != '' && temp.text2 != '' && temp.text3 != '' && temp.text4 != '' && questionData.text != '') {
      a = 0;
      answerData[0].text = temp.text1;
      answerData[1].text = temp.text2;
      answerData[2].text = temp.text3;
      answerData[3].text = temp.text4;
      //Devolvemos los elementos a su valor original
      axios.post('/question', questionData)
        .then(res => {setTemp({text1: '', text2: '', text3: '', text4: ''})
      });
      console.log(temp);
      setQuestionData({text: '', tema: ''});
      const radius = document.getElementsByName('radius');
      for (let i = 0; i < radius.length; i++)
        radius[i].checked = false;
      document.getElementById('topics').value = "Seleccionar Tema";
      alert("Pregunta subida con éxito");
    } else alert("Falta completar cosas");
  };

  return (
    <div>
    <form onSubmit={e => {e.preventDefault()}}>
    <div className="form">
 <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
 <div className="carousel-indicators  h-0">
 <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
 <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
 <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active"></button>
 <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" className="" aria-current=""></button>
 <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5" className=""></button>
 </div>
 <div className="carousel-inner ">
 <div className="carousel-item">
 <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

 <div className="container ">
 <div className="carousel-caption text-start  h-100">
 <p className = "text-center  fs-3">Antezana Valentin</p>
 <div>
 <p className="text-center">
 <a className="btn btn-warning" href="https://github.com/AntezanaValentin">AntezanaValentin</a>
 </p>
 </div>
 </div>
 </div>
 </div>
 <div className="carousel-item">
 <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

 <div className="container">
 <div className="carousel-caption text-end h-100 ">
 <p className="text-center ">
 <p className="text-center fs-3 ">Byron Urriza</p>
 <p className="btn btn-warning"><a href="https://github.com/ByronEsteban" className="nav-link px-2 text-dark">ByronEsteban</a></p>
 </p>
 </div>
 </div>
 </div>

 <div className="carousel-item active">
 <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

 <div className="container ">
 <div className="carousel-caption h-100 ">
 <h1>Preguntados la35</h1>
 <p className="btn btn-warning"><a href="#preguntas" className="nav-link px-2 text-dark h-100">¡Subir preguntas!</a></p>
 </div>
 </div>
 </div>
 <div className="carousel-item ">
 <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

 <div className="container">
 <div className="carousel-caption text-end h-100 ">
 <p className="text-center ">
 <p className="text-center fs-3">Federico Heredia</p>
 <p className="btn btn-warning"><a href="https://github.com/FedericoHeredia28" className="nav-link px-2 text-dark">FedericoHeredia28</a></p>
 </p>
 </div>
 </div>
 </div>
 <div className="carousel-item">
 <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"></svg>

 <div className="container">
 <div className="carousel-caption text-end h-100">
 <p className="text-center">
 <p className="text-center fs-3">Ignacio Lesta</p>
 <p className="btn btn-warning"><a href="https://github.com/elpeckelesta" className="nav-link px-2 text-dark">ElPeckeLesta</a></p>
 </p>
 </div>
 </div>
 </div>
 </div>
 <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
 <span className="visually-hidden">Previous</span>
 </button>
 <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
 <span className="carousel-control-next-icon" aria-hidden="true"></span>
 <span className="visually-hidden">Next</span>
 </button>
 </div>
 </div>

 <div className="nobody" id="preguntas" hidden={!hiddenForm}>
 <svg></svg>
 <div className="text-center">
   <button className="btn btn-warning" onClick={changeHiddenForm}>Hacer Pregunta</button>
   </div>
   <svg>
   </svg>
 </div>
    <div>
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
        type="text"
        name="text"
        onChange={e => {
          setQuestionData({...questionData, text: e.target.value});
          a++;
        }
        }
        value={questionData.text}
      />

      <br />
      <br />
      <label>Respuesta 1: </label>
      <input
        type="text"
        name= "0"
        onChange={e => setTemp({...temp, text1: e.target.value})}
        value={temp.text1}
      />
      <input name="radius" onChange={handleChange} type="radio" />
      <br />
      <br />
      <label>Respuesta 2: </label>
      <input
        type="text"
        name="1"
        onChange={e => setTemp({...temp, text2: e.target.value})}
        value={temp.text2}
      />
      <input name="radius" onChange={handleChange} type="radio" />
      <br />
      <br />

      <label>Respuesta 3: </label>
      <input
        type="text"
        name="2"
        onChange={e => setTemp({...temp, text3: e.target.value})}
        value={temp.text3}
      />
      <input name="radius" onChange={handleChange} type="radio" />
      <br />
      <br />

      <label>Respuesta 4: </label>
      <input
        type="text"
        name="3"
        onChange={e => setTemp({...temp, text4: e.target.value})}
        value={temp.text4}
      />
      <input name="radius" onChange={handleChange} type="radio" />
      <br />

      <button onClick={addAnswer}>Mandar </button>
      </div>
      </form>
    </div>
  );
};

export default Form;

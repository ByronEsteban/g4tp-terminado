const Question = props => {

  const { text, tema, answers } = props.question;

  return (
    <div>
      <h2>{text}</h2>
      {answers.map((answer, idx) => (
        <div key={idx}>
          <label>{answer.text}</label>
          <input type="radio" name={text}/>
          <br />
        </div>
      ))}
      <h4>Tema: {tema}</h4>
    </div>
  );
};

export default Question;

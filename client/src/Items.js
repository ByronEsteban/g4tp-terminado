const Question = props => {

  const { text, tema, answers } = props;

  return (
    <div>
      <h2>{text}</h2>
      {answers.map((answer, idx) => (
        <div key={idx}>
          <label>
      ))}
    </div>
  );
};

export default Question;

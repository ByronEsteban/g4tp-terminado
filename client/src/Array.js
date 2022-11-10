// import { useEffect, useState } from 'react';
// import axios from 'axios';
//
// const Array = props => {
//
//   const [questions, setQuestions] = useState([]);
//
//   useEffect(() => {
//     axios.get('/question/preguntas')
//       .then(res => {
//        //  console.log(res.data);
//        //  let merca = {
//        //   "Matematica": res.data.filter(question => question.tema == "Matemática"),
//        //   "Inglés": res.data.filter(question => question.tema == "Inglés"),
//        //   "Historia": res.data.filter(question => question.tema == "Historia"),
//        //   "Dragon Ball": res.data.filter(question => question.tema == "Dragon Ball"),
//        //   "Fulbo": res.data.filter(question => question.tema == "Fulbo"),
//        //   "Marvel": res.data.filter(question => question.tema == "Marvel")
//        // }
//        // console.log(merca);
//        console.log(res.data);
//        setQuestions(res.data);
//       })
//       .catch(err => console.log(err));
//       console.log(questions);
//   },[]);
//
//
//   return (
//     <div>
//       {questions}
//     </div>
//   );
//
// };
//
// export default Array;

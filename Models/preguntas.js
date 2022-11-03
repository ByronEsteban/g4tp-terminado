import mongoose from 'mongoose';

// const [answerData, setAnswerData] = useState({
//   answer1: {text1: '', correct1: Boolean},
//   answer2: {text2: '', correct2: Boolean},
//   answer3: {text3: 'pINGUINO RA', correct3: Boolean},
//   answer4: {text4: '', correct4: Boolean}
// });
//
//
// const [formData, setFormData] = useState({
//   text: '',
//   answers: [answerData]
// });

const answerSchema = new mongoose.Schema({
  answer1: {text: String, correct: Boolean},
  answer2: {text: String, correct: Boolean},
  answer3: {text: String, correct: Boolean},
  answer4: {text: String, correct: Boolean}
}, {_id: false});

const questionSchema = new mongoose.Schema({
  text: String,
  answers: [answerSchema]
});

const Question = mongoose.model('Question', questionSchema);

export default Question;

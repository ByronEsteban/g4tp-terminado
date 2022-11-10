import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
  answer1: {text: String, correct: Boolean},
  answer2: {text: String, correct: Boolean},
  answer3: {text: String, correct: Boolean},
  answer4: {text: String, correct: Boolean}
}, {_id: false});

const questionSchema = new mongoose.Schema({
  text: String,
  tema: String,
  answers: [answerSchema]
});

const Question = mongoose.model('Question', questionSchema);

export default Question;

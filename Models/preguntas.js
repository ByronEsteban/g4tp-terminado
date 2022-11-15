import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({text: String, correct: Boolean}, {_id: false});

const questionSchema = new mongoose.Schema({
  text: String,
  tema: String,
  answers: [answerSchema]
});

const Question = mongoose.model('Question', questionSchema);

export default Question;

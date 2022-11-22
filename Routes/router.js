import express from 'express';
import Controller from '../Controller/controller.js';

const router = express.Router();

router.route('/question')
  .get(Controller.getAllQuestions)
  .post(Controller.createQuestion)

router.route('/question/:id')
  .get(Controller.getQuestionsById)
  .put(Controller.updateQuestion)
  .delete(Controller.deleteQuestion);

export default router;

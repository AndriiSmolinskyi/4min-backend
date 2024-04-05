const Router = require('express');
const router = new Router();
const PostController = require('../controller/post.controller');

router.post('/user/sendHomework', PostController.sendHomework);
router.put('/user/editHomework', PostController.editHomework);

router.post('/teacher/postFeedback', PostController.editFeedback);
router.put('/teacher/editFeedback', PostController.editFeedback);
router.put('/teacher/editStatus', PostController.editStatus);

router.get('/teacher/getHomeworkByGroup/:group_id', PostController.getHomeworkByGroup);
router.get('/teacher/getHomeworkByLessonAndGroup', PostController.getHomeworkByLessonAndGroup);
router.get('/teacher/getHomeworkByUserAndLessonAndGroup', PostController.getHomeworkByUserAndLesson); 

module.exports = router;
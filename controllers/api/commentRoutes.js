const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  console.log(req.body, 'COMMENT ROUTE HIT');
  try {
    const newComment = await Comment.create({
      where: {
        comment_desc: req.body.comment_desc,
        user_id: req.session.user_id
      }
    });
    console.log('CREATED', newComment);
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

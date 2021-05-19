const router = require('express').Router();
const { Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:blogId', async (req, res) => {
  console.log(req.body, 'COMMENT ROUTE HIT');
  try {
    const newComment = await Comment.create({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      },
      comment_desc: req.body.comment_desc,
      blog_id: req.session.blog_id
    });
    console.log(newComment);
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

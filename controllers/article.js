const models = require('../models')
const Article = models.article
const Comment = models.comment
const Category = models.category
const User = models.user


exports.article = (req, res) => {
  Article.findAll({
    where: {id: req.params.id},
    include:
    [
      {
        model: Category,
        as: "categoryId"
      },
      {
        model: Comment,
        as: "commentId", include:
        [
          {
            model: User,
            as: "userId"
          }
        ]
      }
    ]
  })
  .then(articles => res.send(articles))
  .catch(err => res.send(err))
}

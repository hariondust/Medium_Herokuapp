const models = require('../models')
const Article = models.article
const User = models.user
const Category = models.category

exports.selectAll = (req, res) => {
  Article.findAll({
    include:
    [
      {
        model: Category,
        as: "categoryId"
      },
      {
        model: User,
        as: "userId"
      }
    ]
  })
  .then(articles => res.send(articles))
  .catch(err => res.send(err))
}

exports.showlatestArticle = (req, res) => {
  Article.findAll({
    include:
    [
      {
        model: Category,
        as: "categoryId"
      },
      {
        model: User,
        as: "userId"
      }
    ]
  })
  .then(articles => res.send(articles))
  .catch(err => res.send(err))
}

exports.store = (req, res) => {
  Article.create({name:req.body.name}).then(articles => {
    res.send({articles})
  })
}

exports.showCategoryfirst = (req, res) => {
  Category.findOne({
    where: {id : req.params.id},
      include:
      [{
          model: Article,
          as: "categoryId", include:
          [{
              model: User,
              as: "userId"
          }]
        }]
  })
  .then(articles => res.send(articles))
  .catch(err => res.send(err))
}

const models = require('../models')
const Category = models.category

exports.selectAll = (req, res) => {
  Category.findAll()
  .then(categories => res.send(categories))
  .catch(err => res.send(err))
}

exports.inputData = (req, res) => {
  Category.create({name:req.body.name}).then(categories => {
    res.send({categories})
  })
}

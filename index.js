require('express-group-routes')
//Init Body parser
const bodyParser = require('body-parser')
//instantiate express module
const express = require('express')
// use express in app variable
const app = express()
//define the server port
const port = process.env.PORT || 5000

const CategoryControllers = require('./controllers/category')
const HomeControllers = require('./controllers/home')
const ArticleControllers = require('./controllers/article')

//allow this app to receive incoming json request
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");
  res.header("Access-Control-Allow-Method", "*");
  next();
});

// *****number 5 and 8 belom di implementasiin*****
app.get("/", (req, res) => {
    res.send("Test");
})

app.group("/api/v1", (router) =>{
  // routing for SHOW all category - number 1
  router.get('/categories', CategoryControllers.selectAll)
  // routing for ADD new category - number 1
  router.post('/category', CategoryControllers.inputData)
  // routing for SHOW all articles based on category - number 2
  router.get('/articles', HomeControllers.selectAll)
  // routing for popular article with descending order - number 2
  router.get('/latestarticles', HomeControllers.showlatestArticle)
  // routing for SHOW all article based on category inside of category - number 3 and 8
  router.get('/category/:id', HomeControllers.showCategoryfirst)
  // routing for SHOW article detail - number 5
  router.get('/article/:id', ArticleControllers.article)

  })


//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))

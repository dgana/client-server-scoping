var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/skills', function (req, res) {
  res.json(['New Skill', 'Old Skill'])
})

router.get('/meals', function (req, res) {
  res.json(['Burger', 'Hotdog', 'Pizza', 'Spaghetti', 'Soup'])
})

module.exports = router

const express = require('express')
const router = express.Router()
const Item = require("../models/itemSchema")



router.get('/', function(req, res) {
  res.send('hi')
})

router.get('/api/customer/items')
// TODO: get a list of items

router.post('/api/customer/items/:itemId/purchases')
// TODO: purchase an item

router.get('/api/vendor/purchases/')
// TODO: get a list of all putchases with their item and date/time

router.get('/api/vendor/money')
// TODO: gat a total amount of money accepted by the machine

router.post('/api/vendor/items', function(req, res){
// TODO: add a new item not previouslt existing in the machine
  const item = new Item()
  item.description = req.body.description;
  item.save()
  .then(function (item){
    res.json(item)
  })
  .catch(function(error){
    res.status(418).json(error)
  })
})

router.put('/api/vendor/items/:itemId')
// TODO: update item quantity, description and cost


module.exports = router

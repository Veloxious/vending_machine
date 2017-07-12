const express = require('express')
const router = express.Router()

router.get('/api/customer/items')
// TODO: get a list of items

router.post('/api/customer/items/:itemId/purchases')
// TODO: purchase an item

router.get('/api/vendor/purchases/')
// TODO: get a list of all putchases with their item and date/time

router.get('/api/vendor//money')
// TODO: gat a total amount of money accepted by the machine

router.post('/api/vendor/items')
// TODO: add a new item not previouslt existing in the machine

router.put('/api/vendor/items/:itemId')
// TODO: update item quantity, description and cost


module.exports = router

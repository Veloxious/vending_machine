// customer gets list of current items, costs and quantities.
//
// customer should be able to buy an item using money.
//
//customer should be able to to get change for paying over the cost.
//
//customer should not be able to buy items not in the machine get error.
//
//vendor should be able to see total ammount of money in machine.
//
//vendor should be able to see list of purchases and time of purchase.
//
//vendor should be able to update discription, quantity and costs of items.
//
// vendor should be able to add new item to machine.
//

const app = require('../app.js')
const chai = require('chai')
const request = require('supertest')
const assert = chai.assert
const Item = require("../models/itemSchema")

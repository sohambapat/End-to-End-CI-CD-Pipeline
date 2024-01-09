// app.js

const express = require('express')
const { coffees, orders } = require('./data')

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.static('public'))
module.exports = app

// Endpoint to fetch available coffees
app.get('/coffees', (req, res) => {
  res.json(coffees)
})

// Endpoint to place an order
app.post('/order', (req, res) => {
  const { coffeeId, quantity } = req.body

  const coffee = coffees.find(c => c.id === coffeeId)

  if (!coffee) {
    return res.status(400).json({ error: 'Invalid coffee ID' })
  }

  const order = {
    orderId: orders.length + 1,
    coffeeName: coffee.name,
    quantity,
    total: coffee.price * quantity
  }

  orders.push(order)

  res.status(201).json(order)
})

// Endpoint to fetch all orders
app.get('/orders', (req, res) => {
  res.json(orders)
})

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})

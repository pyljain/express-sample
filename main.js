const express = require('express')
const app = express()

app.listen(80, () => {
	console.log('Server started')
})

app.get('/', (req, res) => {
	res.send('This is server 1')
})

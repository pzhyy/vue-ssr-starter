const fs = require('fs')
const generate = require('./generate')

const data = generate()

fs.writeFile('db.json', JSON.stringify(data, null, '  '), error => {
  if (error) {
    console.log('Write file error:', error)
  }
})

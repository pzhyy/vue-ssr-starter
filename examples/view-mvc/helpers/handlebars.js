const fecha = require('fecha')

exports.eq = (a, b, options) => {
  if (a === b) {
    return options.fn(this)
  } else {
    return options.inverse(this)
  }
}

exports.add = (value, num, options) => {
  return Number(value) + num
}

exports.formatDate = (date, formart, options) => {
  return fecha.format(new Date(date), formart)
}

import LRU from 'lru-cache'

const defaultOptions = {
  useCache: true,
  max: 1000,
  maxAge: 15 * 60 * 1000,
  debug: false
}

export default (options = {}) => {
  const config = { ...defaultOptions, ...options }
  const debug = config.debug ? (...args) => console.log(...args) : () => {}
  const cacheStore = new LRU(config)

  return (req, res, next) => {
    const key = req.originalUrl

    debug('key:', key)

    if (/_nuxt/.test(key)) {
      debug('Ingore key:', key)
      next()
      return
    }

    if (!config.useCache) {
      debug('Cache closed')
      next()
      return
    }

    const cacheData = cacheStore.get(key)
    if (cacheData) {
      debug('Cache hit')
      res.end(cacheData, 'utf-8')
      return
    }

    // Override the res.end() method
    res.originalEnd = res.end
    res.end = (data, encoding) => {
      debug(`Add the key '${key}' to cache store`)
      cacheStore.set(key, data)
      res.originalEnd(data, encoding)
    }

    next()
  }
}

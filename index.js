
module.exports = function stringify(obj) {
  if (typeof obj != 'object' || obj == null) return JSON.stringify(obj)

  if (Array.isArray(obj)) {
    var out = []
    for (var i = 0; i < obj.length; i++) {
      out.push(stringify(obj[i]))
    }
    return '[' + out.join(',') + ']'
  }

  if (typeof obj.toJSON == 'function') return stringify(obj.toJSON())

  var keys = Object.keys(obj).sort()
  var out = []
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]
    out.push(JSON.stringify(key) + ':' + stringify(obj[key]))
  }
  return '{' + out.join(',') + '}'
}

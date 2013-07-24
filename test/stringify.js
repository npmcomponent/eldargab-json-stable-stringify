var should = require('should')
var stringify = require('../')

describe('stringify()', function() {
  it('Should stringify primitives', function() {
    stringify(5).should.equal('5')
    stringify('hello').should.equal('"hello"')
  })

  it('Should stringify arrays', function() {
    stringify([10, 20, 30]).should.equal('[10,20,30]')
  })

  it('Should sort object keys before stringifying', function() {
    stringify({d: 6, a: 10, hello: 'world'})
      .should.equal('{"a":10,"d":6,"hello":"world"}')
  })

  it('Should stringify deep objects', function() {
    stringify({a: {b: [1, 2]}}).should.equal('{"a":{"b":[1,2]}}')
  })

  it('Should respect .toJSON()', function() {
    var obj = {a: 10, toJSON: function() {return this.a}}
    stringify(obj).should.equal('10')
  })
})

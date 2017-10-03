const should                = require('should')
const { min, max, average } = require('../lib')

describe('Average Function', () => {
    it('should return the average of array', (done) => {
        const avg = average([1, 2, 3, 4])
        avg.should.equal(2.5)
        done()
    })
})

describe('Min Function', () => {
  it('should return the minimum of array', (done) => {
    const min_value = min([1, 2, 3, 4])
    min_value.should.equal(1)
    done()
  })
})

describe('Max Function', () => {
  it('should return the maximum of array', (done) => {
    const max_value = max([1, 2, 3, 4])
    max_value.should.equal(4)
    done()
  })
})

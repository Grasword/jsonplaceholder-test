import http from 'k6/http'
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js'

export default function testSuite() {
  describe('JSON Placeholder API test', () => {
    const response = http.get(`https://jsonplaceholder.typicode.com/todos/${__ITER + 1}`)

    expect(response.status, 'API status code').to.equal(200)
    expect(response).to.have.validJsonBody()
    expect(response.json().title.length, 'title length').to.be.above(20)
  })
}

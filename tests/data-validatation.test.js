import Client from '../model/todoModel'
import pMap from 'p-map'

// this tests SHOULD be falling!
describe('Dataset', () => {
  // bruteforce solution
  test.skip('count entries that comply to requirements', async () => {
    const TODO_TO_FETCH = 210
    let responses = []

    // fetch all todos and store them in to array
    for (let i = 0; i < TODO_TO_FETCH; i++) {
      const response = await Client.fetch(`todos/${i}`)
      responses.push(response)
    }

    // validate response statuses
    responses = responses.filter((r) => r.status === 200)

    // check if data is an object
    // All objects (with the exception of objects created with Object.create(null)) will have a constructor property. Objects created without the explicit use of a constructor function (i.e. the object and array literals) will have a constructor property that points to the Fundamental Object constructor type for that object.
    responses = responses.filter((r) => r.data.constructor.name === 'Object')

    // validate objects
    responses = responses.filter((r) => r.data.title.length > 20)
    expect(responses.length).toBe(TODO_TO_FETCH)
  })

  // optimize array path through
  test.skip('count entries that comply to requirements', async () => {
    const TODO_TO_FETCH = 210
    let valid = []

    // fetch all todos and store them in to array
    for (let i = 0; i < TODO_TO_FETCH; i++) {
      const r = await Client.fetch(`todos/${i}`)

      if (r.status === 200 && r.data.constructor.name === 'Object' && r.data.title.length > 20) {
        valid.push(r)
      }
    }

    expect(valid.length).toBe(TODO_TO_FETCH)
  })

  // fetch data concurrently
  test('count entries that comply to requirements', async () => {
    const TODO_TO_FETCH = 210
    const MAX_CONCURRENCY = 2

    const paths = Array.from({ length: TODO_TO_FETCH }, (_, i) => `todos/${i + 1}`)
    const results = await pMap(paths, Client.fetch, { concurrency: MAX_CONCURRENCY })

    const valid = results.filter(
      (r) => r.status === 200 && r.data.constructor.name === 'Object' && r.data.title.length > 20
    )

    expect(valid.length).toBe(TODO_TO_FETCH)
  })
})

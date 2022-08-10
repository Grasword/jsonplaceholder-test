import Client from '../client'

const ID_LIST = Array.from({ length: 210 }, (_, i) => i + 1)

describe('Dataset', () => {
  test.each(ID_LIST)('todos/%d complies to requirements', async (id) => {
    const { status, data } = await Client.fetch(`todos/${id}`)

    expect(status).toBe(200)
    expect(data.constructor.name).toBe('Object')
    expect(data.title.length).toBeGreaterThan(20)
  })
})

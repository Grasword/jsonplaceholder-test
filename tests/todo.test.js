import Client from '../model/todoModel'

describe('Todo', () => {
  test('remote API returns 200', async () => {
    const { status } = await Client.fetch('todos/1')
    expect(status).toBe(200)
  })

  test('remote API returns 404 on nonexisting id', async () => {
    const { status } = await Client.fetch('todos/201')
    expect(status).toBe(404)
  })

  test('return data is an object', async () => {
    const { data } = await Client.fetch('todos/1')
    expect(data).toMatchSnapshot()
  })

  test('completed should be boolean and title should be string', async () => {
    const response = await Client.fetch('todos/1')
    const todo = Client.formatTodo(response.data)
    expect(todo).toEqual(
      expect.objectContaining({
        completed: expect.any(Boolean),
        title: expect.any(String)
      })
    )
  })

  test('returns 120 items', async () => {
    const { data } = await Client.fetch('todos', 120)
    expect(data.length).toBe(120)
  })

  // TODO returns 404
  test('returns 404 with invalid range of todos', async () => {
    const { status } = await Client.fetch('todos', 201)
    expect(status).toBe(404)
  })
})

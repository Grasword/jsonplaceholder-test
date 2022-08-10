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

  test('completed property should be boolean and title should be string', async () => {
    const response = await Client.fetch('todos/1')
    const todo = Client.formatTodo(response.data)
    expect(todo).toMatchSnapshot({
      completed: expect.any(Boolean),
      title: expect.any(String)
    })
  })

  test('limit return data to 120 items', async () => {
    const { data } = await Client.fetch('todos')
    const slicedData = Client.limit(data, 0, 120)
    expect(slicedData.length).toBe(120)
  })
})

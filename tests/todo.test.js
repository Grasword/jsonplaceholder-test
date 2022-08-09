import ToDoModel from '../model/todoModel'

describe('Todo', () => {
  test('remote API returns 200', async () => {
    const { status } = await ToDoModel.fetch()
    expect(status).toBe(200)
  })

  test('return data is an object', async () => {
    const { data } = await ToDoModel.fetch()
    expect(data).toMatchSnapshot()
  })

  test('formatted todo complies to requirements', async () => {
    const response = await ToDoModel.fetch()
    const todo = ToDoModel.formatTodo(response.data)
    expect(todo).toMatchSnapshot()
  })

  test('completed should be boolean and title should be string', async () => {
    const response = await ToDoModel.fetch()
    const todo = ToDoModel.formatTodo(response.data)
    todo.forEach((t) => {
      expect(typeof t.title).toBe('string')
      expect(typeof t.completed).toBe('boolean')
    })
  })

  test('returns 120 items', async () => {
    const { data } = await ToDoModel.fetch(120)
    expect(data.length).toBe(120)
  })
})

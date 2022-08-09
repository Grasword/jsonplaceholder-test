import { baseUrl } from '../configs/AppConfig.js'
import axios from 'axios'

class ToDoModel {
  static async fetch(limit) {
    try {
      const response = await axios.get(baseUrl)
      response.data = response.data.slice(0, limit)
      return response
    } catch (e) {
      return e.response
    }
  }

  static formatTodo(todo) {
    return todo.map(({ title, completed }) => {
      return { title, completed }
    })
  }
}

export default ToDoModel

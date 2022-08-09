import { baseUrl } from '../configs/AppConfig.js'
import axios from 'axios'

class Client {
  static async fetch(path, limit) {
    const url = new URL(path, baseUrl)

    try {
      if (limit) {
        const response = await axios.get(url.href)
        response.data = response.data.slice(0, limit)
        return response
      } else {
        return await axios.get(url.href)
      }
    } catch (e) {
      return e.response
    }
  }

  static formatTodo(todo) {
    if (Array.isArray(todo)) {
      return todo.map(({ title, completed }) => {
        return { title, completed }
      })
    } else {
      const { title, completed } = todo
      return { title, completed }
    }
  }
}

export default Client

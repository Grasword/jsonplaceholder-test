import { baseUrl } from '../configs/AppConfig.js'
import axios from 'axios'

class Client {
  static async fetch(path) {
    const url = new URL(path, baseUrl)

    try {
      return await axios.get(url.href)
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

  static limit(data, from, to) {
    return data.slice(from, to)
  }
}

export default Client

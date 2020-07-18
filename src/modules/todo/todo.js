import _todos from "@/api/todo-api";

const TODOS_STORE = {
  state: {
    todos: _todos
  },

  getters: {
    getTodos: state => {
      return state.todos
    },
    getDoneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    getActiveTodos: state => {
      return state.todos.filter(todo => !todo.done)
    }
  },

  mutations: {
    toggleCompleteTodo: (state, todo) => {
      const _todo = state.todos.find(item => item.id === todo.id)
      _todo.done = !_todo.done
    },
    deleteTodo: (state, todo) => {
      const todo_index = state.todos.findIndex(item => item.id === todo.id)
      state.todos.splice(todo_index, 1)
    },
    addTodo: (state, title) => {
      const count = state.todos.length
      state.todos.push({
        id: count + 1,
        title: title,
        done: false
      })
    }
  },

  actions: {
    addTodo: (store, title) => {
      store.commit('addTodo', title)
    }
  }
}

export default TODOS_STORE;
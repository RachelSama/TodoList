import { reactive } from 'vue';

export const store = {
  debug: true,
  state: reactive({
    todos: [
      {
        id: 1,
        title: "Learn JavaScript",
        done: false
      }, {
        id: 2,
        title: "Learn Vue",
        done: false
      }, {
        id: 3,
        title: "Play around in JSFiddle",
        done: true
      }, {
        id: 4,
        title: "Build something awesome",
        done: true
      }
    ]
  }),
  addTodoInStore(newValue) {
    if (this.debug) console.log('setMessageAction triggered with ', newValue)
    this.state.todos.push({
      id: id++,
      title: newValue,
      done: false
    })
  },
  clearAll() {
    this.state.todos.splice(0, this.state.todos.length)
  }
} 
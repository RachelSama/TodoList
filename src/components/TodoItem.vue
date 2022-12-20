<script>
import { store } from '../store'

export default {

  props: ['todo', 'index'],
  methods: {
    delTodo() {
      store.state.todos.splice(this.index,1);
    }
  }
}
</script>

<template>
  <li @dblclick="delTodo(todo.id)">
    <label>
      <input type="checkbox" v-model="todo.done">
      <del v-if="todo.done">
        {{ todo.title }}
      </del>
      <span v-else>
        {{ todo.title }}
      </span>
    </label>
  </li>
</template>
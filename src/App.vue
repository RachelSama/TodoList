<script>
import TodoList from './components/TodoList.vue'
import TodoItem from './components/TodoItem.vue';
import TodoAdd from './components/TodoAdd.vue';
import TodoDelAll from './components/TodoDelAll.vue';

export default {
  components: {
    TodoList,
    TodoAdd,
    TodoDelAll,
    TodoItem
  }
}
</script>

<template>
  <todo-list title="Cosas a hacer este año"></todo-list>
  <todo-add></todo-add>
  <br>
  <todo-del-all></todo-del-all>
</template>
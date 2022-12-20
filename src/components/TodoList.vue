<script>
import { store } from '../store'
import TodoItem from './TodoItem.vue';

export default {

    props: ['title'],
    components: {
        TodoItem
    },
    data() {
        return {
            msg: this.title,
            todos: store.state.todos
        }
    }
}
</script>

<template>
    <h2>{{ msg }}</h2>
    <ul v-if="todos.length">
        <todo-item v-for="elem,index in todos" :todo="elem" :index="index"></todo-item>
    </ul>
    <p>No hay tareas que mostrar</p>
</template>
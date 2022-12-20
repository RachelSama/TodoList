<script>
import { store } from '../store';

export default {
    data() {
        return {
            newTodo: ''
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo) {
                store.addTodoInStore(this.newTodo)
                this.newTodo = ''
            }
        }
    }
}
</script>

<template>
    <input v-model="newTodo">
    <button @click="addTodo">Añadir</button>
</template>
<script>
import { store } from '../store'

export default {
    methods: {
        delTodos() {
            if (confirm('Lo deseas borrar')) {
                store.clearAll()
            }
        }
    }
}
</script>

<template>
    <button @click="delTodos">Borrar toda la lista</button>
</template>
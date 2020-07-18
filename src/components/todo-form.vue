<template lang="html">
  <div class="add-todo">
    <v-text-field
      label="Todo"
      placeholder="What do you have to do?"
      v-model="todo"
      @keyup.enter="addTodo()"
      solo
    />
    <action-button
      says="add"
      color="success"
      @callback="addTodo()"
    />
  </div>
</template>

<script>
import ActionButton from '@/components/action-button'
import store from '@/store'

export default {
  components: {
    ActionButton
  },
  data: () => {
    return {
      todo: ''
    }
  },
  methods: {
    addTodo: function() {
      store.dispatch('addTodo', this.todo)
      this.todo = ''
    }
  }
}
</script>

<style lang="css">
.add-todo {
  display: flex;
}
</style>

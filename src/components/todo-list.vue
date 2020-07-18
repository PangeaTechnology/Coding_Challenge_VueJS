<template lang="html">
  <div>
    <template
      v-for="(todo, index) in whatToRender"
    >
      <TodoItem
        class="mb-3"
        :key="index"
        :todo="todo"
        :index="index"
      />
    </template>
  </div>
</template>

<script>
import TodoItem from '@/components/todo-item';
import store from '@/store'

export default {
  components: {
    TodoItem,
  },
  props: {
    render: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
    }
  },
  computed: {
    activeTodos() {
      return store.getters.getActiveTodos
    },
    doneTodos() {
      return store.getters.getDoneTodos
    },
    whatToRender() {
      return this[this.render]
    }
  }
}
</script>

<style lang="css">
</style>

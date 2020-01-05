<template lang="html">
  <div>
    <TodoItem class="mb-3" />
    <TodoItem class="mb-3"/>
  </div>
</template>

<script>
import TodoItem from '@/components/todo-item';

export default {
  components: {
    TodoItem,
  }
}
</script>

<style lang="css">
</style>

<template lang="html">
  <div>
    <TodoItem 
      v-for="item in todoItems"
      :key="item.id"
      :item="item"
      class="mb-3"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoItem from '@/components/todo-item';
import { READ_ITEMS } from '../../store/modules/todo';

export default {
  components: {
    TodoItem,
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      todoItems: READ_ITEMS,
    })
  },
}
</script>

<style lang="css">
</style>

<template lang="html">
  <div>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">
            {{ todo.title }}
          </h3>
        </div>
      </v-card-title>
      <action-button
        :says="todo.done ? 'Re-activate' : 'Complete'"
        @callback="toggleCompleteCb(todo)"
      />
      <action-button
        color="error"
        says="Delete"
        @callback="deleteCb(todo)"
      />
    </v-card>
  </div>
</template>

<script>

import ActionButton from '@/components/action-button'
import store from '@/store';

export default {
  components: {
    ActionButton
  },
  props: {
    todo: {
      type: Object,
      default: () => {
        return {title: '', done: false}
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data: () => {
    return {
    }
  },
  methods: {
    toggleCompleteCb: todo => {
      store.commit('toggleCompleteTodo', todo)
    },
    deleteCb: todo => {
      store.commit('deleteTodo', todo)
    }
  }
}
</script>

<style lang="css">
</style>

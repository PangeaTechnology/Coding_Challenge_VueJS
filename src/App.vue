<template>
  <v-app>
    <v-toolbar
      app
    >
      <v-toolbar-title v-text="title" />
    </v-toolbar>
    <v-content>
      <v-layout
        fill-height
        justify-center
      >
        <v-flex xs6>
          <TodoForm class="mt-5" />
          <v-tabs
            background-color="primary"
            dark
          >
            <v-tab
              href="#tab-1"
              class="w-90 mr-2"
            >
              <span>Active</span>
              <v-badge>
                <template v-slot:badge>
                  {{ activeCount }}
                </template>
              </v-badge>
            </v-tab>
            <v-tab
              href="#tab-2"
              class="w-90"
            >
              <span>Done</span>
              <v-badge>
                <template v-slot:badge>
                  {{ doneCount }}
                </template>
              </v-badge>
            </v-tab>

            <v-tab-item value="tab-1">
              <TodoList
                render="activeTodos"
              />
            </v-tab-item>
            <v-tab-item value="tab-2">
              <TodoList
                render="doneTodos"
              />
            </v-tab-item>
          </v-tabs>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import TodoForm from '@/components/todo-form'
import TodoList from '@/components/todo-list'
import store from '@/store'

export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList,
  },
  data () {
    return {
      title: 'Vue Todos',
      tab: 0
    }
  },
  computed: {
    doneCount: () => {
      return store.getters.getDoneTodos.length
    },
    activeCount: () => {
      return store.getters.getActiveTodos.length
    }
  }
}
</script>

<style lang="css">
.w-90 {
  width: 90px !important;
}
.w-90 a {
  justify-content: space-around;
}
</style>
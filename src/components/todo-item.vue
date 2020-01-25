<template lang="html">
  <v-card>
    <v-card-title primary-title>
      <div class="wrapper">
        <h3
          v-if="!editMode"
          :style="item.complete ? 'text-decoration: line-through' : ''"
          class="headline mb-0"
        >
          {{ item.data }}
        </h3>
        <v-text-field
          v-if="editMode"
          label="Todo"
          placeholder="What do you have to do?"
          solo
          clearable
          v-model="updatedValue"
          @keydown="onkeyDownHandler"
        />
        <v-btn
          v-if="!item.complete && !editMode"
          @click="onEditHandler"
          class="icon"
          icon
        >
          <v-icon>edit</v-icon>
        </v-btn>
      </div>
    </v-card-title>
    <v-btn 
      @click="onCompleteHandler"
      :disabled="item.complete"
    >
      Complete
    </v-btn>
    <v-btn 
      @click="onDeleteHandler"
      color="error"
    >
      Delete
    </v-btn>
  </v-card>
</template>

<script>
import { DELETE_ITEM, COMPLETE_ITEM, UPDATE_ITEM  } from '../../store/modules/todo';

export default {
  data() {
    return {
      editMode: false,
      updatedValue: '',
    }
  },
  props: {
    item: {
      type: Object,
      default: () => ({ data: '' }),
    },
  },
  methods: {
    onDeleteHandler() {
      this.$store.dispatch(DELETE_ITEM, this.item.id);
    },
    onCompleteHandler() {
      this.$store.dispatch(COMPLETE_ITEM, this.item.id);
   },
    onEditHandler() {
      this.editMode = true;
    },
    onkeyDownHandler(e) {
      const {
        keyCode,
        key,
        isTrusted,
        } = e;
      const isEnter = key === 'Enter' || keyCode === 13;
      const isGenuinEnter = isTrusted && isEnter;
      if (isGenuinEnter) {
        this.editItem();
      }
    },
    editItem() {
      const payload = {
        id: this.item.id,
        data: this.updatedValue
      };
      this.$store.dispatch(UPDATE_ITEM, payload)
        .then(() => {
          this.editMode = false;
        })
    },
  }
}
</script>

<style lang="css">
.wrapper {
  display: flex;
  align-items: center;
}
.headline {
  width: 70%;
}
</style>

<template lang="html">
  <v-text-field
    label="Todo"
    placeholder="What do you have to do?"
    solo
    clearable
    v-model="updatedValue"
    @keydown="onkeyDownHandler"
  />
</template>

<script>
import { CREATE_ITEM } from '../../store/modules/todo';

export default {
  data: function() {
    return {
      updatedValue: '',
    };
  },
  methods: {
    addItem() {
      const payload = this.updatedValue;
      this.$store.dispatch(CREATE_ITEM, payload)
        .then(() => {
          this.updatedValue = '';
        })
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
        this.addItem();
      }
    },
  }
}
</script>

<style lang="css">
</style>

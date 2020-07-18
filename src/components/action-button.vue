<template lang="html">
  <v-btn
    :color="color"
    @click="$emit('callback')"
  >
    {{ says }}
  </v-btn>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    says: {
      type: String,
      default: ''
    },
    callback: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="css">
</style>

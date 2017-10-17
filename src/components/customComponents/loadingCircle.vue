<template>
  <v-progress-circular
  class="progressCircle"
  indeterminate
  :size="70"
  :width="7"
  color="green"></v-progress-circular>
</template>

<script>
export default {
  name: 'LoadingCircle'
}
</script>

<style lang="stylus">
  @import '../../stylus/main'

  .progressCircle {
    position: fixed;
    top: 50%;
    left: 50%;
  }
</style>

<template>
  <v-app>
    <CurrentPhdForm></CurrentPhdForm>
  </v-app>
</template>

<script>
import CurrentPhdForm from './partials/form'

export default {
  name: 'CurrentPhdCreate',
  components: {
    CurrentPhdForm
  }
}
</script>

<style lang="stylus">
  @import '../../stylus/main'
</style>

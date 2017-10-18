<template>
  <div>
    <v-btn @click="handleClick">Hello</v-btn>
  </div>
</template>

<script>
import RouteNames from '@/router/names'
export default {
  name: 'LoginPage',
  methods: {
    handleClick () {
      this.$router.push({
        name: RouteNames.Home
      })
    }
  }
}
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>

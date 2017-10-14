<template>
  <div class="hello">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>

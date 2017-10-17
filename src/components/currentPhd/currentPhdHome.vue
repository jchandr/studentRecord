<template>
  <div>
    <router-view></router-view>
    <v-btn color="green"
    :right="true"
    :bottom="true"
    :fixed="true"
    :large="true"
    fab
    dark>
      <v-icon dark>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'CurrentPhdHome',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
  @import '../../stylus/main'
</style>

<template>
  <div>
    <router-view></router-view>
    <v-list-tile avatar @click="">
      <v-list-tile-content>
        <v-list-tile-title v-text="name"></v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-avatar>
        <img v-bind:src="item.avatar"/>
      </v-list-tile-avatar>
    </v-list-tile>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    name () {
      return this.item.First_Name + ' ' + this.item.Last_Name
    }
  },
  methods: {
    handleClick (item) {
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus">
  @import '../../../stylus/main'
</style>

<template>
  <div>
    <v-list-tile avatar @click="handleClick">
      <v-list-tile-content>
        <v-list-tile-title v-text="name"></v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-avatar class="red">
        <span class="white--text headline">{{ avatarText }}</span>
      </v-list-tile-avatar>
    </v-list-tile>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    name () {
      return this.item.First_Name + ' ' + this.item.Last_Name
    },
    avatarText () {
      return this.item.First_Name[0] + this.item.Last_Name[0]
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus">
  @import '../../../stylus/main'
</style>

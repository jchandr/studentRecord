<template>
  <div>
    <v-list-tile avatar @click="handleClick">
      <v-list-tile-content>
        <v-list-tile-title v-text="name"></v-list-tile-title>
      </v-list-tile-content>
      <v-avatar
        :tile="false"
        class="green">
        <v-flex align-center>
          <b>{{ avatarText }}</b>
        </v-flex>
      </v-avatar>
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
      return this.item.firstName + ' ' + this.item.lastName
    },
    avatarText () {
      return this.item.firstName[0] + this.item.lastName[0]
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

<template>
  <div class="list">
    <router-view></router-view>
      <ListItem v-for="item in items"
      :key="item.title"
      :item="item">
      </ListItem>
  </div>
</template>

<script>
import ListItem from './listItem'
export default {
  name: 'List',
  props: {
    items: {
      type: Array
    }
  },
  components: {
    ListItem
  }
}
</script>

<style lang="stylus">
  @import '../../../stylus/main'

  .list
    margin-top: 5%;
</style>

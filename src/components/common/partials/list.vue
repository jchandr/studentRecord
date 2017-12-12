<template>
  <div class="list">
      <ListItem v-for="item in items"
      :key="item.title"
      :item="item"
      @click="handleItemClick(item)">
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
  methods: {
    handleItemClick (item) {
      this.$emit('itemClick', item)
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

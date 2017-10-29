<template>
  <div>
    <router-view></router-view>
    <LoadingCircle v-if="isLoading"></LoadingCircle>
    <List :items="items"></List>
    <v-btn color="green"
    :right="true"
    :bottom="true"
    :fixed="true"
    :large="true"
    @click="handleAdd"
    fab
    dark>
      <v-icon dark>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
import LoadingCircle from '@/components/customComponents/loadingCircle'
import RouteNames from '@/router/names'
import List from '@/components/common/partials/list'
import Records from '@/db'

export default {
  name: 'CurrentPhdHome',
  data () {
    return {
      isLoading: false,
      items: undefined
    }
  },
  created () {
    this.isLoading = true
    this.getStudentRecords()
  },
  methods: {
    handleAdd () {
      this.$router.push({
        name: RouteNames.CurrentPhd.Create
      })
    },
    getStudentRecords () {
      Records.getPhDStudentRecords(this).then(({body}) => {
        this.items = body.res
        this.isLoading = false
      })
    }
  },
  components: {
    LoadingCircle,
    List
  }
}
</script>

<style lang="stylus">
  @import '../../stylus/main'
</style>

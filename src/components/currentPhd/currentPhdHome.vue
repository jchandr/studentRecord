<template>
  <div>
    <router-view></router-view>
    <LoadingCircle v-if="isLoading"></LoadingCircle>
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
import auth from '@/auth'
import RouteNames from '@/router/names'

export default {
  name: 'CurrentPhdHome',
  data () {
    return {
      isLoading: true
    }
  },
  beforeCreate () {
    if (!auth.checkAuth) {
      this.$router.push({
        name: RouteNames.LoginPage
      })
    }
  },
  created () {
    this.isLoading = false
  },
  methods: {
    handleAdd () {
      this.$router.push({
        name: RouteNames.CurrentPhd.Create
      })
    }
  },
  components: {
    LoadingCircle
  }
}
</script>

<style lang="stylus">
  @import '../../stylus/main'
</style>

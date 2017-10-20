<template>
  <div>
    <router-view></router-view>
    <LoadingCircle v-if="isLoading"></LoadingCircle>
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
  components: {
    LoadingCircle
  },
  route: {
    canActivate () {
      return auth.user.authenticated
    }
  }
}
</script>

<style lang="stylus">
  @import '../../stylus/main'
</style>

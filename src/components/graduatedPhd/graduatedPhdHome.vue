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

export default {
  name: 'GraduatedPhdHome',
  data () {
    return {
      isLoading: true
    }
  },
  created () {
    this.isLoading = false
  },
  components: {
    LoadingCircle
  }
}
</script>

<style lang="stylus">
  @import '../../stylus/main'
</style>

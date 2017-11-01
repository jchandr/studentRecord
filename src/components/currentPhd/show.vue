<template>
  <div>
    <router-view></router-view>
    <CurrentPhdForm :isCreate="false"></CurrentPhdForm>
  </div>
</template>

<script>
import CurrentPhdForm from './partials/form'
import Records from '@/db/index'

export default {
  name: 'CurrentPhdShow',
  created () {
    this.getStudentInfo()
  },
  methods: {
    getStudentInfo () {
      Records.getStudentInfo(this, parseInt(this.$route.params.id)).then(({body}) => {
        console.log(body)
      })
    }
  },
  components: {
    CurrentPhdForm
  }
}
</script>

<style lang="stylus">
  @import '../../stylus/main'
</style>

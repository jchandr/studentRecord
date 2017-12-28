<template>
  <div>
    <CurrentPhdForm :isCreate="false" :student="student"></CurrentPhdForm>
  </div>
</template>

<script>
  import CurrentPhdForm from './partials/form'
  import Records from '../../db/index'

  export default {
    name: 'CurrentPhdShow',
    props: {
      id: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        student: undefined
      }
    },
    methods: {
      getStudentInfo () {
        Records.getStudentInfo(this, ~~this.id).then(({response}) => {
          this.student = Object.assign({}, response[0])
        })
        Records.getStudentFudingInfo(this, ~~this.id).then(({response}) => {
          this.student.funding = Object.assign({}, response)
        })
      }
    },
    components: {
      CurrentPhdForm
    },
    created () {
      this.getStudentInfo()
    }
  }
</script>

<style lang="stylus">
  @import '../../stylus/main'
</style>

<template>
  <div>
    <StudentRecordForm :isCreate="false" :student="student" @close="handleClose"></StudentRecordForm>
  </div>
</template>

<script>
  import StudentRecordForm from '../common/partials/studentRecordForm'
  import Records from '../../db/index'
  import RouteNames from '../../router/names'

  export default {
    name: 'CurrentPhdShow',
    props: {
      id: undefined
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
        Records.getStudentFundingInfo(this, ~~this.id).then(({response}) => {
          this.student.funding = Object.assign({}, response)
        })
      },
      handleClose () {
        this.$router.push({
          name: RouteNames.CurrentPhd.Home
        })
      }
    },
    components: {
      StudentRecordForm
    },
    created () {
      this.getStudentInfo()
    }
  }
</script>

<style lang="stylus">
  @import '../../stylus/main'
</style>

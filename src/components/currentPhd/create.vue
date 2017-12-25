<template>
  <v-app>
    <StudentRecordForm :student="student"></StudentRecordForm>
  </v-app>
</template>

<script>
  import StudentRecordForm from '../common/partials/studentRecordForm'

  export default {
    name: 'CurrentPhdCreate',
    data () {
      return {
        student: {}
      }
    },
    components: {
      StudentRecordForm
    }
  }
</script>

<style lang="stylus">
  @import '../../stylus/main'
</style>

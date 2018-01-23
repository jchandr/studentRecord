<template>
  <div>
    <v-select v-bind:items="items"
              item-text="firstName"
              :label="selectorLabel"
              @input="handleInput"
              single-line
              bottom/>
  </div>
</template>

<script>
  import Records from '../../../db'

  export default {
    name: 'FacultySelector',
    props: {
      selectorLabel: {
        default: '',
        required: true
      }
    },
    data () {
      return {
        items: [],
        faculties: []
      }
    },
    methods: {
      handleInput ({facultyId}) {
        this.$emit('facultyChange', facultyId)
      }
    },
    components: {},
    created () {
      Records.getFacultyRecords(this).then(response => {
        this.items = response
      })
    }
  }
</script>

<style lang="stylus">
  @import '../../../stylus/main'
</style>

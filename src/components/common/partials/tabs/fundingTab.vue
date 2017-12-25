<template>
  <div>
    <CreateFunding :dialog="createDialog"
                   @close="handleCloseFunding"></CreateFunding>
    <pre>hellohello</pre>
    <v-btn fab dark :right="true"
           class="right"
           :bottom="true"
           @click="handleCreateFunding">
      <v-icon dark>add</v-icon>
    </v-btn>
  </div>
</template>
<script>
  import CreateFunding from '../createRecordsDialogs/createFunding'

  export default {
    name: 'FundingTab',
    props: {
      items: {
        type: Array
      }
    },
    data () {
      return {
        createDialog: false
      }
    },
    methods: {
      handleCreateFunding () {
        this.createDialog = true
      },
      handleCloseFunding () {
        this.createDialog = false
      }
    },
    components: {
      CreateFunding
    }
  }
</script>
<style lang="stylus">
  @import '../../../../stylus/main'

  .create-form
    padding: 5%
</style>

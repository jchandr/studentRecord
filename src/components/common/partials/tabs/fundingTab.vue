<template>
  <div>
    <CreateFunding :dialog="createDialog"
                   @close="handleCloseFunding"
                   @save="handleCreateFunding"></CreateFunding>
    <v-container fluid v-bind="{ [`grid-list-sm`]: true }">
      <v-layout row wrap>
        <v-flex
          xs12
          lg3
          md6
          v-for="item in items"
          :key="item"
        >
          <v-card tile color="green lighten-2">
            <v-list subheader>
              <v-list-tile avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Semester</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-avatar>
                  {{item.semesterCode}}
                </v-list-tile-avatar>
              </v-list-tile>
              <v-list-tile avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Type</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-avatar>
                  {{item.raOrTaOrGa}}
                </v-list-tile-avatar>
              </v-list-tile>
              <v-list-tile avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Stipend</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-avatar>
                  {{item.stipend}}
                </v-list-tile-avatar>
              </v-list-tile>
              <v-list-tile avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Tuition</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-avatar>
                  {{item.tuition}}
                </v-list-tile-avatar>
              </v-list-tile>
              <v-list-tile avatar>
                <v-list-tile-content>
                  <v-list-tile-title>#Credits</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-avatar>
                  {{item.numberCredits}}
                </v-list-tile-avatar>
              </v-list-tile>
              <v-list-tile avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Courses</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-avatar>
                  {{item.courses}}
                </v-list-tile-avatar>
              </v-list-tile>
              <v-list-tile avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Stipend Amount</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-avatar>
                  {{item.stipendAmount}}
                </v-list-tile-avatar>
              </v-list-tile>
            </v-list>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>delete</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>edit</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
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
  import Records from '../../../../db'

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
      handleCloseFunding () {
        this.createDialog = false
      },
      handleCreateFunding (newFunding) {
        this.createDialog = true
        Records.createStudentFundingInfo(this, ~~this.$route.params.id, newFunding).then(({response}) => {
          this.items = response
        })
      }
    },
    created () {
      Records.getStudentFundingInfo(this, ~~this.$route.params.id).then(({response}) => {
        this.items = response
      })
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

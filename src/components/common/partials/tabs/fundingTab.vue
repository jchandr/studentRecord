<template>
  <div>
    <CreateFunding :dialog="createDialog"
                   @close="handleCloseFunding"
                   @save="handleCreateFunding"
                   :newFunding="newFunding"/>
    <v-container fluid v-bind="{ [`grid-list-sm`]: true }">
      <v-layout row wrap>
        <v-flex
          xs12
          lg3
          md6
          v-for="item, n in items"
          :key="n"
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
              <v-btn icon @click="handleDeleteFunding(item, n)">
                <v-icon>delete</v-icon>
              </v-btn>
              <v-btn icon @click="handleEditFunding(item,n)">
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
           @click="createDialog = true"
           :fixed="true">
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
        createDialog: false,
        newFunding: undefined,
        fundingArrayIndex: undefined
      }
    },
    methods: {
      handleCloseFunding () {
        this.createDialog = false
      },
      handleCreateFunding (newFunding) {
        newFunding.editBy = 2
        if (newFunding.idx !== undefined) {
          Records.editStudentFundingInfo(this, ~~this.$route.params.id, newFunding).then(() => {
            this.items[this.fundingArrayIndex] = Object.assign({}, this.newFunding)
            this.fundingArrayIndex = undefined
          })
        } else {
          Records.createStudentFundingInfo(this, ~~this.$route.params.id, newFunding).then(() => {
            this.items.push(newFunding)
          })
        }
        this.createDialog = false
      },
      handleDeleteFunding (fundingToDelete, n) {
        Records.deleteStudentFundingInfo(this, ~~this.$route.params.id, fundingToDelete).then(response => {
          if (response === 1) {
            this.items.splice(n, 1)
          }
        })
      },
      handleEditFunding (fundingToEdit, n) {
        this.newFunding = fundingToEdit
        this.fundingArrayIndex = n
        this.createDialog = true
      }
    },
    created () {
      Records.getStudentFundingInfo(this, ~~this.$route.params.id).then(response => {
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

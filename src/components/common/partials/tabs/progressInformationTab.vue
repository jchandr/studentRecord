<template>
  <v-container fluid v-bind="{ [`grid-list-sm`]: true }">
    <v-layout wrap>
      <v-flex xs12 md6>
          <DatePicker picker-title="MS Admit Date"/>
      </v-flex>
      <v-flex xs12 md6>
          <DatePicker picker-title="MS Graduation Date"/>
      </v-flex>
      <v-flex xs12 md6>
        <v-card flat tile>
          <DatePicker picker-title="PhD Admit Date"/>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card flat tile>
          <h6>Competitive Exam</h6>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card flat tile>
          <DatePicker picker-title="Completion Date"/>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card flat tile>
          <h6>ABD Status</h6>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card flat tile>
          <DatePicker picker-title="Date of Admission to Candidacy"/>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card flat tile>
          <h6></h6>
          <v-switch
            label="PhD Graduation Status"
          />
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card flat tile>
          <DatePicker picker-title="Date of Award of Degree"/>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card flat tile>
          <h6>Dropped from Program</h6>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card flat tile>
          <DatePicker picker-title="Date of Drop"/>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card flat tile>
          <h6>Switched from Phd to MS</h6>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card flat tile>
          <DatePicker picker-title="Date of Switch"/>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import DatePicker from '../../selectors/datePicker'

  export default {
    name: 'ProgressInformationTab',
    components: {
      DatePicker
    }
  }
</script>
<style lang="stylus">
  @import '../../../../stylus/main'
</style>

<template>
  <div>
    <v-tabs dark grow>
      <v-tabs-bar class="green">
        <v-tabs-slider class="yellow"></v-tabs-slider>
        <v-tabs-item
          :key="funding"
          :href="'#tab-funding'">
          Funding
        </v-tabs-item>
        <v-tabs-item
          :key="dissertationCommittee"
          :href="'#tab-dissertationCommittee'">
          Dissertation Committee
        </v-tabs-item>
        <v-tabs-item
          :key="comprehensiveExam"
          :href="'#tab-comprehensiveExam'">
          Comprehensive Exam
        </v-tabs-item>
        <v-tabs-item
          :key="progress"
          :href="'#tab-progress'">
          Progress
        </v-tabs-item>
        <v-tabs-item
          :key="rpeAndProspectus"
          :href="'#tab-rpeAndProspectus'">
          RPE and Prospectus
        </v-tabs-item>
      </v-tabs-bar>
      <v-tabs-items>
        <v-tabs-content
          :key="funding"
          :id="'tab-funding'">
          <v-card flat>
            <v-card-text>
              <FundingTab/>
            </v-card-text>
          </v-card>
        </v-tabs-content>
        <v-tabs-content
          :key="dissertationCommittee"
          :id="'tab-dissertationCommittee'">
          <v-card flat>
            <v-card-text>
              dissertationCommittee content
            </v-card-text>
          </v-card>
        </v-tabs-content>
        <v-tabs-content
          :key="comprehensiveExam"
          :id="'tab-comprehensiveExam'">
          <v-card flat>
            <v-card-text>comprehensiveExam Content</v-card-text>
          </v-card>
        </v-tabs-content>
        <v-tabs-content
          :key="progress"
          :id="'tab-progress'">
          <v-card flat>
            <v-card-text>
              <ProgressInformationTab/>
            </v-card-text>
          </v-card>
        </v-tabs-content>
        <v-tabs-content
          :key="rpeAndProspectus"
          :id="'tab-rpeAndProspectus'">
          <v-card flat>
            <v-card-text>rpeAndProspectus Content</v-card-text>
          </v-card>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>
<script>
  import FundingTab from '../../common/partials/tabs/fundingTab'
  import ProgressInformationTab from '../../common/partials/tabs/progressInformationTab'

  export default {
    name: 'StudentRecordTabs',
    data () {
      return {}
    },
    components: {
      FundingTab,
      ProgressInformationTab
    }
  }
</script>
<style lang="stylus">
  @import '../../../stylus/main'
</style>

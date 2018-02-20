<template>
  <!--<pre>msAdmitDate</pre>-->
  <!--<pre>msGraduationDate</pre>-->
  <!--<pre>dateOfAdmissionToPhd</pre>-->
  <!--<pre>competetiveExam</pre>-->
  <!--<pre>dateOfCompletion</pre>-->
  <!--<pre>ABDStatus</pre>-->
  <!--<pre>dateOfAdmissionToCandidacy</pre>-->
  <!--<pre>phdGraduationStatus</pre>-->
  <!--<pre>dateOfAwardOfDegree</pre>-->
  <!--<pre>droppedFromProgram</pre>-->
  <!--<pre>dateOfDrop</pre>-->
  <!--<pre>switchedFromPhdToMs</pre>-->
  <!--<pre>dateOfSwitch</pre>-->
  <v-container fluid v-bind="{ [`grid-list-sm`]: true }">
    <v-layout row wrap>
      <v-flex xs6>
        <v-card flat tile>
          <DatePicker/>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card flat tile>
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

<template>
  <div>
    <router-view></router-view>
  <v-app>

  <v-toolbar>
    <v-toolbar-title>Student Record</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Current PhD</v-btn>
      <v-btn flat>MS(PhD Track)</v-btn>
      <v-btn flat>Current Funded MS Only</v-btn>
      <v-btn flat>Graduated PhD</v-btn>
      <v-btn flat>Graduated MS</v-btn>
    </v-toolbar-items>
  </v-toolbar>

  </v-app>
</div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }

</script>

<style lang="stylus">
  @import './stylus/main'
</style>

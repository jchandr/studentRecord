<template>
    <v-app>
    <router-view></router-view>
  <v-toolbar>
    <v-toolbar-title>Student Record</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="tool of toolBarItems"
      :key="tool.title"
      @click="handleButtonClick"
      flat>{{ tool.title }}</v-btn>

    </v-toolbar-items>
  </v-toolbar>
  </v-app>

</template>

<script>
  export default {
    data () {
      return {
        toolBarItems: [
          {
            title: 'Current Phd',
            isSelected: {
              type: Boolean,
              default: true
            }
          },
          {
            title: 'MS (Phd Track)',
            isSelected: {
              type: Boolean,
              default: false
            }
          },
          {
            title: 'Current Funded MS Only',
            isSelected: {
              type: Boolean,
              default: false
            }
          },
          {
            title: 'Graduated Phd',
            isSelected: {
              type: Boolean,
              default: false
            }
          },
          {
            title: 'Graduated MS',
            isSelected: {
              type: Boolean,
              default: false
            }
          }
        ]
      }
    },
    methods: {
      handleButtonClick () {
      }
    }
  }

</script>

<style lang="stylus">
  @import './stylus/main'
</style>

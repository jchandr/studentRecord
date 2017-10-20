<template>
  <v-app>
    <v-toolbar :fixed="true">
      <v-toolbar-title>Student Records</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="tool of toolBarItems"
        :key="tool.title"
        @click="handleButtonClick(tool)"
        flat>{{ tool.title }}</v-btn>
        <v-btn color="green"
        @click="handleLogout()">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import RouteNames from '@/router/names'
import auth from '../auth'

export default {
  name: 'Home',
  data () {
    return {
      currentUser: undefined,
      toolBarItems: [
        {
          title: 'Current Phd',
          routeName: RouteNames.CurrentPhd.Home,
          isSelected: {
            type: Boolean,
            default: true
          }
        },
        {
          title: 'MS (Phd Track)',
          routeName: RouteNames.MsPhdTrack.Home,
          isSelected: {
            type: Boolean,
            default: false
          }
        },
        {
          title: 'Current Funded MS Only',
          routeName: RouteNames.CurrentFundedMsOnly.Home,
          isSelected: {
            type: Boolean,
            default: false
          }
        },
        {
          title: 'Graduated Phd',
          routeName: RouteNames.GraduatedPhd.Home,
          isSelected: {
            type: Boolean,
            default: false
          }
        },
        {
          title: 'Graduated MS',
          routeName: RouteNames.GraduatedMs.Home,
          isSelected: {
            type: Boolean,
            default: false
          }
        }
      ]
    }
  },
  methods: {
    handleButtonClick (tool) {
      this.$router.push({
        name: tool.routeName
      })
    },
    handleLogout () {
      auth.logout(this)
    }
  }
}
</script>

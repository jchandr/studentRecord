<template>
  <div>
    <v-layout row wrap>
      <v-toolbar :fixed="true">
        <v-toolbar-title>Student Records</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y class="hidden-md-and-up">
          <v-toolbar-side-icon slot="activator" class="hidden-md-and-up">
          </v-toolbar-side-icon>
          <v-list>
            <v-list-tile v-for="tool in toolBarItems" :key="tool.title" @click="handleButtonClick(tool)">
              <v-list-tile-title>{{ tool.title }}</v-list-tile-title>
            </v-list-tile>
            <v-list-tile style="background-color: green" @click="handleLogout">
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-for="tool of toolBarItems"
                 :key="tool.title"
                 flat
                 :color="tool.isSelected ? 'green' : '' "
                 @click="handleButtonClick(tool)">{{ tool.title }}
          </v-btn>
          <v-btn color="green"
                 @click="handleLogout()">Logout
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-layout>
    <router-view></router-view>
  </div>
</template>

<script>
  import RouteNames from '../router/names'
  import CurrentPhdHome from './currentPhd/currentPhdHome'

  export default {
    name: 'Home',
    data () {
      return {
        currentUser: undefined,
        toolBarItems: [
          {
            title: 'Home',
            routeName: RouteNames.Home,
            isSelected: true
          },
          {
            title: 'Current Phd',
            routeName: RouteNames.CurrentPhd.Home,
            isSelected: false
          },
          {
            title: 'MS (Phd Track)',
            routeName: RouteNames.MsPhdTrack.Home,
            isSelected: false
          },
          {
            title: 'Current Funded MS Only',
            routeName: RouteNames.CurrentFundedMsOnly.Home,
            isSelected: false
          },
          {
            title: 'Graduated Phd',
            routeName: RouteNames.GraduatedPhd.Home,
            isSelected: false
          },
          {
            title: 'Graduated MS',
            routeName: RouteNames.GraduatedMs.Home,
            isSelected: false
          }
        ]
      }
    },
    methods: {
      handleButtonClick (tool) {
        this.toolBarItems.forEach((x) => {
          x.isSelected = false
        })
        this.$router.push({
          name: tool.routeName
        })
        this.toolBarItems.find(({title}) => {
          return title === tool.title
        }).isSelected = true
      },
      handleLogout () {
        this.$store.dispatch('logout').then(() => {
          this.$router.push({
            name: RouteNames.LoginPage
          })
        })
      }
    },
    components: {
      CurrentPhdHome
    }
  }
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>

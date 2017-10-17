import Vue from 'vue'
import Router from 'vue-router'
import RouteNames from '@/router/names'
import CurrentPhdHome from '@/components/CurrentPhdHome'
import MsPhdTrackHome from '@/components/MsPhdTrackHome'
import CurrentFundedMsOnlyHome from '@/components/CurrentFundedMsOnlyHome'
import GraduatedPhdHome from '@/components/GraduatedPhdHome'
import GraduatedMsHome from '@/components/GraduatedMsHome'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: RouteNames.CurrentPhd.Home,
    component: CurrentPhdHome
  }, {
    path: '/MsPhdTrack',
    name: RouteNames.MsPhdTrack.Home,
    component: MsPhdTrackHome
  }, {
    path: '/CurrentFundedMsOnly',
    name: RouteNames.CurrentFundedMsOnly.Home,
    component: CurrentFundedMsOnlyHome
  }, {
    path: '/GraduatedPhd',
    name: RouteNames.GraduatedPhd.Home,
    component: GraduatedPhdHome
  }, {
    path: '/GraduatedMs',
    name: RouteNames.GraduatedMs.Home,
    component: GraduatedMsHome
  }]
})

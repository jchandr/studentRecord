import Vue from 'vue'
import Router from 'vue-router'
import RouteNames from '@/router/names'
import CurrentPhdHome from '@/components/currentPhd/currentPhdHome'
import MsPhdTrackHome from '@/components/msPhdTrack/msPhdTrackHome'
import CurrentFundedMsOnlyHome from
  '@/components/currentFundedMsOnly/currentFundedMsOnlyHome'
import GraduatedPhdHome from '@/components/graduatedPhd/graduatedPhdHome'
import GraduatedMsHome from '@/components/graduatedMs/graduatedMsHome'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: RouteNames.CurrentPhd.Home,
    component: CurrentPhdHome
  }, {
    path: '/msPhdTrack',
    name: RouteNames.MsPhdTrack.Home,
    component: MsPhdTrackHome
  }, {
    path: '/currentFundedMsOnly',
    name: RouteNames.CurrentFundedMsOnly.Home,
    component: CurrentFundedMsOnlyHome
  }, {
    path: '/graduatedPhd',
    name: RouteNames.GraduatedPhd.Home,
    component: GraduatedPhdHome
  }, {
    path: '/graduatedMs',
    name: RouteNames.GraduatedMs.Home,
    component: GraduatedMsHome
  }]
})

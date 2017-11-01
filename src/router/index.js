import Vue from 'vue'
import Router from 'vue-router'
import RouteNames from '@/router/names'
import CurrentPhdHome from '@/components/currentPhd/currentPhdHome'
import CurrentPhdCreate from '@/components/currentPhd/create'
import CurrentPhdShow from '@/components/currentPhd/show'
import MsPhdTrackHome from '@/components/msPhdTrack/msPhdTrackHome'
import CurrentFundedMsOnlyHome from
  '@/components/currentFundedMsOnly/currentFundedMsOnlyHome'
import GraduatedPhdHome from '@/components/graduatedPhd/graduatedPhdHome'
import GraduatedMsHome from '@/components/graduatedMs/graduatedMsHome'
import LoginPage from '@/components/login'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: RouteNames.LoginPage,
    component: LoginPage
  }, {
    path: '/home',
    name: RouteNames.Home,
    component: Home,
    children: [{
      path: '/currentPhd',
      name: RouteNames.CurrentPhd.Home,
      component: CurrentPhdHome,
      children: [{
        path: '/currentPhd/create',
        name: RouteNames.CurrentPhd.Create,
        component: CurrentPhdCreate
      }, {
        path: '/currentPhd/:id',
        name: RouteNames.CurrentPhd.Show,
        component: CurrentPhdShow
      }]
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
  }]
})

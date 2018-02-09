import Vue from 'vue'
import Router from 'vue-router'
import RouteNames from './names'
import CurrentPhdHome from '../components/currentPhd/currentPhdHome'
import CurrentPhdCreate from '../components/currentPhd/create'
import CurrentPhdShow from '../components/currentPhd/show'
import MsPhdTrackHome from '../components/msPhdTrack/msPhdTrackHome'
import CurrentFundedMsOnlyHome from
    '../components/currentFundedMsOnly/currentFundedMsOnlyHome'
import GraduatedPhdHome from '../components/graduatedPhd/graduatedPhdHome'
import GraduatedMsHome from '../components/graduatedMs/graduatedMsHome'
import LoginPage from '../components/login'
import Home from '../components/home'
import NotFoundComponent from '../components/notFoundComponenent'
import AuthGuard from './authGuard'

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
    beforeEnter: AuthGuard,
    children: [{
      path: '/currentPhd',
      name: RouteNames.CurrentPhd.Home,
      component: CurrentPhdHome,
      beforeEnter: AuthGuard,
      children: [{
        path: '/currentPhd/create',
        name: RouteNames.CurrentPhd.Create,
        component: CurrentPhdCreate,
        beforeEnter: AuthGuard
      }, {
        path: '/currentPhd/:id',
        name: RouteNames.CurrentPhd.Show,
        component: CurrentPhdShow,
        beforeEnter: AuthGuard,
        props: true
      }]
    }, {
      path: '/msPhdTrack',
      name: RouteNames.MsPhdTrack.Home,
      component: MsPhdTrackHome,
      beforeEnter: AuthGuard
    }, {
      path: '/currentFundedMsOnly',
      name: RouteNames.CurrentFundedMsOnly.Home,
      component: CurrentFundedMsOnlyHome,
      beforeEnter: AuthGuard
    }, {
      path: '/graduatedPhd',
      name: RouteNames.GraduatedPhd.Home,
      component: GraduatedPhdHome,
      beforeEnter: AuthGuard
    }, {
      path: '/graduatedMs',
      name: RouteNames.GraduatedMs.Home,
      component: GraduatedMsHome,
      beforeEnter: AuthGuard
    }]
  },
  {
    path: '*',
    name: RouteNames.NotFoundComponent,
    component: NotFoundComponent,
    beforeEnter: AuthGuard
  }]
})

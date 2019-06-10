<template>
  <q-layout  view="hhh lpR fFf" id="q-app">
    <drawer></drawer>
    <router-view></router-view>
  </q-layout >
</template>

<script>
import drawer from '../src/layouts/system/drawerToolbar'
export default {
  name: 'App',
  components: {
    drawer
  }
}
</script>

<style>
</style>

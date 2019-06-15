<template>
  <q-layout  view="hhh lpR fFf" id="q-app">
    <drawer></drawer>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
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

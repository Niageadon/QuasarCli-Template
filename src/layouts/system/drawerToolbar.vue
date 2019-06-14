<template>
  <div>
    <q-layout view="hHh lpR fff">

      <q-header bordered class="bg-primary text-white">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="drawer = !drawer"></q-btn>

          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" alt="">
            </q-avatar>
            Title
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" side="left" overlay bordered>
        <!-- drawer content -->
      </q-drawer>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data () {
    return {
      drawer: true
    }
  },

  methods: {
    logout () {
      this.$store.dispatch('logout')
    }

  },

  computed: {

  }
}
</script>

<style scoped>

</style>

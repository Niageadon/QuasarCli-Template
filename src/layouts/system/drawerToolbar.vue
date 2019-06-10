<template>
  <div>
    <q-header  reveal bordered class="bg-deep-purple-10 text-white">
      <q-toolbar>
        <q-btn  dense flat round icon="menu" @click="drawer = !drawer"></q-btn>

        <q-toolbar-title>
          <q-btn flat to="/AssociationsMethod"><q-icon  name="home"></q-icon></q-btn>
          Boba app
        </q-toolbar-title>
        <q-btn v-if="!isUserAuthorized" class="" to="/Authentication">Login</q-btn>
        <q-btn v-else class="" @click="logout" >Logout</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" side="left" overlay elevated>
      <!-- drawer content -->
      <div class="row q-gutter-md">
        <q-btn class="col-11" to="/AssociationsMethod">AM</q-btn>
        <q-btn class="col-11" to="/EmotionsRead">RE</q-btn>
      </div>
    </q-drawer>

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
    isUserAuthorized () {
      return this.$store.getters.isUserAuthorized
    }
  }
}
</script>

<style scoped>

</style>

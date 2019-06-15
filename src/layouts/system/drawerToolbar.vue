<template>
  <div>

      <q-header bordered class="bg-primary text-white">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="drawer = !drawer"></q-btn>
          <q-toolbar-title>
            APP
          </q-toolbar-title>
          <q-btn v-if="!isUserAuthorized" class="" to="/Authentication">Login</q-btn>
          <q-btn v-else class="" @click="logout" >Logout</q-btn>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" side="left" overlay bordered>
        <!-- drawer content -->
      </q-drawer>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
    ...mapGetters(['isUserAuthorized'])
  }
}
</script>

<style scoped>

</style>

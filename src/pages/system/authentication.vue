<template>
  <!--<div class="row justify-center">
    <q-card v-if="mode === 'Login'" class="col-md-7 col-xs-12 bg-blue-grey-3 q-mt-lg">
      <q-card-section class="text-h5">
        {{mode}} form
      </q-card-section>
      <q-form
      class="row justify-center q-gutter-xs"
      @submit="doLogin">
        <q-input
          :rules="emailRules"
          class="col-md-10 col-xs-11 text-h6 q-mt-lg"
          bg-color="blue-grey-2" filled v-model="user.email" label="E-mail">
        </q-input>
        <q-input
          :rules="[ val => val && val.length > 5 || 'Minimum length is 5 simbols']"
          class="col-md-10 col-xs-11 text-h6 q-mt-md"
          bg-color="blue-grey-2" filled v-model="user.password" label="Password">
        </q-input>
        <q-btn  class="col-4 q-mb-md bg-blue-grey-5" @click="mode = 'Registration'" >registration page</q-btn>
        <q-btn  :loading="loading" class="col-6 q-mb-md bg-light-green" type="submit">Login</q-btn>
      </q-form>
    </q-card>

    <q-card v-if="mode === 'Registration'" class="col-md-7 col-xs-12 bg-blue-grey-3 q-mt-lg">
      <q-card-section class="text-h5">
        {{mode}} form
      </q-card-section>
      <q-form
          class="row justify-center q-gutter-xs"
          @submit="doLogin">
        <q-input
            :rules="emailRules"
            class="col-md-10 col-xs-11 text-h6 q-mt-lg"
            bg-color="blue-grey-2" filled v-model="user.email" label="E-mail">
        </q-input>
        <q-input
            :rules="[ val => val && val.length > 5 || 'Minimum length is 5 simbols']"
            class="col-md-10 col-xs-11 text-h6 q-mt-md"
            bg-color="blue-grey-2" filled v-model="user.password" label="Password">
        </q-input>
        <q-input
            :rules="passwordRuled"
            class="col-md-10 col-xs-11 text-h6 q-mt-md"
            bg-color="blue-grey-2" filled v-model="user.secondPassword" label="Second password">
        </q-input>
        <q-btn class="col-4 q-mb-md bg-blue-grey-5" @click="mode = 'Login'">login page</q-btn>
        <q-btn :loading="loading" class="col-6 q-mb-md bg-light-green" @click="doRegistration" type="submit" >Registration</q-btn>

      </q-form>
    </q-card>

  </div>-->
  <div>
    <h1>ff</h1>
  </div>
</template>

<script>
export default {
  name: 'Authentication',
  data () {
    return {
      mode: 'Login',
      user: { email: '', password: '', secondPassword: '' },
      emailRules: [
        val => (val && val.length > 0) || 'Please type something',
        val => /.+@.+/.test(val) || 'E-mail must be valid'
      ],
      passwordRuled: [
        val => (val && val.length > 0) || 'Please type something',
        val => val === this.user.password
      ]
    }
  },

  methods: {
    doLogin () {
      this.$store.dispatch('login', this.user)
    },
    doRegistration () {
      this.$store.dispatch('registerUser', this.user)
    }
  },

  computed: {
    loading () {
      return this.$store.getters.LOADINGUSERINFO
    }
  }
}
</script>

<style scoped>

</style>

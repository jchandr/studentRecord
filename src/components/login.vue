<template>
  <v-container fluid grid-list-xl>
    <v-layout row justify-space-between>
      <v-flex sm12 lg6 offset-lg3>
        <img width="100%"
             src="https://www.binghamton.edu/communications-and-marketing/img/logos/schools/Lockups-Watson/horizontal/green/BU-LockupH-Watson-342.png"
             alt="">
        <v-alert v-if="error"
                 color="error"
                 icon="warning"
                 value="true"
                 dismissible
                 @input="onDismissed">
          Incorrect Credentials. Please check and try again.
        </v-alert>
        <v-form v-model="valid"
                class="login-form"
                ref="form"
                lazy-validation>
          <v-text-field
            label="E-mail"
            v-model="credentials.email"
            required/>
          <v-text-field
            name="input-10-1"
            label="Enter your password"
            v-model="credentials.password"
            min="8"
            :append-icon="e1 ? 'visibility_off' : 'visibility'"
            :append-icon-cb="() => (e1 = !e1)"
            :type="e1 ? 'text' : 'password'"
            counter
            required/>
          <v-btn @click="handleLogin"
                 :disabled="!valid"
                 color="green">Login
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'LoginPage',
    data () {
      return {
        isError: false,
        e1: false,
        valid: undefined,
        credentials: {
          email: '',
          password: ''
        }
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/home')
        }
      }
    },
    methods: {
      handleLogin () {
        this.$store.dispatch('signUserIn', {
          email: this.credentials.email,
          password: this.credentials.password
        })
      },
      onDismissed () {
        this.$store.dispatch('clearError')
      }
    }
  }
</script>

<style lang="stylus">
  @import '../stylus/main'

</style>

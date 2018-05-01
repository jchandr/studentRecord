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
        <v-form v-model="isError"
                ref="credentials"
                @submit.prevent="handleLogin">
          <v-text-field
            label="E-mail"
            v-model="credentials.email"
            :rules="credentialsRules.email"
            required
            validate-on-blur/>
          <v-text-field
            name="input-10-1"
            label="Enter your password"
            v-model="credentials.password"
            :append-icon="e1 ? 'visibility_off' : 'visibility'"
            :append-icon-cb="() => (e1 = !e1)"
            :type="e1 ? 'text' : 'password'"
            :rules="credentialsRules.password"
            counter
            required/>
          <v-btn type="submit"
                 :disabled="!isError"
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
    data: function () {
      return {
        isError: false,
        e1: false,
        valid: undefined,
        credentials: {
          email: '',
          password: ''
        },
        credentialsRules: {
          email: [
            val => this.validateEmail(val) === true || 'Not a valid Email ID'
          ],
          password: [
            val => val.length > 7 || 'Password must have more than 7 characters'
          ]
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
      },
      validateEmail (stringToTest) {
        var emailRegex = new RegExp('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$', 'i')
        return emailRegex.test(stringToTest)
      }
    }
  }
</script>

<style lang="stylus">
  @import '../stylus/main'

</style>

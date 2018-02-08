<template>
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
      counter/>
    <v-btn @click="handleLogin"
           :disabled="!valid"
           color="green">Login
    </v-btn>
    <v-alert v-if="isError"
             color="error"
             icon="warning"
             value="true">
      Incorrect Credentials. Please check and try again.
    </v-alert>
  </v-form>
</template>

<script>
  export default {
    name: 'LoginPage',
    data () {
      return {
        isError: true,
        e1: false,
        valid: undefined,
        credentials: {
          email: undefined,
          password: undefined
        },
        emailRules: [
          () => {
            let emailRegExp = new RegExp('^[A-Za-z0-9]+@binghamton.edu$')
            return emailRegExp.test(this.credentials.email) ? true : 'Invalid Email'
          }
        ],
        passwordRules: [
          () => {
            return this.credentials.password.length > 7 ? true : 'At Least 8 Characters'
          }
        ]
      }
    },
    methods: {
      handleLogin () {
        // var credentials = {
        //   username: this.credentials.email,
        //   password: this.credentials.password
        // }
      }
    }
  }
</script>

<style lang="stylus">
  @import '../stylus/main'

  .login-form
    align: center;
    width: 20em;

</style>

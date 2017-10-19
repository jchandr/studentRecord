<template>
  <div>
    <v-form v-model="valid"
    class="login-form"
    ref="form"
    lazy-validation>
      <v-text-field
        label="E-mail"
        v-model="email"
        :rules="emailRules"
        required></v-text-field>
        <v-flex>
              <v-text-field
                name="input-10-1"
                label="Enter your password"
                hint="At least 8 characters"
                v-model="password"
                min="8"
                :append-icon="e1 ? 'visibility_off' : 'visibility'"
                :append-icon-cb="() => (e1 = !e1)"
                :type="e1 ? 'text' : 'password'"
                counter></v-text-field>
        </v-flex>
      <v-btn @click="submit"
      :disabled="!valid">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-form>
  </div>
</template>

<script>
import RouteNames from '@/router/names'

export default {
  name: 'LoginPage',
  data () {
    return {
      email: undefined,
      e1: false,
      password: undefined
    }
  },
  methods: {
    handleClick () {
      this.$router.push({
        name: RouteNames.Home
      })
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

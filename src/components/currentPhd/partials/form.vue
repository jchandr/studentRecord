<template>
  <v-dialog v-model="dialog"
  fullscreen
  :overlay="false"
  scrollable>
  <v-card>
      <v-toolbar style="flex: 0 0 auto;" dark class="primary" color="green">
      <v-btn icon @click.native="handleCancel" dark>
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>{{ formTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark flat @click.native="handleSave">Save</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <h5>Student Information</h5>
        <v-text-field label="Username"></v-text-field>
        <v-text-field label="B-Number"></v-text-field>
        <v-text-field label="First Name"></v-text-field>
        <v-text-field label="Last Name"></v-text-field>
        <v-text-field label="EMail"></v-text-field>
        <v-text-field label="Contact Advisor"></v-text-field>
        <v-text-field label="Current Category"></v-text-field>
      </v-form>
    </v-card-text>
  </v-card>
  </v-dialog>
</template>

<script>
import RouteNames from '@/router/names'
export default {
  name: 'CurrentPhdForm',
  data () {
    return {
      dialog: true
    }
  },
  props: {
    isCreate: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    formTitle () {
      if (this.isCreate === true) {
        return 'Create Current Phd Student'
      }
      return 'Edit Student'
    }
  },
  methods: {
    handleCancel () {
      this.$router.push({
        name: RouteNames.CurrentPhd.Home
      })
    },
    handleSave () {
    }
  }
}
</script>

<style lang="stylus">
  @import '../../../stylus/main'

  .create-form
    padding: 5%
</style>

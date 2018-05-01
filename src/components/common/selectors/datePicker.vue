<template>
  <v-menu
    lazy
    :close-on-content-click="false"
    v-model="menu"
    transition="scale-transition"
    offset-y
    full-width
    :nudge-right="40"
    max-width="290px"
    min-width="290px"
    @input="handleDateInput">
    <v-text-field
      slot="activator"
      :label="pickerTitle"
      v-model="date"
      prepend-icon="event"
      readonly/>
    <v-date-picker v-model="date" no-title scrollable actions>
      <template slot-scope="{ save, cancel }">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
          <v-btn flat color="primary" @click="save">OK</v-btn>
        </v-card-actions>
      </template>
    </v-date-picker>
  </v-menu>
</template>
<script>
  export default {
    name: 'DatePicker',
    props: {
      pickerTitle: null
    },
    data () {
      return {
        date: null,
        menu: null
      }
    },
    methods: {
      handleDateInput () {
        this.$emit('date', this.date)
      }
    }
  }
</script>

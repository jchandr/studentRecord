<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Create Funding</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-form>
                  <v-text-field label="Semester"
                                v-model="newFunding.semester"></v-text-field>
                  <v-text-field label="Type"
                                v-model="newFunding.type"></v-text-field>
                  <v-text-field label="Stipend"
                                v-model="newFunding.stipend"></v-text-field>
                  <v-text-field label="Tuition"
                                v-model="newFunding.tuition"></v-text-field>
                  <v-text-field label="#Credits"
                                v-model="newFunding.credits"></v-text-field>
                  <v-text-field label="Courses"
                                v-model="newFunding.courses"></v-text-field>
                  <v-text-field label="Stipend Amount"
                                v-model="newFunding.stipendAmount"></v-text-field>
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="$emit('close')">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="$emit('save', newFunding)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
  export default {
    name: 'CreateFunding',
    props: {
      dialog: {
        default: false
      },
      newFunding: {
        default: Object
      }
    },
    data () {
      return {}
    }
  }
</script>
<style></style>

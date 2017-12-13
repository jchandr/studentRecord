<template>
  <v-dialog v-model="dialog"
            fullscreen
            :overlay="false"
            scrollable>
    <v-card>
      <v-toolbar dark class="primary" color="green">
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
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex d-flex xs12 sm6 md4>
              <v-card>
                <v-card-title primary class="title">{{student.studentType}} Student Information</v-card-title>
                <v-card-text>
                  <v-form>
                    <v-text-field label="Username"
                                  v-model="student.username"></v-text-field>
                    <v-text-field label="B-Number"
                                  v-model="student.studentBNumber"></v-text-field>
                    <v-text-field label="First Name"
                                  v-model="student.firstName"></v-text-field>
                    <v-text-field label="Last Name"
                                  v-model="student.lastName"></v-text-field>
                    <v-text-field label="EMail"
                                  v-model="student.email"></v-text-field>
                    <v-text-field label="Contact Advisor"
                                  v-model="student.contactAdviser"></v-text-field>
                    <v-text-field label="Current Category"
                                  v-model="student.authorizeFlag"></v-text-field>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
              <v-layout row wrap>
                <v-flex d-flex>
                  <v-card color="indigo" dark>
                    <v-card-title primary class="title">Funding</v-card-title>
                    <v-card-text
                      v-text="lorem.slice(0, 1)">
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex d-flex>
                  <v-layout row wrap>
                    <v-flex d-flex
                            v-for="n in 2"
                            :key="n"
                            xs12
                    >
                      <v-card
                        color="red lighten-2"
                        dark
                      >
                        <v-card-text
                          v-text="lorem.slice(0, 40)">
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex d-flex xs12 sm6 md2 child-flex>
              <v-card color="green lighten-2" dark>
                <v-card-text
                  v-text="lorem.slice(0, 90)">
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
              <v-card color="blue lighten-2" dark>
                <v-card-text
                  v-text="lorem.slice(0, 100)">
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
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
        dialog: true,
        lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
      }
    },
    props: {
      isCreate: {
        type: Boolean,
        default: true
      },
      student: {
        type: Object,
        required: true
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

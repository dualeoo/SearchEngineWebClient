<template>
  <div>
    <v-autocomplete
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      v-model="select"
      cache-items
      hide-no-data
      hide-details
      label="What are you looking for?"
    >
    </v-autocomplete>
    <v-btn
      icon
      color="primary"
      :loading="loading">
      <v-icon>
        search
      </v-icon>
    </v-btn>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'SearchPage',
    components: {},
    data () {
      return {
        loading: false,
        items: [],
        search: null,
        select: null,
        states: [
          'Alabama',
          'Alaska',
          'American Samoa',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'District of Columbia',
          'Federated States of Micronesia',
          'Florida',
          'Georgia',
          'Guam',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Louisiana',
          'Maine',
          'Marshall Islands',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Northern Mariana Islands',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Palau',
          'Pennsylvania',
          'Puerto Rico',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'Utah',
          'Vermont',
          'Virgin Island',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming'
        ]
      }
    },
    watch: {
      search (val) {
        // val && val !== this.select && this.querySelections(val)
        val && this.querySelections(val)
      }
    },
    methods: {
      async querySelections (val) {
        this.loading = true
        let result = await axios.get(`localhost:5000/search/${val}`)
      }
    }
  }
</script>

<style scoped>

</style>

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
      :loading="loading"
      @click="queryApi"
    >
      <v-icon>
        search
      </v-icon>
    </v-btn>
  </div>
</template>
<script>

  export default {
    name: 'SearchPage',
    components: {},
    data () {
      return {
        loading: false,
        items: [],
        search: null,
        select: null
      }
    },
    watch: {
    },
    methods: {
      queryApi () {
        if (!this.search) {
          return
        }
        this.$router.push({name: 'ResultPage', params: {query: this.search}})
      }
    }
  }
</script>

<style scoped>

</style>

<template>
    <v-card hover>
        <v-card-title>
            <h3>{{this.score}}</h3>
    </v-card-title>
        <v-card-text>
            {{this.content}}
        </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'Result',
    props: ['score', 'content']
  }
</script>

<style scoped>

</style>

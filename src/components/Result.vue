<template>
  <v-card>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{this.score}}}</h3>
        <div>{{this.content}}</div>
      </div>
    </v-card-title>
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

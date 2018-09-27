<template>
    <div>
        <div class="loading" v-if="loading">
            Loading...
        </div>
        <div v-if="!loading">
            <h1>Search result for <em><q>{{this.query}}</q></em></h1>
            <template v-if="results">
                <Result v-for="(result , index) in results" :key="index" :score="result[1]"
                        :content="result[0]"></Result>
            </template>
            <template v-else>
                <v-card hover>
                    <v-card-title>
                        <h3>Sorry but there is no documents containing the query</h3>
                    </v-card-title>
                </v-card>
            </template>
        </div>
        <SearchPage></SearchPage>
    </div>
</template>

<script>
    import Result from './Result'
    import axios from 'axios'
    import SearchPage from './Search'

    export default {
        name: 'ResultPage',
        components: {SearchPage, Result},
        watch: {
            // call again the method if the route changes
            '$route': 'fetchData'
        },
        data () {
            return {
                loading: false,
                results: null
            }
        },
        created () {
            // TODOx might need to put await here > no need
            this.fetchData()
        },
        props: ['query'],
        methods: {
            async fetchData () {
                this.loading = true
                this.results = null
                try {
                    let result = await axios.get(`http://35.240.183.87:5000/search/${this.query}`)
                    if (result.status !== 200) {
                        console.warn(`Something wrong happens! Axios result status is not 200.\n${result}`)
                        return
                    }
                    let results = result.data
                    if (results.length === 0) {
                        this.results = null
                    } else {
                        this.results = results
                    }
                } catch (e) {
                    console.error(e)
                } finally {
                    this.loading = false
                }
            }
        }
    }
</script>

<style scoped>

</style>

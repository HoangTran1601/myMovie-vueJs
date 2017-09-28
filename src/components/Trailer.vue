<template>
    <div class="trailer hoang">
            <iframe width="560" height="315" :src="movieSelected.trailerPath" frameborder="0" allowfullscreen></iframe>
    </div>
</template>

<script>
    import MovieService from '../services/Movie.service.js';
    const movieService = new MovieService();
    export default {
        name: 'trailer',
        data() {
            return {
                movieSelected: {}
            }
        },
        methods: {
            getMovieById() {
                this.movieSelected = movieService.getMovieById(this.$route.params.id);
            }
        },
        created: function() {
            this.getMovieById()
        }
    }
</script>

<style scoped>
    iframe {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
</style>
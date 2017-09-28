<template>
    <div class="listMovie">
       <ul>
            <li v-for="(movie, key) in movies">
                <i class="fa fa-check" aria-hidden="true" v-bind:style="{ display: movie.favorite?'':'none'}"></i>
                <router-link :to="'/detail/' + movie.id">          
                    <img :src="movie.smallImgSrc" alt="">
                </router-link>
                
            </li>
       </ul>    
    </div>
    
</template>

<script>
    import MovieService from '../services/Movie.service.js';
    const restResourceService = new MovieService();
    export default {
        name: 'list-movie',
        data() {
            return {
                movies: {},
                isChecked: false
            }
        },
        methods: {
            getToggleClickState() {
                this.$on('hoang', function(selected){
                    return selected;
                })
            }
        },
        watch: {
            isChecked: "getToggleClickState"
        },
        created: function(){
            this.movies = restResourceService.getMovies();
            console.log(this.isChecked);
        }
    }
</script>

<style scoped>
    .listMovie {
        position: relative;
    }
    ul {
        padding: 20px 20px 40px 20px;
        margin: 0;
        box-sizing: border-box;
        width: 100%;
    }
    li {
        list-style: none;
        display: inline-block;
        width: 18%;
        margin-right: 20px;
        position: relative;
    }
    ul li:last-of-type {
        margin-right: 0;
    }
    ul li a {
        display: block;
    }
    ul li a img {
        width: 100%;
    }
    ul li i {
        position: absolute;
        right: 5px;
        top: 5px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: yellow;
        font-size: 10px;
        line-height: 15px;
    }
</style>
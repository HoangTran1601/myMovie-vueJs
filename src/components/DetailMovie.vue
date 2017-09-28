<template> 
    <div class="detail-movie hoang" :style="movieBackground" :class="movieSelected.favorite?'detail-movie-active': ''">
        <div class="curtain"></div>
        <div class="main-content">
            <div class="header">
                <nav>
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li><a href="">Films</a></li>
                        <li><a href="">Shows</a></li>
                        <li><a href="">Music</a></li>
                    </ul>
                </nav>
                <div class="logo">
                    <router-link to="/">VUEFLIX</router-link>
                </div>
            </div>
            <div class="movie-detail">
                <div class="content">
                    <h1>{{movieSelected.title}}</h1>
                    <p>{{movieSelected.duration}} | {{movieSelected.genre}} | {{movieSelected.releaseDate}}</p>
                    <p>{{movieSelected.description}}</p>
                    <div class="btn">
                        <div class="btn-play" @click="redirect">
                            <span>Play</span>
                            <i class="fa fa-play" aria-hidden="true"></i>
                        </div>
                        <div class="favourite" v-on:click="addFavorite">
                            <span v-bind:style="{ display: movieSelected.favorite?'none':''}">Add to favorites</span>
                            <span v-bind:style="{ display: movieSelected.favorite?'':'none'}">Remove from favorites</span>
                            <i class="fa fa-plus-square-o" aria-hidden="true" v-bind:style="{ display: movieSelected.favorite?'none':''}"></i>
                            <i class="fa fa-minus-square-o" aria-hidden="true"  v-bind:style="{ display: movieSelected.favorite?'':'none'}"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MovieService from '../services/Movie.service.js';
    const movieService = new MovieService();
    export default {
        name: 'detail-movie',
        data() {
            return {
                movieSelected: {},
                movieBackground: {},
                url: "",
                toggleClick: false
            }
        },
        methods: {
            getMovieById() {
                this.movieSelected = movieService.getMovieById(this.$route.params.id);
            },
            setBackground() {
                this.movieBackground = {
                backgroundImage: this.movieSelected.largeImgSrc,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
                }
            },
            addFavorite() {
                this.movieSelected.favorite = !this.movieSelected.favorite;
                movieService.updateMovieByProp(this.$route.params.id, "favorite", this.movieSelected.favorite);
            },
            toggleClickState() {
                this.$emit('hoang', this.toggleClick);
            },
            redirect() {
                // push function to navigate
                // more detail: https://router.vuejs.org/en/essentials/navigation.html
                this.$router.push('/trailer/'+ this.movieSelected.id);
            }
        },
        watch: {
            '$route': ["getMovieById", "setBackground" ],
            toggleClick: 'toggleClickState'
        },
        created: function() {
            this.url = this.$route.params.id;
            this.getMovieById()
            this.movieBackground = {
                backgroundImage: this.movieSelected.largeImgSrc,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }
        }
    }
</script>

<style scoped>
    .detail-movie {
        position: relative;
        
    }
    .detail-movie-active {
        box-shadow: 10px 10px 1em gold, -10px -10px 1em rgba(255, 213, 0, 0.85)
    }
    .curtain {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.7;
        z-index: 100;   
    }
    .main-content {
        position: relative;
        z-index: 9999;
    }
    .header {
        width: 100%;
        box-sizing: border-box;
        padding: 0 15px;
        color: #fff;
    }
    .header:after {
        content: "";
        display: block;
        clear: both;
    }
    .header nav {
        float: left;
    }
    .header ul {
        padding: 0;
    }
    .header nav li {
        display: inline-block;
    }
    .header nav li:nth-child(2) a {
        background-color: white;
        border-radius: 40%;
        color: gray;
    }
    .header ul li:nth-child(1) a {
        padding-left: 0;
    }
    .header nav a {
        display: block;
        padding: 5px 15px;
        text-decoration: none;
        color: #fff;
        font-size: 16px;
    }
    .header .logo {
        float: right;
        font-size: 18px;
        color: red;
        font-weight: 700;
        text-transform: uppercase;
        padding: 20px 0;
    }
    .header .logo a {
        color: red;
        text-decoration: none;
    }
    .movie-detail {
        padding: 0 35px;
        color: #fff;
        width: 100%;
        box-sizing: border-box;
        text-align: left;
        font-size: 15px;
    }
    .movie-detail h1 {
        font-size: 45px;
        font-weight: 700;
        margin: 0;
    }
    .movie-detail .content p:first-of-type{
        color: red;
        font-size: 15px;
        font-weight: 700;
        margin: 0 0 25px 0;
    }
    .movie-detail .content p:nth-child(3) {
        font-weight: 400;
        width: 50%;
        line-height: 22.5px;
        margin-bottom: 25px;
    }
    .btn {
        overflow: auto;
    }
    .btn:after {
        content: "";
        display: block;
        clear: both;
    }
    .btn-play {
        padding: 10px;
        background-color: #ce2424;
        float: left;
        border-radius: 40%;
        margin-right: 50px;
        cursor: pointer;
        
    }
    .btn-play i {
        margin-left: 3px;
    }
    .favourite {
        line-height: 42px;
        cursor: pointer;
    }
    .favourite i {
        margin-left: 5px;
    }
</style>
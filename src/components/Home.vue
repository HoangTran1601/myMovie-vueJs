<template>
    <div class="home hoang">
        <div class="home-content">
            <h1>VUEFLIX</h1>
            <p>Select a movie below from the list of critically acclaimed Christopher Nolan films.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .home {
        text-align: center;
        background-color: #1e1d1d;
        opacity: .95;
        color: white;
        height: 375px;
        position: relative;
        width: 100%;

    }
    .home .home-content {
        width: 340px;
        margin: 0 auto;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .home h1{
        font-size: 60px;
        font-weight: 400;
        letter-spacing: 8px;
        color: red;
        margin: 0;
    }
    .home p {
        font-size: 16px;
        color: #fff;
    }
</style>
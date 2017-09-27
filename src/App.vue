<template>
  <div id="app">
    <router-view></router-view>
    <list-movie></list-movie>
  </div>
</template>

<script>
import ListMovie from '@/components/ListMovie'
export default {
  name: 'app',
  components: {
    ListMovie
  }
}
</script>

<style>
body {
  background-color: #6f3333;
  position: relative;
  margin: 0;
  padding: 0;
}
body, html {
  height: 100%;
  font-family: 'Open Sans', sans-serif;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1020px;
  margin: 0 auto;
  height: 525px;
  background-color: #8b2228;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.hoang {
  text-align: center;
  background-color: #1e1d1d;
  opacity: .95;
  color: white;
  height: 375px;
  position: relative;
  width: 100%;
}
</style>

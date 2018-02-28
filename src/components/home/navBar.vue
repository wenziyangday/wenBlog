<template>
  <div class="navBar">
    <!--<div v-for="item in routesData">
      <router-link :to="item.path">{{item.name}}</router-link>
    </div>-->
    <router-link to="/home"><span>首页0</span></router-link>
    <router-link to="/htmlCss"><span>HTML&CSS</span></router-link>
    <router-link to="/es5Es6"><span>ES5&ES6</span></router-link>
    <router-link to="/3">VUE</router-link>
    <router-link to="/4">REACT</router-link>
    <router-link to="/5">NODE</router-link>
    <router-link to="/6">MONGODB</router-link>
    <router-link to="/7">其他</router-link>
  </div>
</template>

<script>
  export default {
    name: 'navBar',
    data() {
      return {
        routesData: []
      }
    },
    beforeMount() {
      this.routesData = this.$router.options.routes;
    },
    mounted() {
      console.table(this.$router.options.routes);
    }
  }
</script>

<style lang="stylus">
  @import "../../assets/navBar.styl";
</style>

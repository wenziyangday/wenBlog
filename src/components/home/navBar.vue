<template>
  <div class="navBar">
    <!--<div v-for="item in routesData">
      <router-link :to="item.path">{{item.name}}</router-link>
    </div>-->
    <router-link to="/home"><span>首页</span></router-link>
    <router-link to="/htmlCss"><span>HTML&CSS</span></router-link>
    <router-link to="/es5Es6"><span>ES5&ES6</span></router-link>
    <router-link to="/3"><span>VUE</span></router-link>
    <router-link to="/4"><span>REACT</span></router-link>
    <router-link to="/5"><span>NODE</span></router-link>
    <router-link to="/6"><span>MONGODB</span></router-link>
    <router-link to="/7"><span>其他</span></router-link>
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

<template>
  <div id="app">
    <SlideBanner></SlideBanner>
    <div class="hoverBanner">
      <header class="center blogTitle">
        <h1>Wen：
          <small>所有的生活都是浮云！</small>
        </h1>
      </header>
      <div class="center main">
        <div class="innerMain">
          <NavBar></NavBar>
          <div class="divideCenter">
            <div class="mainContent">
              <router-view></router-view>
            </div>
            <SidePart></SidePart>
          </div>
        </div>
      </div>
      <footer class="center footer">
        仅供个人玩乐，无所诉求
      </footer>
    </div>
  </div>
</template>

<script>
  import SlideBanner from './components/home/slideBanner';
  import NavBar from './components/home/navBar';
  import SidePart from './components/home/sidePart';
  
  export default {
    name: 'App',
    components: {
      SlideBanner, NavBar, SidePart
    }
  }
</script>

<style lang="stylus">
  @import "./static/reset.css";
  @import "./assets/app.styl";
</style>

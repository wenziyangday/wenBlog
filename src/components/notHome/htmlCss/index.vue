<template>
  <div class="htmlCss">
    {{width}}
    <div :style="width">
      {{a}} {{bb}} {{c}} {{changeWidth}} {{tes}}
      <div style="background: #ff0000; width: 350px; height: 350px;"></div>
      <button @click="te">sdfsxf</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'htmlCss',
    beforeCreate() {
      // console.log(this, 43);
    },
    data() {
      return {
        a: 10,
        bb: 15,
        c: 20,
        width: {}
      }
    },
    computed: {
      changeWidth: function () {
       /* console.log(this.a , this.bb , this.c)*/
        console.log(this, 23);
        return this.a + this.bb + this.c
      },
      tes: () => {
        /*console.log(this, 270);
        console.log(this.$router, 27);*/
      },
      widf: function () {
        const de = document.getElementsByClassName('htmlCss');
        return {width: de[0].clientWidth + 'px'}
      }
    },
    methods: {
      tex: () => {
        console.log(this, 32)
        // console.log(this.$router, 32)
      },
      te: function () {
        this.$router.push({name: 'detail', query: {id: '454545'}})
      },
      wid: function () {
        const de = document.getElementsByClassName('htmlCss');
        this.width = {width: de[0].clientWidth - 200 + 'px', background: '#aeeeaa'}
      }
    },
    beforeMount() {
      // console.log(this, 46);
    },
    mounted() {
      // console.log(this, 49);
      this.tex();
      this.wid();
    }
  }
</script>

<style>

</style>

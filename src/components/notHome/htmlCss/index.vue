<template>
  <div class="htmlCss">
    <div>
      {{a}} {{bb}} {{c}} {{changeWidth}} {{tes}}
      <div style="background: #ff0000; width: 350px; height: 350px;"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'htmlCss',
    data() {
      return {
        a: 10,
        bb: 15,
        c: 20,
      }
    },
    computed: {
      changeWidth: function () {
        console.log(this.a , this.bb , this.c)
        console.log(this, 23);
        return this.a + this.bb + this.c
      },
      tes: () => {
        console.log(this, 27);
        console.log(this.router, 27);
      }
    },
    methods: {
      tex: () => {
        console.log(this, 32)
        console.log(this.$router, 32)
      },
      
      te: function () {
        console.log(this, 36);
        console.log(this.$router, 36);
      }
    },
    beforeCreate() {
      console.log(this, 43);
    },
    beforeMount() {
      console.log(this, 46);
    },
    mounted() {
      console.log(this, 49);
      this.tex();
      this.te();
    }
  }
</script>

<style>

</style>

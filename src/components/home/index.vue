<template>
  <div class="homeIndex">
    <List :listData="listData"></List>
  </div>
</template>

<script>
  import List from '../list';

  export default {
    name: 'homeIndex',
    data() {
      return {
        listData: []
      }
    },
    components: {
      List
    },
    beforeMount() {
      this.$axios.get('/api/listData').then(response => {
        this.listData = response.data.data;
      }).catch(err => console.error(err))
    }
  }
</script>

<style lang="stylus">

</style>

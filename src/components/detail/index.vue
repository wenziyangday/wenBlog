<template>
  <div class="detail">
    {{pageId}}
    <!-- <h2>{{detailData.title}}</h2>
	 <div class="info">
	   标签：<span v-for="item in detailData.tag">{{item | addDot}}</span> 创建时间： {{detailData.createTime}}
	 </div>
	 <div class="content">
	   {{detailData.content}}
	 </div>-->
  </div>
</template>

<script>
  export default {
    name: 'detail',
    data() {
      return {
        pageId: this.$route.query.id,
        detailData: {}
      }
    },
    filters: {
      addDot: item => {
        return item + '、';
      }
    }
  }
</script>

<style>

</style>

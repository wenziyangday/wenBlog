<template>
  <div>
    <ul class="list">
      <li v-for="item in listData">
        <div class="img"><img :src="item.img" alt="item.alt" width="100%"></div>
        <div class="content">
          <div class="infoRelative">
            <h2>
              <router-link :to="{name: 'detail', query: {id: item.id}}" :item="item">{{item.title}}
              </router-link>
            </h2>
            <div class="tagInfo">
              标签：<span v-for="items in item.tag">{{items | addDot}}</span> 创建时间：{{item.createTime}}
            </div>
          </div>
          <div class="inContent">
            {{item.content}}
          </div>
        </div>
      </li>
    </ul>
    <More></More>
  </div>

</template>

<script>
  import More from '../more';
  
  export default {
    name: 'list',
    data() {
      return {
        date: new Date().getTime()
      }
    },
    props: ['listData'],
    filters: {
      addDot: (items) => {
        return items + '、';
      }
    },
    components: {
      More
    }
  }
</script>

<style>
  .list li {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
  }

  .list li:last-child {
    margin-bottom: 0;
  }
  
  .img {
    flex: 0 0 200px;
    width: 200px;
    margin-right: 20px;
  }
  
  .content {
    flex: 1;
  }
  
  .infoRelative {
    display: flex;
    margin-bottom: 10px;
  }
  
  .infoRelative h2 {
    flex: 2;
    font-size: 18px;
    margin-right: 10px;
  }
  
  .tagInfo {
    flex: 2;
    text-align: right;
  }
  
  .inContent {
    line-height: 1.6;
    text-align: justify;
  }

</style>

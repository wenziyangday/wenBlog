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
        listData: [
          {
            id: '1',
            title: '张三的歌',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519547867328&di=8d95eb0464d1cd1da2fe391c6e768119&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa044ad345982b2b713b5ad7d3aadcbef76099b65.jpg',
            alt: '',
            content: '张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌',
            author: '作者',
            createTime: '2018-2-25',
            tag: ['html', 'css', 'js'],
            isOpen: true,
            isHot: true
          },
          {
            id: '2',
            title: '张三的歌2',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519547867328&di=8d95eb0464d1cd1da2fe391c6e768119&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa044ad345982b2b713b5ad7d3aadcbef76099b65.jpg',
            alt: '',
            content: '张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌',
            author: '作者',
            createTime: '2018-2-25',
            tag: ['html', 'css', 'js'],
            isOpen: true,
            isHot: true
          },
          {
            id: '3',
            title: '张三的歌3',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519547867328&di=8d95eb0464d1cd1da2fe391c6e768119&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa044ad345982b2b713b5ad7d3aadcbef76099b65.jpg',
            alt: '',
            content: '张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌',
            author: '作者',
            createTime: '2018-2-25',
            tag: ['html', 'css', 'js'],
            isOpen: true,
            isHot: true
          },
          {
            id: '4',
            title: '张三的歌4',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519547867328&di=8d95eb0464d1cd1da2fe391c6e768119&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa044ad345982b2b713b5ad7d3aadcbef76099b65.jpg',
            alt: '',
            content: '张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌',
            author: '作者',
            createTime: '2018-2-25',
            tag: ['html', 'css', 'js'],
            isOpen: true,
            isHot: true
          },
          {
            id: '5',
            title: '张三的歌3',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519547867328&di=8d95eb0464d1cd1da2fe391c6e768119&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa044ad345982b2b713b5ad7d3aadcbef76099b65.jpg',
            alt: '',
            content: '张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌',
            author: '作者',
            createTime: '2018-2-25',
            tag: ['html', 'css', 'js'],
            isOpen: true,
            isHot: true
          },
          {
            id: '6',
            title: '张三的歌4',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519547867328&di=8d95eb0464d1cd1da2fe391c6e768119&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa044ad345982b2b713b5ad7d3aadcbef76099b65.jpg',
            alt: '',
            content: '张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌',
            author: '作者',
            createTime: '2018-2-25',
            tag: ['html', 'css', 'js'],
            isOpen: true,
            isHot: true
          },
          {
            id: '1',
            title: '张三的歌',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519547867328&di=8d95eb0464d1cd1da2fe391c6e768119&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa044ad345982b2b713b5ad7d3aadcbef76099b65.jpg',
            alt: '',
            content: '张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌',
            author: '作者',
            createTime: '2018-2-25',
            tag: ['html', 'css', 'js'],
            isOpen: true,
            isHot: true
          },
          {
            id: '2',
            title: '张三的歌2',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519547867328&di=8d95eb0464d1cd1da2fe391c6e768119&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa044ad345982b2b713b5ad7d3aadcbef76099b65.jpg',
            alt: '',
            content: '张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌',
            author: '作者',
            createTime: '2018-2-25',
            tag: ['html', 'css', 'js'],
            isOpen: true,
            isHot: true
          },
          {
            id: '3',
            title: '张三的歌3',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519547867328&di=8d95eb0464d1cd1da2fe391c6e768119&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa044ad345982b2b713b5ad7d3aadcbef76099b65.jpg',
            alt: '',
            content: '张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌',
            author: '作者',
            createTime: '2018-2-25',
            tag: ['html', 'css', 'js'],
            isOpen: true,
            isHot: true
          },
          {
            id: '4',
            title: '张三的歌4',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519547867328&di=8d95eb0464d1cd1da2fe391c6e768119&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa044ad345982b2b713b5ad7d3aadcbef76099b65.jpg',
            alt: '',
            content: '张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌',
            author: '作者',
            createTime: '2018-2-25',
            tag: ['html', 'css', 'js'],
            isOpen: true,
            isHot: true
          },
          {
            id: '5',
            title: '张三的歌3',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519547867328&di=8d95eb0464d1cd1da2fe391c6e768119&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa044ad345982b2b713b5ad7d3aadcbef76099b65.jpg',
            alt: '',
            content: '张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌',
            author: '作者',
            createTime: '2018-2-25',
            tag: ['html', 'css', 'js'],
            isOpen: true,
            isHot: true
          },
          {
            id: '6',
            title: '张三的歌4',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519547867328&di=8d95eb0464d1cd1da2fe391c6e768119&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa044ad345982b2b713b5ad7d3aadcbef76099b65.jpg',
            alt: '',
            content: '张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌张三的歌',
            author: '作者',
            createTime: '2018-2-25',
            tag: ['html', 'css', 'js'],
            isOpen: true,
            isHot: true
          }
        ]
      }
    },
    components: {
      List
    },
    mounted() {
      this.$axios.get('/api/db').then(response => {
        console.table(response.data);
      })
    }
  }
</script>

<style lang="stylus">

</style>

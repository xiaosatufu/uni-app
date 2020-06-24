<template>
  <div>
    <el-image v-for="item in albumList" :preview-src-list="albumList"  style="width: 150px; height: 150px;margin:0 15px 15px 0;" :key="item" :src="'http://cdn.hupovip.cn/'+item"></el-image>
  </div>
</template>

<script>
import { getWalkAlbums } from "@/api/album";
export default {
  data() {
    return {
      albumList: [],
      preview:[],
      fromid: ""
    };
  },
  mounted() {
    this.fromid = this.$route.query.id;
    this.loadAlbums();
    console.log(this.fromid);
  },
  methods: {
    loadAlbums() {
      getWalkAlbums("11843684420858880787").then(res => {
        console.log(res);
        res.forEach(item => {
          this.albumList = this.albumList.concat(item.pictures);
        });
        console.log(this.albumList);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
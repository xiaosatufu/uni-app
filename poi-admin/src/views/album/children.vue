<template>
  <div>商家相册</div>
</template>

<script>
import { photoAlbums } from "@/api/album";
export default {
  data() {
    return {};
  },
  mounted() {
    this.loadAlbums();
  },
  methods: {
    loadAlbums() {
      photoAlbums("COMMENT").then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
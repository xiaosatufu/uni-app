<template>
  <div>
    
  </div>
</template>

<script>
import { photoAlbums } from "@/api/album";
export default {
  data() {
    return {
      albumList: []
    };
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
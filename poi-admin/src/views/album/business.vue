<template>
  <div>
    <div class="m-operation">
      <el-button type="primary" @click="handleAdd">新增子相册</el-button>
    </div>
    <div class="m-album" v-for="(item,index) in albumList" :key="item.id">
      <div @click="getImageTypeIndex(index)">
        <div class="m-title">{{item.title}}（{{item.pictures |calcPicturesNum}}）：</div>
        <div class="m-wrap">
          <el-upload
            action
            :before-upload="beforeUpload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :file-list="item.files"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </div>
      </div>
    </div>
    <div class="m-btns">
      <el-button>取消</el-button>
      <el-button type="primary" @click="handleSave">保存</el-button>
    </div>
    <el-dialog title="新增子相册" :visible.sync="dialogFormVisible">
      <el-form :model="addAlbumForm" :rules="rules" ref="addAlbumForm">
        <el-form-item label="子相册名称" :label-width="formLabelWidth" prop="title">
          <el-input v-model="addAlbumForm.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label :label-width="formLabelWidth">
          <el-upload
            action
            :before-upload="beforeUpload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :file-list="childAlbumFiles"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAddAlbum('addAlbumForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { photoAlbums, photoSaveAlbums } from "@/api/album";
import { upload } from "@/api/common";
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      files: [],
      albumList: [],
      filesIndex: 0,
      dialogFormVisible: false,
      addAlbumForm: {
        title: "",
        pictures: "",
        type: this.$route.query.type,
        fromId: this.$route.query.id
      },
      rules: {
        title: [
          { required: true, message: "请输入子相册名称", trigger: "blur" }
        ]
      },
      childAlbumFiles: [],
      formLabelWidth: "120px"
    };
  },
  mounted() {
    this.loadAlbums();
  },
  filters: {
    calcPicturesNum(pictures) {
      let times = pictures.split("http").length - 1;
      return times;
    }
  },
  methods: {
    handleAdd() {
      this.dialogFormVisible = true;
      this.filesIndex = "childAlbum";
    },
    handleAddAlbum(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");

          if (this.childAlbumFiles.length == 0) {
            this.$message({
              message: "请上传照片",
              type: "error"
            });
            return false;
          }
          let tempAlbum = [];
          this.childAlbumFiles.forEach(item => {
            tempAlbum.push(item.url);
          });
          this.addAlbumForm.pictures = tempAlbum.toString();
          console.log(this.addAlbumForm);
          photoSaveAlbums(this.addAlbumForm).then(res => {
            console.log(res);
            if (res) {
              this.dialogFormVisible = false;
              this.loadAlbums();
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    getImageTypeIndex(index) {
      this.filesIndex = index;
    },
    loadAlbums() {
      photoAlbums("poi").then(res => {
        res.forEach((item, index) => {
          let times = item.pictures.split("http").length - 1;
          if (times == 1) {
            item.files = [{ name: item.pictures, url: item.pictures }];
          } else {
            let picturesArr = item.pictures.split(",");
            let files = [];
            picturesArr.forEach(picItem => {
              files.push({ name: picItem, url: picItem });
            });
            item.files = files;
          }
        });
        this.albumList = res;
        console.log(this.albumList);
      });
    },
    handleSave() {
      //处理数据

      console.log(this.albumList);
      let submitData = [];
      this.albumList.forEach(item => {
        let data = {};
        data.fromId = item.id;
        data.title = item.title;
        data.type = item.type;
        let files = [];
        item.files.forEach(fileItem => {
          files.push(fileItem.url);
        });
        data.pictures = files.toString();
        submitData.push(data);
      });
      console.log(submitData);

      photoSaveAlbums(submitData).then(res => {
        console.log(res);
      });
    },
    handlePictureChange(file, fileList) {
      // console.log(file);
      // console.log(fileList);
    },
    handleUpload(files) {
      // console.log(files);
      // alert(111)
    },
    handleProgress() {
      // console.log("progress");
    },
    handleSuccess() {
      // console.log("success");
    },
    beforeUpload(file) {
      // console.log(files);
      // console.log(fileList);
      // // alert(1);
      let fd = new FormData();
      fd.append("file", file);
      // console.log(fd)
      upload(fd).then(res => {
        let file = {
          name: "",
          url: ""
        };
        // this.this.albumList[filesIndex]
        // console.log(file)
        file.name = res;
        file.url = res;
        if (this.filesIndex == "childAlbum") {
          this.childAlbumFiles.push(file);
        } else {
          this.albumList[this.filesIndex].files.push(file);
        }
        // this.files.push(file);
      });
      return true;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.m-album {
  .m-title {
    font-size: 14px;
    font-weight: 700;
    margin: 15px 0;
    background: #f8f8f8;
    padding: 15px;
  }
}
</style>
<template>
  <div>
    <div class="form-title">基础信息</div>
    <!-- <el-col :span="6"> -->
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-row>
        <el-col :span="5">
          <el-form-item label="POI名" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5">
          <el-form-item label="类型">
            <el-radio-group v-model="form.type">
              <el-radio label="游玩"></el-radio>
              <el-radio label="酒店"></el-radio>
              <el-radio label="剧场"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5">
          <el-form-item label="标签">
            <!-- <el-input v-model="form.tags"></el-input> -->
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5">
          <el-form-item label="地区">
            <el-input v-model="form.area"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5">
          <el-form-item label="地址">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <div class="form-title">POI简介</div>
      <el-row>
        <el-col :span="5">
          <el-form-item label="电话">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="交通信息">
            <el-input v-model="form.trafficInfo"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5">
          <el-form-item label="营业时间">
            <el-input v-model="form.businessTime"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="优惠政策">
            <el-input v-model="form.discountInfo"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="上传图片">
            <!-- <el-input v-model="form.name"></el-input> -->
            <el-upload
              action=""
              :before-upload="beforeUpload"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="简介">
            <!-- <el-input v-model="form.introduction"></el-input> -->

            <tinymce v-model="form.introduction" :height="300" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import { createPoi } from "@/api/poi";
import { upload } from "@/api/common";
export default {
  components: {
    Tinymce
  },
  data() {
    return {
      // uploadHeaders: {
      //   headers: {
      //     "Content-Type": "multipart/form-data"
      //   }
      // },
      dialogImageUrl: "",
      dialogVisible: false,
      form: {
        name: "",
        address: "",
        area: "",
        businessTime: "",
        cityId: false,
        type: [],
        cityName: "",
        discountInfo: "",
        id: "",
        introduction: "",
        latitude: "",
        longitude: "",
        phone: "",
        pictures: {
          pictures: "",
          id: "",
          title: ""
        },
        tags: [],
        trafficInfo: "",
        type: 0
      },

      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }]
      }
    };
  },
  methods: {
    beforeUpload(file) {
      console.log(file);
      let fd = new FormData();
      fd.append("file", file);
      // console.log(fd)
      upload(fd).then(res => {
        console.log(res);
      });
      return true;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="scss" scoped>
.form-title {
  font-size: 14px;
  font-weight: 700;
  margin: 15px;
  background: #f8f8f8;
  padding: 15px;
}
</style>
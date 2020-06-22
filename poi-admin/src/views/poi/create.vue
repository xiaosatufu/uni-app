<template>
  <div>
    <div class="form-title">基础信息</div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-row>
        <el-col :span="6">
          <el-form-item label="POI名" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="类型" prop="type">
            <el-radio-group v-model="form.type">
              <el-radio
                v-for="item in radioType"
                :key="item.value"
                :label="item.value"
              >{{item.label}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="标签">
            <el-tag
              :key="tag"
              v-for="tag in form.tags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >{{tag}}</el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            ></el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">新增标签</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="地区" prop="area">
            <el-cascader
              size="large"
              :options="options"
              v-model="cascaderArea"
              @change="handleChange"
            ></el-cascader>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="地址" prop="address">
            <el-input v-model="form.address" @blur="handleAddressBlur"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item>
            <div id="atlas" style="width:100%;height:300px;"></div>
          </el-form-item>
        </el-col>
      </el-row>

      <div class="form-title">POI简介</div>
      <el-row>
        <el-col :span="6">
          <el-form-item label="电话">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="交通信息" prop="trafficInfo">
            <el-input v-model="form.trafficInfo"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="营业时间" prop="businessTime">
            <el-input v-model="form.businessTime"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="优惠政策">
            <el-input v-model="form.discountInfo"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="上传图片">
            <el-upload
              :disabled="uploadDisabled"
              action
              :before-upload="beforeUpload"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :file-list="files"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="简介">
            <tinymce v-model="form.introduction" :height="300" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item v-if="$route.path=='/poi/management/create'">
        <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
      <el-form-item v-if="$route.path=='/poi/management/edit'">
        <el-button type="primary" @click="submitForm('form')">确认修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>
      <el-form-item v-if="$route.path=='/poi/management/detail'">
        <el-button>返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { TMap } from "@/utils/Tmap";
import Tinymce from "@/components/Tinymce";
import { createPoi, poiDetail, poiEdit } from "@/api/poi";
import { upload } from "@/api/common";
import { searchMap } from "@/api/map";

import { regionData, CodeToText, TextToCode } from "element-china-area-data";
export default {
  components: {
    Tinymce
  },
  data() {
    return {
      uploadDisabled: false,
      radioType: [
        {
          label: "游玩",
          value: "PLAY"
        },
        {
          label: "酒店",
          value: "HOTEL"
        },
        {
          label: "剧场",
          value: "THEATER"
        }
      ],
      options: regionData,
      dialogImageUrl: "",
      dialogVisible: false,
      form: {
        name: "",
        address: "",
        area: "",
        businessTime: "",
        cityId: false,
        type: "PLAY",
        cityName: "",
        discountInfo: "",
        id: "",
        introduction: "",
        latitude: "0",
        longitude: "0",
        phone: "",
        pictures: [],
        tags: [],
        trafficInfo: ""
      },
      cascaderArea: null,

      rules: {
        name: [{ required: true, message: "请输入POI名称", trigger: "blur" }],
        type: [{ required: true, message: "请选择类型", trigger: "blur" }],
        area: [{ required: true, message: "请输入地区", trigger: "blur" }],
        address: [{ required: true, message: "请输入地址", trigger: "blur" }],

        trafficInfo: [
          { required: true, message: "请输入交通信息", trigger: "blur" }
        ],
        businessTime: [
          { required: true, message: "请选择营业时间", trigger: "blur" }
        ]
      },

      inputVisible: false,
      inputValue: "",
      files: [],
      map: {
        region: "成都市",
        address: "成都市天府广场"
      }
    };
  },
  computed: {
    pageType() {
      if (this.$route.path == "/poi/management/detail") {
        return "detail";
      } else if (this.$route.path == "/poi/management/create") {
        return "create";
      } else {
        return "edit";
      }
    }
  },
  mounted() {
    console.log(this.$route);
    this.mapTX();
    this.searchAddress();
    if (this.$route.path != "/poi/management/create") {
      this.handleDetail();
    }
    // window.QQmap = data => {
    //   console.log(data);
    // };
  },
  methods: {
    handleDetail() {
      poiDetail(this.$route.query.id).then(res => {
        this.form = res;
        //处理图片
        if (res.pictures.length != 0 && res.pictures[0].pictures) {
          let pictures = res.pictures[0].pictures;
          console.log(pictures);
          if (pictures.indexOf(",") == -1) {
            this.files.push({ name: pictures, url: pictures });
          } else {
            const picturesArr = pictures.split(",");
            picturesArr.forEach(item => {
              this.files.push({ name: item, url: item });
            });
          }
        }
        //处理地区
        if (res.area.indexOf(",") != -1) {
          const areaArr = res.area.split(",");
          const code0 = TextToCode[areaArr[0]].code;
          const code1 = TextToCode[areaArr[0]][areaArr[1]].code;
          const code2 = TextToCode[areaArr[0]][areaArr[1]][areaArr[2]].code;
          this.cascaderArea = [code0, code1, code2];
        }
        if (this.pageType == "detail") {
          this.uploadDisabled = true;
        }
      });
    },
    handleAddressBlur() {
      if (!this.cascaderArea) {
        this.$message({
          message: "请选择地区",
          type: "error"
        });
      }
      if (this.form.address && this.form.area) {
        this.map.region = this.form.area.replace(/\,/gi, ``);
        this.map.address = this.map.region + this.form.address;
        this.searchAddress();
      }
    },
    handleChange(value) {
      console.log(value);
      console.log(CodeToText[value[0]]);
      let areaArr = [
        CodeToText[value[0]],
        CodeToText[value[1]],
        CodeToText[value[2]]
      ];
      this.form.area = areaArr.toString();
    },
    beforeUpload(file, fileList) {
      console.log(fileList);
      let fd = new FormData();
      fd.append("file", file);
      // console.log(fd)
      upload(fd).then(res => {
        // if (res) {

        // }
        let file = {
          name: "",
          url: ""
        };
        file.name = res;
        file.url = res;
        this.files.push(file);
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

    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.form.tags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    submitForm(formName) {
      console.log(this.form);
      this.$refs[formName].validate(valid => {
        if (valid) {
          //判断图片是否为空
          if (this.files.length == 0) {
            this.$message({
              message: "请上传图片",
              type: "error"
            });
            return false;
          }
          //处理数据
          let pictures = [];
          this.files.forEach(item => {
            pictures.push(item.url);
          });
          this.form.pictures.push({ pictures: pictures.toString() });
          //处理地区
          if (this.pageType == "create") {
            createPoi(this.form).then(res => {
              console.log(res);
              if (res) {
                this.$message({
                  message: "添加成功",
                  type: "success",
                  onClose: () => {
                    this.$router.push("/poi/management");
                  }
                });
              }
            });
          } else {
            poiEdit(this.$route.query.id, this.form).then(res => {
              console.log(res);
              if (res) {
                this.$message({
                  message: "修改成功",
                  type: "success",
                  onClose: () => {
                    this.$router.push("/poi/management");
                  }
                });
              }
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    mapTX() {
      const self = this;
      TMap().then(qq => {
        var map = new qq.maps.Map(document.getElementById("atlas"), {
          //这里经纬度代理表进入地图显示的中心区域
          center: new qq.maps.LatLng(self.form.latitude, self.form.longitude),
          zoom: 13
        });
      });
    },

    searchAddress() {
      const KEY = "5N7BZ-LVF62-VVOUT-CWS6Q-IHX65-YLBWC";
      let url = "https://apis.map.qq.com/ws/geocoder/v1/";
      this.$jsonp(url, {
        key: KEY,
        region: this.map.region,
        address: this.map.address,
        output: "jsonp"
      })
        .then(res => {
          console.log(res);
          if (res.status != 0) {
            this.$message({
              message: "暂无此查询结果",
              type: "error"
            });
            return false;
          }
          this.form.latitude = res.result.location.lat;
          this.form.longitude = res.result.location.lng;
          this.mapTX();
        })
        .catch(err => {
          console.log(err);
        });
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

.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
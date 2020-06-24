<template>
  <div class="app-container content-detail">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名" :label-width="labelWidth">
        <div class="detail">{{form.userName}}</div>
      </el-form-item>
      <!-- <el-form-item label="手机号" :label-width="labelWidth">
        <div class="detail">{{form.nickName}}</div>
      </el-form-item>-->
      <el-form-item label="手机号" :label-width="labelWidth">
        <div class="detail">{{form.mobile}}</div>
      </el-form-item>
      <el-form-item label="琥珀授权状态" :label-width="labelWidth">
        <div class="detail">{{form.authorize==0?'未授权':'已授权'}}</div>
      </el-form-item>
      <el-form-item label="琥珀会员状态" :label-width="labelWidth">
        <div class="detail" v-if="form.isMember==0">非会员</div>
        <div class="detail" v-else-if="form.isMember==1">会员</div>
        <div class="detail" v-else-if="form.isMember==-1">过期会员</div>
        <div class="detail" v-else>-</div>
      </el-form-item>
      <el-form-item label="POI名称" :label-width="labelWidth">
        <div class="detail">{{form.poiName}}</div>
      </el-form-item>
      <el-form-item label="总评分" :label-width="labelWidth">
        <div class="detail">{{form.average}}</div>
      </el-form-item>
      <el-form-item label="服务" :label-width="labelWidth">
        <el-rate
          v-model="form.service"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        ></el-rate>
        <!-- <div class="detail">{{form.mobile}}</div> -->
      </el-form-item>
      <el-form-item label="环境" :label-width="labelWidth">
        <el-rate
          v-model="form.environment"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        ></el-rate>

        <!-- <div class="detail">{{form.mobile}}</div> -->
      </el-form-item>
      <el-form-item label="交通" :label-width="labelWidth">
        <el-rate
          v-model="form.traffic"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        ></el-rate>

        <!-- <div class="detail">{{form.mobile}}</div> -->
      </el-form-item>
      <el-form-item label="点评时间" :label-width="labelWidth">
        <div class="detail">{{form.createTime}}</div>
      </el-form-item>
      <el-form-item label="点评内容" :label-width="labelWidth">
        <!-- <el-col :span="24"> -->
        <el-input
          type="textarea"
          style="width:500px"
          :rows="4"
          placeholder="请输入内容"
          disabled
          v-model="form.context"
        ></el-input>
        <!-- </el-col> -->
      </el-form-item>
      <el-form-item label="操作" :label-width="labelWidth">
        <el-button
          :type="form.limitState?'success':'danger'"
          @click="handleIsHide"
        >{{form.limitState?"显示":'隐藏'}}</el-button>
        <el-button type="primary">回复</el-button>
      </el-form-item>
      <el-form-item label="点评图片"  :label-width="labelWidth">
        <el-image
          style="width: 150px; height: 150px;margin-right:15px;"
          v-for="item in form.picUrls"
          :key="item"
          :src="'http://cdn.hupovip.cn/'+item"
        ></el-image>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import { commentDetail, isHidecomment } from "@/api/content";
export default {
  data() {
    return {
      labelWidth: "100px",
      id: this.$route.query.id,
      form: {
        // name: "",
        // region: "",
        // date1: "",
        // date2: "",
        // delivery: false,
        // type: [],
        // resource: "",
        // desc: ""
      }
    };
  },
  mounted() {
    this.loadDetail();
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleIsHide() {
      isHidecomment(this.form.id).then(res => {
        console.log(res);
        // row.limitState = !row.limitState;
        this.form.limitState = !this.form.limitState;
      });
    },
    loadDetail() {
      commentDetail(this.id).then(res => {
        console.log(res);
        this.form = res;
      });
    }
  }
};
</script>



<style lang="scss">
.content-detail {
  .el-form-item {
    display: flex;
    align-items: center;
    .el-form-item__content {
      margin-left: 0 !important;
    }
  }
}
</style>
<style lang="scss" scoped>
</style>
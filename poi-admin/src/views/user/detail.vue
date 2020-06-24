<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户头像" :label-width="labelWidth">
        <el-avatar :src="form.avatar"></el-avatar>
      </el-form-item>
      <el-form-item label="用户名" :label-width="labelWidth">
        <div class="detail">{{form.nickName}}</div>
      </el-form-item>
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
      <el-form-item label="收藏数" :label-width="labelWidth">
        <div class="detail">
          {{form.collectCount}}
          <el-button style="margin-left:15px;" type="primary">查看</el-button>
        </div>
      </el-form-item>
      <el-form-item label="点评数" :label-width="labelWidth">
        <div class="detail">
          {{form.commentCount}}
          <el-button style="margin-left:15px;"  @click="handleDetail(form.id)"  type="primary">查看</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { userDetail } from "@/api/user";
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
    handleDetail(id) {
      this.$router.push({ path: "/content/management" ,query:{
        id:id
      }});
    },
    loadDetail() {
      userDetail(this.id).then(res => {
        console.log(res);
        this.form = res;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
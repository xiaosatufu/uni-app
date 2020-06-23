<template>
  <div class="app-container">
    <template v-if="$route.path=='/user/management'">
      <!-- <div class="m-header-btns">
        <el-button type="primary" @click="$router.push('/poi/management/create')">新增</el-button>
      </div>-->
      <div class="table-filters">
        <el-form :inline="true" ref="filterForm">
          <div class="filter-col">
            <el-form-item label="用户名" prop="username" :label-width="labelWith">
              <el-input v-model="filterForm.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="用户手机号" :label-width="labelWith">
              <el-input v-model="filterForm.mobile" placeholder="请输入用户手机号"></el-input>
            </el-form-item>
            <el-form-item label="授权状态" :label-width="labelWith">
              <el-select v-model="filterForm.authState" placeholder="请选择" style="width:180px">
                <el-option
                  v-for="item in authOptin"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="filter-col">
            <el-form-item label="会员状态" :label-width="labelWith">
              <el-select v-model="filterForm.limitState" placeholder="请选择" style="width:180px">
                <el-option
                  v-for="item in memberOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="创建时间" :label-width="labelWith">
              <el-date-picker
                v-model="datePicker"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="handleDateChange"
                value-format="yyyy-mm-dd HH:mm:ss"
              ></el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="loadUserList">筛选</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="resetForm('filterForm')">清空</el-button>
            </el-form-item>
          </div>
        </el-form>
        <div class="filters-btns"></div>
      </div>
      <div class="m-table" style="min-width:1000px;">
        <el-table
          :data="userList"
          style="width: 100%"
          border
          v-loading="loading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.6)"
        >
          <el-table-column prop="id" label="用户编号" width="180"></el-table-column>
          <el-table-column prop="avatar" label="用户头像" width="100" align="center">
            <template slot-scope="scope">
              <el-avatar :src="scope.row.avatar"></el-avatar>
            </template>
          </el-table-column>
          <el-table-column prop="nickName" label="用户名" width="100"></el-table-column>
          <el-table-column prop="mobile" label="手机号" width="110"></el-table-column>
          <el-table-column prop="context" label="琥珀亲子" width="100"></el-table-column>
          <el-table-column prop="context" label="会员状态" width="100"></el-table-column>
          <el-table-column prop="context" label="收藏数" width="100"></el-table-column>
          <el-table-column prop="context" label="点评数" width="100"></el-table-column>
          <el-table-column prop="context" label="玩法数" width="100"></el-table-column>
          <el-table-column prop="context" label="粉丝" width="100"></el-table-column>
          <el-table-column prop="context" label="关注" width="100"></el-table-column>
          <el-table-column prop="context" label="创建时间" width="100"></el-table-column>
          <el-table-column label="操作" fixed="right" width="220">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleDetail(scope.row.id)">查看</el-button>
              <el-button size="mini" @click="handleIsAble(scope.row)">{{scope.row.dt?'注销':'启用'}}</el-button>
            </template>
          </el-table-column>
          <!-- <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column> -->
        </el-table>
      </div>
      <div class="m-pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalPage"
        ></el-pagination>
      </div>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
// import { poiList } from "@/api/poi";
import { adminUser, userDisable, userEnable } from "@/api/user";
// import { user } from "@/api/user";
export default {
  data() {
    return {
      labelWith: "100px",
      authOptin: [
        {
          value: "",
          label: "全部"
        },
        {
          value: true,
          label: "已授权"
        },
        {
          value: false,
          label: "未授权"
        }
      ],
      memberOption: [
        {
          value: "",
          label: "全部"
        },
        {
          value: 1,
          label: "会员"
        },
        {
          value: 0,
          label: "非会员"
        },
        {
          value: -1,
          label: "过期会员"
        }
      ],
      datePicker: "",
      filterForm: {
        authState: "",
        start: "",
        end: "",
        username: "",
        mobile: "",
        limitState: "",
        size: 10,
        page: 1
      },

      tableData: [],
      totalPage: 0,
      currentPage: 1,
      loading: false,
      userList: []
    };
  },
  mounted() {
    this.loadUserList();
  },
  methods: {
    handleDetail(id) {
      this.$router.push({
        path: "/user/management/detail",
        query: {
          id: id
        }
      });
    },
    handleDateChange(val) {
      console.log(val);
      this.filterForm.start = val[0];
      this.filterForm.end = val[1];
    },
    handleIsAble(row) {
      // console.log(row);
      // row.dt = !row.dt;
      if (row.dt) {
        userDisable(row.id).then(res => {
          console.log(res);
          row.dt = !row.dt;
        });
      } else {
        userEnable(row.id).then(res => {
          console.log(res);
          row.dt = !row.dt;
        });
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleSizeChange(val) {
      this.filterForm.size = val;
      this.loadUserList();
    },
    handleCurrentChange(val) {
      this.filterForm.page = val;
      this.loadUserList();
    },

    loadUserList() {
      let filterData = {};
      for (let key in this.filterForm) {
        if (this.filterForm[key]) {
          this.$set(filterData, key, this.filterForm[key]);
        }
      }
      adminUser(filterData).then(res => {
        // console.log(res)
        this.userList = res.data;
        this.totalPage = res.total;
      });
    }
  }
};
</script>



<style lang="scss">
.table-filters {
  margin-bottom: 15px;
  .el-form-item {
    margin-bottom: 0;
  }
}
.m-pagination {
  margin-top: 15px;
}
</style>
<style lang="scss" scoped>
.table-filters {
  background: #f8f8f8;
  padding: 15px;
  margin-top: 15px;
}
.filter-col {
  margin-bottom: 15px;
}
</style>
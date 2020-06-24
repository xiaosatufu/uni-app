<template>
  <div class="app-container">
    <template v-if="$route.path=='/content/management'">
      <!-- <div class="m-header-btns">
        <el-button type="primary" @click="$router.push('/poi/management/create')">新增</el-button>
      </div>-->
      <div class="table-filters">
        <el-form :inline="true" ref="filterForm">
          <div class="filter-col">
            <el-form-item label="POI名称" :label-width="labelWith">
              <el-input v-model="filterForm.keyWords" placeholder="请输入POI名称"></el-input>
            </el-form-item>
            <el-form-item label="POI类型" :label-width="labelWith">
              <el-select v-model="filterForm.poiType" placeholder="请选择" style="width:180px">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="城市" :label-width="labelWith">
              <el-input v-model="filterForm.city" placeholder="请输入城市"></el-input>
            </el-form-item>
          </div>
          <div class="filter-col">
            <el-form-item label="用户名" :label-width="labelWith">
              <!-- <el-input v-model="filterForm.userName" placeholder="请输入用户名"></el-input> -->

              <el-select
                v-model="filterForm.userId"
                filterable
                remote
                clearable
                reserve-keyword
                placeholder="请输入关键词"
                :remote-method="remoteMethod"
                :loading="userSearchloading"
              >
                <el-option
                  v-for="item in userOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="用户手机号" :label-width="labelWith">
              <el-input v-model="filterForm.mobile" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="点评时间" :label-width="labelWith">
              <el-date-picker
                v-model="filterForm.date"
                type="date"
                placeholder="选择日期"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
              <!-- <el-date-picker
                v-model="datePicker"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="handleDateChange"
                value-format="yyyy-mm-dd HH:mm:ss"
              ></el-date-picker>-->
            </el-form-item>
          </div>
          <div class="filter-col">
            <el-form-item label="点评平均分" :label-width="labelWith">
              <el-col :span="11">
                <el-input v-model="filterForm.avgMin" placeholder="最小值"></el-input>
              </el-col>
              <el-col class="line" :span="2" style="text-align:center;">-</el-col>
              <el-col :span="11">
                <el-input v-model="filterForm.avgMax" placeholder="最大值"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="loadPoiList">筛选</el-button>
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
          :data="commentsList"
          style="width: 100%"
          border
          v-loading="loading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.6)"
        >
          <el-table-column prop="id" label="点评编号" width="180"></el-table-column>
          <el-table-column prop="userName" label="用户名" width="200"></el-table-column>
          <el-table-column prop="mobile" label="手机号码" width="110"></el-table-column>
          <el-table-column prop="context" label="内容" width="400"></el-table-column>
          <!-- <el-table-column prop="tags" label="内容" width="200">
            <template slot-scope="scope">
              <el-tag>{{scope.row.tags}}</el-tag>
            </template>
          </el-table-column>-->
          <!-- <el-table-column prop="address" label="地址" width></el-table-column> -->
          <el-table-column prop="score" label="评分" width="80">
            <template slot-scope="scope">
              <div>服务：{{scope.row.service}}</div>
              <div>环境：{{scope.row.environment}}</div>
              <div>交通：{{scope.row.traffic}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="average" label="总评分" width="80"></el-table-column>
          <el-table-column prop="poiName" label="POI" width="200">
            <template slot-scope="scope">
              <el-link
                type="primary"
                @click="$router.push({path:'/poi/management/detail',query:{id:scope.row.poiId}})"
              >{{scope.row.poiName}}</el-link>
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="200"></el-table-column>
          <el-table-column prop="limitState" label="状态">
            <template slot-scope="scope">
              <div>{{scope.row.limitState?"显示":'隐藏'}}</div>
            </template>
          </el-table-column>
          <el-table-column label="操作" fixed="right" width="220">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="$router.push({
                path:'/content/management/detail',
                query:{
                  id:scope.row.id
                }
              })"
              >查看</el-button>
              <el-button size="mini" type="primary">回复</el-button>
              <el-button
                size="mini"
                :type="scope.row.limitState?'success':'danger'"
                @click="handleIsHide(scope.row,scope.row.id)"
              >{{scope.row.limitState?"显示":'隐藏'}}</el-button>
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
import { comments, isHidecomment, getUserId } from "@/api/content";
export default {
  data() {
    return {
      // datePicker: "",
      userSearchloading: false,
      userOptions: [],
      labelWith: "100px",
      options: [
        {
          value: "",
          label: "全部"
        },
        {
          value: "PLAY",
          label: "游玩"
        },
        {
          value: "THEATER",
          label: "剧场"
        },
        {
          value: "HOTEL",
          label: "酒店"
        }
      ],
      filterForm: {
        avgMax: "",
        avgMin: "",
        city: "",
        date: "",
        keyWords: "",
        mobile: "",
        poiType: "",
        userId: "",
        userName: "",
        size: 10,
        page: 1
      },

      tableData: [],
      totalPage: 0,
      currentPage: 1,
      loading: false,

      commentsList: []
    };
  },
  mounted() {
    if (this.$route.query.id) {
      this.filterForm.userId = this.$route.query.id;
    }
    this.loadPoiList();
  },
  methods: {
    // handleDateChange() {
    //   this.filterForm.start = val[0];
    //   this.filterForm.end = val[1];
    // },
    remoteMethod(query) {
      console.log(query);
      if (query !== "") {
        this.userSearchloading = true;
        getUserId(query).then(res => {
          console.log(res);
          if (res) {
            this.userSearchloading = false;
            this.userOptions = res.data.map(item => {
              return {
                value: `${item.id}`,
                label: `${item.nickName}`
              };
            });
            console.log(this.userOptions);
          }
        });
      }
    },
    handleIsHide(row, id) {
      isHidecomment(id).then(res => {
        console.log(res);
        row.limitState = !row.limitState;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleSizeChange(val) {
      this.filterForm.size = val;
      this.loadPoiList();
    },
    handleCurrentChange(val) {
      this.filterForm.page = val;
      this.loadPoiList();
    },

    loadPoiList() {
      this.loading = true;
      let filterData = {};
      for (let key in this.filterForm) {
        if (this.filterForm[key]) {
          this.$set(filterData, key, this.filterForm[key]);
        }
      }

      comments(filterData).then(res => {
        console.log(res);
        this.loading = false;
        this.commentsList = res.data;
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
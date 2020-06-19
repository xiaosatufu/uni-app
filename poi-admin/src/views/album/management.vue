<template>
  <div class="app-container">
    <template v-if="$route.path=='/album/management'">
      <div class="m-header-btns">
        <el-button type="primary" @click="$router.push('/poi/management/create')">新增</el-button>
      </div>
      <div class="table-filters">
        <el-form :inline="true" ref="filterForm">
          <el-form-item label="POI名称" prop="poiName">
            <el-input v-model="filterForm.poiName"></el-input>
          </el-form-item>
          <el-form-item label="POI类型">
            <el-select v-model="filterForm.poiType" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <!-- <el-input v-model="filterForm.poiType"></el-input> -->
          </el-form-item>
          <el-form-item label="城市">
            <el-input v-model="filterForm.city"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loadPoiList">筛选</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="resetForm('filterForm')">清空</el-button>
          </el-form-item>
        </el-form>
        <div class="filters-btns"></div>
      </div>
      <div class="m-table" style="min-width:1000px;">
        <el-table
          :data="tableData"
          style="width: 100%"
          border
          v-loading="loading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.6)"
        >
          <el-table-column prop="number" label="POI编号" width="150"></el-table-column>
          <el-table-column prop="name" label="poi名称" width="200"></el-table-column>
          <el-table-column prop="type" label="类型" width="100"></el-table-column>
          <el-table-column prop="tags" label="POI标签" width="200">
            <template slot-scope="scope">
              <el-tag>{{scope.row.tags}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="地址" width=""></el-table-column>
          <el-table-column prop="score" label="评分" width="80"></el-table-column>
          <el-table-column prop="commentCount" label="点评数" width="80"></el-table-column>
          <el-table-column prop="collectCount" label="被收藏数" width="80"></el-table-column>
          <el-table-column prop="operatorName" label="操作人" width="100"></el-table-column>
          <el-table-column label="操作" fixed="right" width="200">
            <template slot-scope="scope">
              <el-button size="mini" @click="$router.push('/album/management/business')">商家相册</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="$router.push('/album/management/children')"
              >遛娃相册</el-button>
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
import { poiList } from "@/api/poi";
export default {
  data() {
    return {
      options: [
        // {
        //   value: "",
        //   label: ""
        // },
        {
          value: "PLAY",
          label: "PLAY"
        },
        {
          value: "THEATER",
          label: "THEATER"
        },
        {
          value: "HOTEL",
          label: "HOTEL"
        }
      ],
      filterForm: {
        city: "",
        poiName: "",
        poiType: "",
        tag: "",
        size: 10,
        page: 1
      },

      tableData: [],
      totalPage: 0,
      currentPage: 1,
      loading: false
    };
  },
  mounted() {
    console.log(this.$route.path);
    this.loadPoiList();
  },
  methods: {
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
      poiList(filterData).then(res => {
        this.loading = false;
        this.tableData = res.data;
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
</style>
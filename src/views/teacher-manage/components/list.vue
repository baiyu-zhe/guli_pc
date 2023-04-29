<template>
  <div>
    <template>
      <el-form :inline="true" :model="filterData" class="demo-form-inline">
        <el-form-item label="名字">
          <el-input v-model="filterData.name" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-date-picker
            v-model="filterData.gmt_begin"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-date-picker
            v-model="filterData.gmt_end"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>

      <el-table
        :data="tableData"
        style="width: 100%; height: 80vh"
      >
        <el-table-column
          type="index"
          width="50"
          align="center"
          label="序号"
        />
        <el-table-column
          prop="name"
          label="名称"
          width="180"
        />
        <el-table-column
          prop="level"
          label="头衔"
          width="180"
        >
          <template slot-scope="scope">
            {{ scope.row.level === 2 ? '首席讲师' : '高级讲师' }}
          </template>
        </el-table-column>
        <el-table-column
          prop="career"
          label="资历"
        />
        <el-table-column
          prop="gmtCreate"
          label="添加时间"
        />
        <el-table-column
          prop="sort"
          label="排序"
        />
        <el-table-column
          prop="address"
          label="操作"
        />
      </el-table>
    </template>
  </div>
</template>

<script>
import { pageTeacherCondition } from '@/api/teacher-manage/teacher-manage';

export default {
  name: 'List',

  data() {
    return {
      tableData: [],
      page: 1,
      limit: 20,
      filterData: {
        name: '',
        gmt_begin: '', // 开始时间
        gmt_end: ''
      }
    };
  },

  created() {
    this.getList();
  },

  methods: {
    getList() {
      pageTeacherCondition(this.page, this.limit, this.filterData).then(res => {
        const { list } = res.data;
        this.tableData = list;
      });
    },

    onSubmit() {
      this.getList();
    }
  }
};
</script>

<style scoped>

</style>

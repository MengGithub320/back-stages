<template>
  <div id="OrderManage">
    <div>
      <h3>查询订单</h3>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="订单号">
          <el-input v-model="order.orderNo" placeholder="订单号"></el-input>
        </el-form-item>
        <el-form-item label="订单状态">
          <el-select v-model="order.orderstate" placeholder="订单状态">
            <el-option label="未付款" value="0"></el-option>
            <el-option label="待发货" value="1"></el-option>
            <el-option label="待收货" value="2"></el-option>
            <el-option label="已完成" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getData">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div id="todolist">
      <h3>全部订单</h3>
      <el-table
        :data="tableData.slice((currpage-1)*pagesize,currpage*pagesize)"
        :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        style="width: 100%"
      >
        <el-table-column label="订单id" width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.OrderId }}</span>
          </template>
        </el-table-column>
        <el-table-column label="订单号" width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.OrderNo }}</span>
          </template>
        </el-table-column>
        <el-table-column label="时间" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>下单时间: {{ scope.row.Service }}</p>
              <p>送达最后时间: {{ scope.row.OrderTime }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.Service }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="收货人信息" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>收货人id: {{ scope.row.userId }}</p>
              <p>住址id: {{ scope.row.AddressId }}</p>
              <p>联系方式: {{ scope.row.OrderPhone }}</p>
              <p>留言: {{ scope.row.msgInfo }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.userId }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="订单状态" width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.OrderStatus }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">发货</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currpage"
          :page-sizes="[4, 6, 9, 12]"
          :page-size="pagesize"
           layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  el: "#ordermanage",
  data() {
    return {
      order: {
        orderNo: "",
        orderstate: ""
      },
      tableData: [],
      pagesize: 4,
      currpage: 1
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      console.log(111);
      this.axios({
        method: "POST",
        url: "/orders/shaixuan",
        data: {
          OrderNo: this.order.orderNo,
          orderstate: this.order.orderstate
        }
      })
        .then(res => {
          console.log("筛选成功", res);
          if (res.data.state === "200") {
            this.tableData = res.data.data;
          }
        })
        .catch(err => {
          console.log("筛选失败", err);
        });
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.axios({
        method: "POST",
        url: "/orders/edit",
        data: {
          OrderId: row.OrderId
        }
      })
        .then(res => {
          console.log("改变成功", res);
          this.getData();
        })
        .catch(err => {
          console.log("改变失败", err);
        });
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currpage = val;
    }
  }
};
</script>
<style lang="less">
#OrderManage {
  margin: 20px;
  background: white;
}
</style>
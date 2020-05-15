<template>
    <div id="OrderManage">
        <div>
            <h3>查询订单</h3>
            <div> 
                <label for="">订单号</label>
                <input id="ordernum" type="text">
            </div>
            <div> 
                <label for="ordername">商品名</label>
                <input id="ordername" type="text">
            </div>
            <div> 
                <label for="Consignee">收货人</label>
                <input id="Consignee" type="text">
            </div>
            <div> 
                <label for="orderstate">订单状态</label>
                <input id="orderstate" type="text">
            </div>
            <div>
                <el-button type="primary" @click="onSubmit">筛选</el-button>
            </div>
        </div>
        <div id="todolist">
            <h3>全部订单</h3>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="全部订单" name="first">
                </el-tab-pane>
                <el-tab-pane label="待付款" name="second">
                </el-tab-pane>
                <el-tab-pane label="待发货" name="third">
                </el-tab-pane>
                <el-tab-pane label="已发货" name="fourth">
                </el-tab-pane>
                <el-tab-pane label="已完成" name="fiveth">
                </el-tab-pane>
                <el-tab-pane label="已关闭" name="sixth">
                </el-tab-pane>
                <el-tab-pane label="退款中" name="seventh">
                </el-tab-pane>
                <div>
                    <el-table
                    :data="tableData.slice((currpage-1)*pagesize,currpage*pagesize)"
                    :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                    style="width: 100%">
                     <el-table-column
                    label="订单号"
                    width="180">
                    <template slot-scope="scope">
                        <span>{{ scope.row.Ordernum }}</span>
                    </template>
                    </el-table-column>
                    <el-table-column
                    label="商品"
                    width="180">
                    <template slot-scope="scope">
                        <span>{{ scope.row.goods }}</span>
                    </template>
                    </el-table-column>
                    <el-table-column
                    label="单价"
                    width="180">
                    <template slot-scope="scope">
                        <span>{{ scope.row.unit }}</span>
                    </template>
                    </el-table-column>
                    <el-table-column
                    label="收件人"
                    width="180">
                    <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.name }}</p>
                        <p>住址: {{ scope.row.address }}</p>
                        <p>联系方式: {{ scope.row.tel }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                        </el-popover>
                    </template>
                    </el-table-column>
                    <el-table-column
                    label="订单状态"
                    width="180">
                    <template slot-scope="scope">
                        <span >{{ scope.row.status }}</span>
                    </template>
                    </el-table-column>
                    <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">订单详情</el-button>
                    </template>
                    </el-table-column>
                </el-table>
                <div class="block">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currpage"
                        :page-sizes="[4, 10, 15, 20]"
                        :page-size="5"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="tableData.length">
                    </el-pagination>
                    </div>
            </div>
            </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    el: '#ordermanage',
    data() {
      return {
        tableData: [{
          Ordernum:1,
          goods:'玫瑰',
          unit:'$20',
          name: '张三',
          address:'你心里',
          tel:'17525483654',
          status:'已发货',
          nber:3
        }, {
          Ordernum:2,
          goods:'玫瑰',
          unit:'$20',
          name: '张三',
          address:'你心里',
          tel:'17525483654',
          status:'已发货',
          nber:3
        },{
          Ordernum:3,
          goods:'玫瑰',
          name: '张三',
          unit:'$20',
          address:'你心里',
          tel:'17525483654',
          status:'待发货',
          nber:2

        },{
          Ordernum:4,
          goods:'玫瑰',
          unit:'$20',
          name: '张三',
          address:'你心里',
          tel:'17525483654',
          status:'已发货',
          nber:3
        }, {
          Ordernum:2,
          goods:'玫瑰',
          unit:'$20',
          name: '张三',
          address:'你心里',
          tel:'17525483654',
          status:'已发货',
          nber:3
        }, {
          Ordernum:2,
          goods:'玫瑰',
          unit:'$20',
          name: '张三',
          address:'你心里',
          tel:'17525483654',
          status:'已发货',
          nber:3
        }, {
          Ordernum:2,
          goods:'玫瑰',
          unit:'$20',
          name: '张三',
          address:'你心里',
          tel:'17525483654',
          status:'已发货',
          nber:3
        }, {
          Ordernum:2,
          goods:'玫瑰',
          unit:'$20',
          name: '张三',
          address:'你心里',
          tel:'17525483654',
          status:'已发货',
          nber:3
        }],
        currentPage1: 5,
        pagesize:4,
        currpage:1
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleClick(tab, event) {
        console.log(tab.index, event);
        //  switch(tab.index) {
        //     case 0:
        //       tableData = tableData;
        //       break
        //     default:
        //       tableData = tableData.filter(item => item.status)
        //       break
        //   }
      },
      handleSizeChange(val){
          console.log('每页 ${val} 条 ')
          this.pagesize =  val;
      },
      handleCurrentChange(val){
          this.currpage = val;
          console.log('当前页： ${val}')
      }
    }
}
</script>
<style lang="less">
#OrderManage{
    margin:20px;
    background: white;
}
</style>
<template>
    <div id="goodsmanage">
        <h4>这里是商品管理</h4>
         <router-link to="/home/NewGoods"><el-button  class="news" type="primary">发布商品</el-button></router-link>
        <el-table
        show-header:true
        :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())).slice((currpage-1)*pagesize,currpage*pagesize)"
        style="width: 100%">
            <el-table-column
                align="left">
                <el-checkbox >
                </el-checkbox>
            </el-table-column>
            <el-table-column
            label="商品">
            <template slot-scope="scope">
                    <span>{{scope.row.GoodsId}}</span>
                </template>
            </el-table-column>
            <el-table-column
            label="价格">
            <template slot-scope="scope">
                    <span>{{scope.row.GoodsId}}</span>
                </template>
            </el-table-column>
            <el-table-column
            label="已销售">
            <template slot-scope="scope">
                    <span>{{scope.row.GoodsId}}</span>
                </template>
            </el-table-column>
            <el-table-column
            label="库存">
            <template slot-scope="scope">
                    <span>{{scope.row.GoodsId}}</span>
                </template>
            </el-table-column>
            <el-table-column
            align="right">
            <template slot="header">
                <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(tableData,scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currpage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="5"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length">
          </el-pagination>
        </div>
    </div>
</template>
<style lang="less">
#goodsmanage{
  margin: 20px;
  background: white;
  .news{
    margin: 20px;
  }

}
</style>
<script>
export default {
    data() {
      return {
        tableData: [],
        search: '',
        currentPage1: 5,
        pagesize:5,
        currpage:1
      }
    },
    created(){
      this.getGoods();
    },
    methods: {
      getGoods(){
            this.axios({
                method:'GET',
                url:'/goods',
            })
            .then(res => {
                console.log(res.data)
                if(res.data.state === '200'){
                  this.tableData = res.data.data
                }
            })
            .catch(err =>{
                console.log(err)
            })
      },
      handleEdit(index, row) {
        console.log(index, row);
        this.$prompt('请输入邮箱', '提示', {
          dangerouslyUseHTMLString: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      handleDelete(arr,index, row) {
        console.log(arr,index, row);
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          arr.splice(index,1)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pagesize = val;
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currpage = val;
      }
    }
  }
</script>
<template>
    <div id="goodsmanage">
        <h4>这里是商品管理</h4>
         <router-link to="/home/NewGoods"><el-button  class="news" type="primary">发布商品</el-button></router-link>
        <el-table
        show-header:true
        :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        :data="tableData.slice((currpage-1)*pagesize,currpage*pagesize)"
        style="width: 100%">
            <el-table-column
                align="left">
                <template slot-scope="scope">
                    <span>{{scope.row.SkuId}}</span>
                </template>
            </el-table-column>
            <el-table-column
            label="商品">
            <template slot-scope="scope">
                    <span>{{scope.row.GoodsName}}</span>
                </template>
            </el-table-column>
            <el-table-column
            label="价格">
            <template slot-scope="scope">
                    <span>￥{{scope.row.Price}}.00</span>
                </template>
            </el-table-column>
            <el-table-column
            label="已销售">
            <template >
                    <span>0</span>
                </template>
            </el-table-column>
            <el-table-column
            label="库存">
            <template slot-scope="scope">
                    <span>{{scope.row.Sum}}</span>
                </template>
            </el-table-column>
            <el-table-column
            align="right">
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
        <template>
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currpage"
              :page-sizes="[4,2,6,8 ]"
              :page-size="page-size"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tableData.length">
            </el-pagination>
          </div>
        </template>
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
        // currentPage1: 5,
        pagesize:4,
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
        this.$prompt('请输入邮箱','请输入', '提示', {
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
        console.log(arr,index, row.SkuId);
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios({
          method: 'POST',
          url: '/goods/del',
          data: {
            SkuId:row.SkuId
          }
        })
        .then( res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
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
        this.pagesize = val;
      },
      handleCurrentChange(val) {
        this.currpage = val;
      }
    }
  }
</script>
<template>
    <div id="stores">
        <p class="title">这里是店铺管理</p>
        <div id="top">
            <img src="../assets/favicon.png">
            <h4>三组的鲜花店</h4>
            <router-link class="btn" to="/StoreManage">修改信息</router-link>
        </div>
        <div id="browse">
            <ul>
                <li>
                    <h2>5</h2>
                    <p>昨日浏览量</p>
                </li>
                <li>
                    <h2>2</h2>
                    <p>昨日访问数</p>
                </li>
                <li>
                    <h2>2</h2>
                    <p>昨日商品浏览量</p>
                </li>
                <li>
                    <h2>5</h2>
                    <p>昨日商品访问数</p>
                </li>
                <li>
                    <h2>5</h2>
                    <p>今日浏览量</p>
                </li>
                <li>
                    <h2>3</h2>
                    <p>今日访问量</p>
                </li>
            </ul>
        </div>
        <div>
            <h4>最近一周商品销售排行</h4>
             <el-table
             :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            :data="tableData"
            style="width: 100%">
                <el-table-column
                label="排名"
                width="180">
                <template slot-scope="scope">
                    <span>{{scope.row.SkuId}}</span>
                </template>
            </el-table-column>
            <el-table-column
            label="商品"
            width="180">
            <template slot-scope="scope">
                    <span>{{scope.row.GoodsId}}</span>
                </template>
            </el-table-column>
            <el-table-column
            label="销量">
            <template slot-scope="scope">
                    <span>{{scope.row.Sum}}</span>
                </template>
            </el-table-column>
            <el-table-column
            label="成交金额(元)">
            <template slot-scope="scope">
                    <span>{{scope.row.Price}}</span>
                </template>
            </el-table-column>
        </el-table>

        </div>
       
    </div>
</template>
<script>
export default {
     data() {
        return {
          tableData: []
        }
      },
      created(){
          this.getData()
      },
      methods:{
          getData(){
              this.axios({
                method:'GET',
                url:'/stores',
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
    }
}
</script>
<style lang="less">
#stores{
    margin: 20px;
    background: white;
    h4{
        margin: 20px;
    }
    .title{
        display: inline-block;
    }
    #top{
        overflow: hidden;

            img{
                width: 40px;
                height: 40px;
                float: left;
                margin-left: 20px;
            }

            h4{
                float: left;
                margin: 0 10px;
            }
            .btn{
                color:green;
                float: right;
                margin-right: 20px;
            }
        }
    #browse{
        background: rgba(203, 211, 212, 0.651);
        padding: 20px;
        ul,li{
            list-style: none;
            display: inline-block;
            margin:0 10px;
        }
    }
}
</style>
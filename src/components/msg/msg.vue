<template>
  <el-row class="widths">
    <el-row class="coent">
      <el-row :gutter="50">
        <el-col :xs="24" :sm="24" :md="16" :lg="16" >
          <div class="bgs lefts">
            <img src="../../assets/tt.jpg" alt="">
          </div>
        </el-col>
        <el-col :md="8" :lg="8" class="hidden-sm-and-down">
          <div class="bgs rights">
            <div>1</div>
            <div>2</div>
          </div>
        </el-col>
      </el-row>
    </el-row>
  </el-row>
</template>

<style lang="scss" scoped>
.widths{
  /* background: #f5f8fa; */
  background: #70afda;
}
.bgs{
  background: #fff;
}
.coent{
  width: 80%;
  margin: 20px auto;
}
.lefts,.rights{
  height: 400px;
}
.lefts{
  img{
    border-radius: 7px;
  }
}
</style>

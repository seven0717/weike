<template>
  <el-row class="tos">
    <el-row class="widths bgs">
      <el-row>
        <el-col style="margin:10px;"><h2>EduSoho教育云及私有云方案</h2></el-col>
      </el-row>
      <el-row>
        <el-col :xs="12" :sm="12" :md="12" :lg="12">
          <div class="zhanshi">
            <img src="../../assets/111.jpg" alt="">
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12">
          <div style="margin:20px 0;">
            <span class="colors">教学计划：</span><span>教学也计划</span>
          </div>
          <div style="margin:20px 0;">
            <span class="colors">学习有效期：</span><span>学习有效期</span>
          </div>
          <div style="margin-top:60px;">
            <el-button type="success">加入学习</el-button>
          </div>
        </el-col>
      </el-row>
    </el-row>
    <!-- 介绍 -->
    <el-row class="widths">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="16" :lg="16" >
          <div class="bgs" style="margin:10px 0;padding:10px;min-height:170px;">
            <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="介绍" name="first">介绍</el-tab-pane>
            <el-tab-pane label="目录" name="second">
              <ul>
                <li>01</li>
                <li>02</li>
                <li>03</li>
                <li>01</li>
                <li>02</li>
                <li>03</li>
                <li>01</li>
                <li>02</li>
                <li>03</li>
                <li>01</li>
                <li>02</li>
                <li>03</li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="笔记" name="third">笔记</el-tab-pane>
            <el-tab-pane label="评价" name="fourth">评价</el-tab-pane>
          </el-tabs>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8">
          <div class="bgs" style="margin:10px 0;padding:10px;min-height:140px;">
            <el-tabs>
              <el-tab-pane disabled label="授课老师">
                <div>
                  <img src="../../assets/111.jpg" alt=""  class="img_tx"><span style="margin-left:10px;">test</span>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="bgs" style="margin:10px 0;min-height:150px; padding:10px">
            <el-tabs>
              <el-tab-pane disabled label="学员动态">
                <div>
                  <span class="colors">还没有动态</span> 
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </el-row>
    <!-- 介绍 -->
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab.name);
      }
    }
  };
</script>

<style scoped>
.colors{
  color: #919191;
}
.tos{
  background: #f5f8fa;
  width: 100%;
}
.bgs{
 background: #fff;
}
.widths{
  width: 90%;
  /* height: 300px; */
 
  margin: 20px auto;
}
.zhanshi{
  width: 90%;
  height: 250px;
  padding: 10px;
}
img{
  width: 100%;
  height: 100%;
}
.oo{
  background: red;
}
.hh{
  height: 500px;;
}
.img_tx{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  vertical-align: top;
}
</style>

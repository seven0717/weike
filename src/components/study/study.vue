<template>
  <el-row class="tos">
    <el-row class="widths bgs">
      <el-row>
        <el-col style="margin:10px;"><h2>EduSoho教育云及私有云方案</h2></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="6" :sm="6" :md="6" :lg="6" style="text-align:center;margin:10px 0;">
          <div>
            <el-progress type="circle" :percentage="0"></el-progress>
          </div>
        </el-col>
        <el-col :xs="18" :sm="18" :md="18" :lg="18">
          <el-row>
            <el-col :xs="6" :sm="6" :md="6" :lg="6">
              <div style="color:#919191;font-size:14px;">
                <p><i class="el-icon-success"></i> 已完成</p>
                <p style="line-height:90px; font-size:17px;">0/1 &nbsp;&nbsp;&nbsp;&nbsp;<span>任务</span></p>
              </div>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6">
              <div style="color:#919191;font-size:14px;">
                <p><i class="el-icon-date"></i> 学习有效期</p>
                <p style="line-height:90px; font-size:17px;">永久有效</p>
              </div>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6">
              <div style="color:#919191;font-size:14px;">
                <p>下一个学习任务 <i class="el-icon-caret-right"></i></p>
                <p style="line-height:90px; font-size:17px;"><a href="#" style="color:green;">教程名称</a></p>
              </div>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" :lg="6">
              <div style="color:#919191;font-size:14px;line-height:90px;">
                <el-button type="success">加入学习</el-button>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
    <!-- 介绍 -->
    <el-row class="widths">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="16" :lg="16" >
          <div class="bgs" style="margin:10px 0;padding:10px;min-height:170px;">
            <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="目录" name="second">
              <ul>
                <li>01</li>
                <li>02</li>
                <li>03</li>
                <li>01</li>
                <li>02</li>
                <li>03</li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="讨论区" name="third">讨论区</el-tab-pane>
            <el-tab-pane label="笔记" name="thir">笔记</el-tab-pane>
            <el-tab-pane label="资料" name="thid">资料</el-tab-pane>
            <el-tab-pane label="评价" name="fourth">评价</el-tab-pane>
            <el-tab-pane label="介绍" name="fourt">介绍</el-tab-pane>
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
        activeName: 'second'
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

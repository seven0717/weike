<template>
  <el-row class="widths">
    <el-row class="bgs">
     <el-row :gutter="30">
        <el-col :sm="4" :xs="4" :md="4" :lg="4">
          <div class="lefts">
            <p>我的教学</p>
            <div style="padding-left:20px;">
              <router-link tag="li" to="/admin/ols" class="act">添加课程</router-link>
              <router-link tag="li" to="/admin/ols_class" class="act">所教班级</router-link>
              <router-link tag="li" to="/admin/ols_que" class="act">学员问答</router-link>
              <router-link tag="li" to="/admin/ols_class" class="act">学员话题</router-link>
              <router-link tag="li" to="/admin/ols_class" class="act">试卷批阅</router-link>
              <router-link tag="li" to="/admin/ols_class" class="act">作业批阅</router-link>
              <router-link tag="li" to="/admin/ols_class" class="act">教学资料库</router-link>
            </div>
          </div>
        </el-col>
        <el-col :sm="20" :xs="20" :md="20" :lg="20">
          <div class="rights">
            <router-view></router-view>
          </div>
        </el-col>
     </el-row>
    </el-row>
  </el-row>
</template>

<style lang="scss" scoped >
.widths{
  background: #f5f8fa;
}
.bgs{
  width: 90%;
  margin: 20px auto;
}
.lefts, .rights{
  padding: 20px;
  background: #fff;
}
.act{
  cursor: pointer;
  margin: 20px;
  font-size: 14px;
  color: #666;
}
.router-link-active{
  color:red;
}
</style>

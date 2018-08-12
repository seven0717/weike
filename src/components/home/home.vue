<template>
  <el-container>

    <!--头部-->
    <el-header style="text-align: left;">
      <a href="#/shou" class="" style="font-size:20px; font-weight:700">微课堂</a>
      <el-dropdown>
        <span class="el-dropdown-link">
          课程<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>课程1</el-dropdown-item>
          <el-dropdown-item>课程2</el-dropdown-item>
          <el-dropdown-item>课程3</el-dropdown-item>
          <el-dropdown-item>课程4</el-dropdown-item>
          <el-dropdown-item>课程5</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <span class="el-dropdown-link">
          班级<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>班级1</el-dropdown-item>
          <el-dropdown-item>班级2</el-dropdown-item>
          <el-dropdown-item>班级3</el-dropdown-item>
          <el-dropdown-item>班级4</el-dropdown-item>
          <el-dropdown-item>班级5</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <span class="el-dropdown-link">
          小组<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>小组1</el-dropdown-item>
          <el-dropdown-item>小组2</el-dropdown-item>
          <el-dropdown-item>小组3</el-dropdown-item>
          <el-dropdown-item>小组4</el-dropdown-item>
          <el-dropdown-item>小组5</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <router-link to="#" tag="a" style="margin-left: 100px;">资讯</router-link>
      <span  style="float: right">
        <el-input size="small" style="width: 200px; margin-right: 100px"></el-input>
        <router-link to="login" tag="a" style="margin-right: 40px">登陆</router-link>
        <router-link to="login" tag="a">注册</router-link>
      </span>
    </el-header>

    <!--内容-->
    <el-main style="margin:0;padding:0;">
      <router-view/>
    </el-main>

    <!--底部-->
    <el-footer>Powered by EduSoho v8.0.16 ©2014-2018 好知网 课程存档</el-footer>
  </el-container>
</template>

<style>
.el-header,
.el-footer {
  background-color: #555d69;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
a {
  text-decoration: none;
  color: #fff;
}
img{
  width: 100%;
  height: 100%;
}
.el-dropdown {
  font-size: 16px;
  margin-left: 100px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
</style>


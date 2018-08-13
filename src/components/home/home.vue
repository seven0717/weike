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
        <!-- <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>班级1</el-dropdown-item>
          <el-dropdown-item>班级2</el-dropdown-item>
          <el-dropdown-item>班级3</el-dropdown-item>
          <el-dropdown-item>班级4</el-dropdown-item>
          <el-dropdown-item>班级5</el-dropdown-item>
        </el-dropdown-menu> -->
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
      <router-link to="/msg" tag="a" style="margin-left: 100px;">资讯</router-link>
      <span  style="float: right">
        <el-input size="small" style="width: 200px; margin-right: 100px"></el-input>
        <router-link to="login" tag="a" style="margin-right: 40px">登陆</router-link>
        <router-link to="login" tag="a">注册</router-link>
      </span>
    </el-header>

    <!--内容-->
    <el-main style="margin:0;padding:0;">
      <router-view/>
      <!-- 链接 -->
      <el-row class="links">
        <el-row class="links">
         <el-row>
           <el-col :span="14">
             <el-row type="flex" justify="space-around" style="margin:20px 0;">
               <el-col>我是学生</el-col>
               <el-col >我是老师</el-col>
               <el-col>我是管理员</el-col>
               <el-col>商业应用</el-col>
               <el-col>关于我们</el-col>
             </el-row>
             <el-row type="flex" justify="space-around" style="margin:20px 0;">
               <el-col>如何注册</el-col>
               <el-col>发布课程</el-col>
               <el-col>修改底部链接</el-col>
               <el-col>会员专区</el-col>
               <el-col>ES官网</el-col>
             </el-row>
             <el-row type="flex" justify="space-around" style="margin:20px 0;">
               <el-col>我是学生</el-col>
               <el-col>我是老师</el-col>
               <el-col>我是管理员</el-col>
               <el-col>商业应用</el-col>
               <el-col>关于我们</el-col>
             </el-row>
             <el-row type="flex" justify="space-around" style="margin:20px 0;">
               <el-col>我是学生</el-col>
               <el-col>我是老师</el-col>
               <el-col>我是管理员</el-col>
               <el-col>商业应用</el-col>
               <el-col>关于我们</el-col>
             </el-row>
           </el-col>
           <el-col :span="10">
             <el-row>
               <el-col class="bglogo">
                 <img src="../../assets/bottom_logo.png" alt="" style="width:200px;height:100%;">
               </el-col>
             </el-row>
           </el-col>
         </el-row>
        </el-row>
      </el-row>
      <!-- 链接 -->
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
.links{
  margin-top: 20px;
  width: 100%;
  text-align: center;
  background: rgb(139, 139, 139);
}
.bglogo{
  margin-top:20px;
  width:100%;
  height:100%;
}
</style>


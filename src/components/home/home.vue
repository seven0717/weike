<template>
  <el-container>

    <!--头部-->
    <el-header style="text-align: left;">
      <router-link to="/" tag="a">微课堂</router-link>
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
    <el-main>
      <el-row :xs="24" :sm="24" :md="24" :lg="24">
        <el-col>
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>I'm Slide 1</swiper-slide>
            <swiper-slide>I'm Slide 2</swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
            <swiper-slide>I'm Slide 4</swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </el-col>
      </el-row>
      <!-- 课程 -->
      <el-row :xs="24" :sm="24" :md="24" :lg="24">
        <el-col>
          <div>
            <h5 style="font-size:32px; font-weight:400;padding:20px 0 10px 0">网校课程</h5>
            <p>精选网校课程，满足你的学习兴趣。</p>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12">
          <div>
            <h5 style="font-size:32px; font-weight:400;padding:20px 0 10px 0">网校课程</h5>
            <p>精选网校课程，满足你的学习兴趣。</p>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12">
          11111
        </el-col>
      </el-row>
    </el-main>

    <!--底部-->
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
  export default {
    name:'home',
    data(){
      return{
        radio3:'最新',
        // 轮播图
        swiperOption:{
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay : {
            disableOnInteraction: false, //用户操作后是否禁止自动循环
            delay: 2500 //自自动循环时间
          }, //可选选项，自动滑动
          loop:true
        }
      }
    },
    methods:{
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
  }
</script>


<style lang="scss" scoped>
  a{
    text-decoration: none;
    color: #fff;
  }
  .el-header, .el-footer {
    background-color: #555d69;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
  }
  .el-dropdown{
    font-size: 16px;
    margin-left: 100px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .swiper-container {
    width: 100%;
    height: 400px;
  }
  .widths{
    width: 80%;
    text-align: left;
    margin: 50px auto;
  }

button.el-button--success {
  background: #00af86;
}
button.el-button--default {
  border-color: transparent;
  background: #f2f2f2;
  &:hover {
    background: #00af86;
    color: #ffffff;
  }
}
button.btn {
  background: #ffffff;
}
</style>

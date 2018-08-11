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
    <el-main style="margin:0;padding:0;">
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
      <el-row :xs="24" :sm="24" :md="24" :lg="24" class="widths">
        <el-col style="text-align:center">
          <div>
            <h5 style="font-size:32px; font-weight:400;padding:20px 0 10px 0">网校课程</h5>
            <p class="vice">精选网校课程，满足你的学习兴趣。</p>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" style="margin-top:30px">
          <div>
            <el-radio-group v-model="radio1" @change="radio1_1">
              <el-radio-button label="全部课程"></el-radio-button>
              <el-radio-button label="产品介绍"></el-radio-button>
              <el-radio-button label="使用教程"></el-radio-button>
              <el-radio-button label="默认分类"></el-radio-button>
            </el-radio-group>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" style="text-align:right">
          <el-radio-group v-model="radio2" style="margin-top:36px" size="mini" @change="redio2_2">
            <el-radio-button label="最新"></el-radio-button>
            <el-radio-button label="最热"></el-radio-button>
            <el-radio-button label="推荐"></el-radio-button>
          </el-radio-group>
        </el-col>
        <!-- 详情 -->
        <el-col class="eve">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="6" :lg="6">
              <div class="bg-purple">
                <div class="imgs">1</div>
                <div class="titles">使用教程</div>
                <div class="moneys">
                  <el-row>
                    <el-col :xs="4" :sm="4" :md="4" :lg="4"><i class="el-icon-service"></i><span>22</span></el-col>
                    <el-col :xs="4" :sm="4" :md="4" :lg="4"><i class="el-icon-service"></i><span>22</span></el-col>
                    <el-col :xs="16" :sm="16" :md="16" :lg="16" style="text-align:right"><span style="color:green">免费</span></el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6" :lg="6">
              <div class="bg-purple">
                <div class="imgs">1</div>
                <div class="titles">使用教程</div>
                <div class="moneys">
                  <el-row>
                    <el-col :xs="4" :sm="4" :md="4" :lg="4"><i class="el-icon-service"></i><span>22</span></el-col>
                    <el-col :xs="4" :sm="4" :md="4" :lg="4"><i class="el-icon-service"></i><span>22</span></el-col>
                    <el-col :xs="16" :sm="16" :md="16" :lg="16" style="text-align:right"><span style="color:green">免费</span></el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6" :lg="6">
              <div class="bg-purple">
                <div class="imgs">1</div>
                <div class="titles">使用教程</div>
                <div class="moneys">
                  <el-row>
                    <el-col :xs="4" :sm="4" :md="4" :lg="4"><i class="el-icon-service"></i><span>22</span></el-col>
                    <el-col :xs="4" :sm="4" :md="4" :lg="4"><i class="el-icon-service"></i><span>22</span></el-col>
                    <el-col :xs="16" :sm="16" :md="16" :lg="16" style="text-align:right"><span style="color:green">免费</span></el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="6" :lg="6">
              <div class="bg-purple">
                <div class="imgs">1</div>
                <div class="titles">使用教程</div>
                <div class="moneys">
                  <el-row>
                    <el-col :xs="4" :sm="4" :md="4" :lg="4"><i class="el-icon-service"></i><span>22</span></el-col>
                    <el-col :xs="4" :sm="4" :md="4" :lg="4"><i class="el-icon-service"></i><span>22</span></el-col>
                    <el-col :xs="16" :sm="16" :md="16" :lg="16" style="text-align:right"><span style="color:green">免费</span></el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button>更多课程<i class="el-icon-arrow-right"></i></el-button>
        </el-col>
      </el-row>
      <!-- 广告 -->
      <el-row>
        <el-col>
          <div class="adv"></div>
        </el-col>
      </el-row>
      <!-- 班级 -->
      <el-row :xs="24" :sm="24" :md="24" :lg="24" class="widths">
        <el-col style="text-align:center">
          <div>
            <h5 style="font-size:32px; font-weight:400;padding:20px 0 10px 0">推荐班级</h5>
            <p class="vice">班级化学习体系，给你更多的课程相关服务。</p>
          </div>
        </el-col>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="6" :lg="6">
              <div class="class_all">
                <div class="class_all_imgs">
                  <img src="../../assets/111.jpg" alt="" class="class_all_imgs_s">
                  <p class="gos"><el-button size="mini" style="background:orange;color:#fff;">立即加入</el-button></p>
                </div>
                <div class="class_all_title">使用教程</div>
                <div class="class_all_vice">副标题</div>
              </div>
            </el-col>
        </el-row>
      </el-row>
      <el-row>
          <el-col>
            <el-button>更多班级<i class="el-icon-arrow-right"></i></el-button>
          </el-col>
      </el-row>
      <!-- 小组 -->
      <el-row style="width:100%; background:#f5f8fa; margin-top:20px" >
        <el-row :xs="24" :sm="24" :md="24" :lg="24" class="widths">
          <el-col style="text-align:center">
            <div>
              <h5 style="font-size:32px; font-weight:400;padding:20px 0 10px 0">动态</h5>
              <p class="vice">参与小组，结交更多同学，关注课程动态。</p>
            </div>
          </el-col>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="10" :lg="10" class="group_left">
              <el-row class="group_left_title">
                <el-col :xs="24" :sm="24" :md="12" :lg="12">热门小组</el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" style="text-align:right"><i class="el-icon-d-arrow-right"></i></el-col>
              </el-row>
              <el-row>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" class="left_left">
                   <el-col :xs="6" :sm="6" :md="6" :lg="6" style="height:100%;">
                     <img src="../../assets/111.jpg" alt="" style="width:100%; height:100%;">
                   </el-col>
                   <el-col :xs="18" :sm="18" :md="18" :lg="18">
                     <div style="margin-left:10px;">
                       <div style="margin-bottom:10px;">学习圈</div>
                       <div>
                         <i class="el-icon-star-on" style="margin-right:10px;"><span>111</span></i>
                         <i class="el-icon-star-on"><span>111</span></i>
                        </div>
                     </div>
                   </el-col>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" class="left_left">
                   <el-col :xs="6" :sm="6" :md="6" :lg="6" style="height:100%;">
                     <img src="../../assets/111.jpg" alt="" style="width:100%; height:100%;">
                   </el-col>
                   <el-col :xs="18" :sm="18" :md="18" :lg="18">
                     <div style="margin-left:10px;">
                       <div style="margin-bottom:10px;">学习圈</div>
                       <div>
                         <i class="el-icon-star-on" style="margin-right:10px;"><span>111</span></i>
                         <i class="el-icon-star-on"><span>111</span></i>
                        </div>
                     </div>
                   </el-col>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" class="left_left">
                   <el-col :xs="6" :sm="6" :md="6" :lg="6" style="height:100%;">
                     <img src="../../assets/111.jpg" alt="" style="width:100%; height:100%;">
                   </el-col>
                   <el-col :xs="18" :sm="18" :md="18" :lg="18">
                     <div style="margin-left:10px;">
                       <div style="margin-bottom:10px;">学习圈</div>
                       <div>
                         <i class="el-icon-star-on" style="margin-right:10px;"><span>111</span></i>
                         <i class="el-icon-star-on"><span>111</span></i>
                        </div>
                     </div>
                   </el-col>
                </el-col>
              </el-row>
            </el-col>
            <el-col :xs="24" :sm="24" :md="10" :lg="10" class="group_right">
              <el-row class="group_left_title">
                <el-col :xs="12" :sm="12" :md="12" :lg="12">最新小组信息</el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" style="text-align:right"><i class="el-icon-d-arrow-right"></i></el-col>
              </el-row>
              <el-row :gutter="20" :xs="24" :sm="24" :md="9" :lg="9">
                <el-col :xs="24" :sm="24" :md="9" :lg="9" style="margin-top:10px;">
                   <img src="../../assets/111.jpg" alt="" style="width:100%; height:100%;">
                </el-col>
                <el-col :xs="12" :sm="12" :md="11" :lg="11" style="margin-top:10px; border:1px solid red; overflow:hidden">ss888888888888888888888888ss
                </el-col>
                <el-col :xs="12" :sm="12" :md="4" :lg="4" style="margin-top:10px; text-align:right;">2015.2.2</el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-row>
        <!-- 推荐 -->
        <!-- 推荐 -->
      </el-row>
    </el-main>

    <!--底部-->
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      radio1: "全部课程",
      radio2: "最新",
      // 轮播图
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          disableOnInteraction: false, //用户操作后是否禁止自动循环
          delay: 2500 //自自动循环时间
        }, //可选选项，自动滑动
        loop: true
      }
    };
  },
  methods: {
    // 课程
    radio1_1(e) {
      console.log(e);
    },
    // 推荐
    redio2_2(e) {
      console.log(e);
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>


<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #fff;
}
.el-header,
.el-footer {
  background-color: #555d69;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  /*line-height: 160px;*/
}
.el-dropdown {
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
.widths {
  width: 60%;
  text-align: left;
  margin: 50px auto;
  background: rgb(238, 195, 195);
}
.detail_content {
  margin-top: 20px;
  width: 100%;
}
.detail_content_1 {
  text-align: left;
  width: 25%;
  height: 230px;
  border: 1px solid red;
}
.bg-purple {
  border: 1px solid #e4ecf3;
  border-radius: 7px 7px 0 0;
  background: #fff;
  margin: 20px 0;
  transition: all 0.3s ease;
  height: 270px;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 1px 12px 8px rgba(161, 161, 161, 0.664);
  }
  .imgs{
    background: pink;
    width: 90%;
    margin: 10px auto; 
    padding: 5px;
    height: 60%;
  }
  .titles{
    // margin: 10px;
    padding: 5px;
  }
  .moneys{
    padding: 5px;
  }
}
.eve{
  cursor: pointer;
}
.adv{
  margin-top: 30px;
  width: 100%;
  height: 300px;
  background: #a4e6ec;
}
.vice{
  color:#919191;
}
.class_all{
  // border: 1px solid #e4ecf3;
  border-radius: 7px 7px 0 0;
  background: #fff;
  margin: 20px 0;
  transition: all 0.3s ease;
  height: 270px;
  cursor: pointer;
  text-align: center;
  color: #616161;
}
.class_all_imgs{
  border-radius: 7px 7px 0 0;
  background: #000;
  width: 100%;
  height: 60%;
  transition: all 0.3s ease;
  overflow: hidden;
  
}
.class_all_title{
  margin: 25px 0;
}
.class_all_vice{
  font-size: 14px;
}
.class_all_imgs_s{
  width: 100%;
  height: 100%;
}
.class_all_imgs_s:hover{
  opacity: 0.1;
}
.gos{
  transition: all 0.3s ease;
}
.class_all_imgs_s:hover+.gos{
  transition: all 0.3s ease;
  margin-top: -100px;
}
.group_left, .group_right{
  background: #fff;
  width: 50%;
  height: 300px;
}
.group_right{
  //  background: red;
}
.group_left_title{
  border-bottom: 1px solid #919191;
  font-size: 18px;
  padding: 10px;
}
.left_left{
  margin: 10px 0;
  // border: 1px solid red;
  height: 60px;
}
</style>

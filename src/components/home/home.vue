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
      <el-row :xs="24" :sm="24" :md="24" :lg="24" class="widths">
        <el-col>
          <div>
            <h5 style="font-size:32px; font-weight:400;padding:20px 0 10px 0">网校课程</h5>
            <p>精选网校课程，满足你的学习兴趣。</p>
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
  background-color: #e9eef3;
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
  width: 90%;
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
</style>

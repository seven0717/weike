<template>
  <el-row class="bgs">
    <el-row class="widths">
      <!-- 控制选项 -->
      <el-row>
        <el-col>
          <div class="head_s">
            <el-radio-group v-model="radio1" @change="radio1_1" size="mini">
              <el-radio-button label="最新"></el-radio-button>
              <el-radio-button label="最热"></el-radio-button>
              <el-radio-button label="推荐"></el-radio-button>
            </el-radio-group>
          </div>
        </el-col>
      </el-row>
      <!-- 控制选项 -->
      <!-- 所有课程 -->
      <el-row :gutter="20">
        <router-link tag="li" to="/shou">
          <el-col :xs="12" :sm="12" :md="6" :lg="6" v-for="(item,index) in 6" :key="index" class="clicks">
            <div class="course">
              <div class="course_img">
                <img src="../../assets/111.jpg" alt="">
              </div>
              <div class="course_title">
                <p>这是标题{{index}}</p>
              </div>
            </div>
          </el-col>
        </router-link>
      </el-row>
      <!-- 所有课程 -->
    </el-row>
  </el-row>
</template>

<script>
export default {
  naem:"more_course",
  data(){
    return {
      radio1:"最新"
    }
  },
  methods:{
    // 选择课程
    radio1_1(e){
      console.log(e);
      
    }
  }
}
</script>


<style scoped>
.bgs{
  background: #f5f8fa;
}
.widths{
  width: 90%;
  margin: 0 auto;
  /* text-align: center; */
}
.head_s{
  margin: 10px 0;
}
.course{
  width: 100%;
  height: 200px;
  /* border: 1px solid red; */
  background: #fff;
  border-radius: 4px;
  transition: all 0.3s ease;
}
.course_img{
  height: 70%;
  /* padding: 10px; */
}
img{
  width: 100%;
  height: 100%;
  border-radius: 4px 4px 0 0;
}
.course_title{
  line-height: 60px;
  padding-left: 5px;
}
.clicks{
  margin-bottom:20px;
}
.course:hover{
  cursor: pointer;
  transform: translateY(-8px);
  box-shadow: 1px 12px 33px rgba(161, 161, 161, 0.664);
}
</style>

<template>
  <el-row class="bgs">
    <el-row class="widths">
      <!-- 控制选项 -->
      <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="6" :lg="6" style="margin-top:10px;" v-for="(item,index) in 5" :key="index">
            <div class="teachers">
              <div class="teachers_nick">
                <div>
                  <img src="../../assets/nick.jpg" alt="" class="teachers_nicks">
                </div>
                <p style="font-weight:700;">名字{{item}}</p>
                  <p style="color:#919191;font-size:14px">职务{{index}}</p>
              </div>
              <div style="" class="ups">订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问问{{index}}</div>
            </div>
          </el-col>
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
  text-align: center;
}

.teachers{
  margin-top: 10px;
  border-radius: 7px;
  background: rgb(204, 173, 173);
  height: 300px;
  transition: all 0.3s ease;
  border: 1px solid rgba(214, 214, 214, 0.664);
}
.teacher_s{
  text-align: center;
  margin: 20px auto;
  width: 70%;
  text-align: center;
}
.teachers_nick{
  border-radius: 7px 7px 0 0;
  height: 80%;
  background: #f5f8fa;
}
.teachers_nicks{
  margin: 0px auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 20px 0;
  cursor: pointer;
}
.teachers:hover{
  transform: translateY(-8px);
    box-shadow: 1px 12px 8px rgba(161, 161, 161, 0.664);
}
.ups{
  color:#919191;
  font-size:14px;
  padding: 5px;
  overflow: hidden;
  text-align:left;
  height: 16%;
  word-wrap: break-word;
  word-break: normal;
}
</style>

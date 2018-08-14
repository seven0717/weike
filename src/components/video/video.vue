<template>
  <el-row class="widths">
   <el-row :gutter="30">
    <el-col :sm="24" :xs="24" :md="15" :lg="15">
      <div>
          <v-playback :url="list"></v-playback>
      </div>
    </el-col>
    <el-col :sm="24" :xs="24" :md="9" :lg="9">
      <div style="background:red;">1</div>
    </el-col>
   </el-row>
  </el-row>
</template>

<script>

export default {
  data(){
    return{
      list:'./static/7.mp4'
      
    }
  }
 
}
</script>


<style scoped>
.widths{
  width: 90%;
  margin: 20px auto;
}
</style>


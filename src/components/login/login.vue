<template>
  <el-row>
    <!--表单验证-->
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <el-tabs type="border-card" class="cut" stretch>
          <el-tab-pane label="用户登陆">
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" label-position="top">
              <el-form-item label="账号" prop="user_name">
                <el-input type="user_name" v-model="ruleForm2.user_name" auto-complete="off" placeholder="手机号/邮箱/用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-switch v-model="yon"
                           active-color="#13ce66"
                           inactive-color="#666666"
                           active-text="记住密码"
                           @change="yn"
                ></el-switch>
                <el-button type="success" round style="width: 100%" @click="submitForm('ruleForm2')">提交</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="用户注册">
            <el-form :model="ruleForm3" status-icon :rules="rules3" ref="ruleForm3" label-width="100px" label-position="top">
              <el-form-item label="账号" prop="user_name">
                <el-input v-model="ruleForm3.user_name" auto-complete="off" placeholder="手机号/邮箱/用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm3.password" auto-complete="off" placeholder="密码"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="password1">
                <el-input type="password" v-model="ruleForm3.password1" auto-complete="off" placeholder="确认密码"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm3.email" auto-complete="off" placeholder="邮箱"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="success" round style="width: 100%" @click="submitForm3('ruleForm3')">提交</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
  export default {
    data() {
      let validateUser = (rule, value, callback) => {
        let uPattern = /^[a-zA-z0-9]\w{5,18}$/;
        if (value === '') {
          callback(new Error('请输入账号'));
        } else if(uPattern.test(value) === false) {
          callback(new Error('6-18位数字或字母，不能有特殊字符'))
        }else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        let regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(regExp.test(value) === false){
          callback(new Error('8-16字母和数字组成，不能是纯数字或纯英文'))
        }else{
          callback();
        }
      };
      var validatePass3 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else {
          if(value === this.ruleForm3.password){
            callback();
          }else {
            callback(new Error('两次输入的密码不一致'));
          }
        }
      };
      var validateEmail = (rule, value, callback) => {
        let ema = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if (value === '') {
          callback(new Error('请输入邮箱'));
        } else if(ema.test(value) === false) {
          callback(new Error('正确的邮箱格式：xxx@xxx.xxx'));
        }else{
          callback();
        }
      };
      return {
        //登陆
        ruleForm2: {
          user_name: '',
          password: '',
        },
        //注册
        ruleForm3:{
          user_name:'',
          password:'',
          password1:'',
          email:''
        },
        //注册验证
        rules3:{
          user_name: [{ validator: validateUser, trigger: 'blur',required: true }],
          password: [{ validator: validatePass2, trigger: 'blur',required: true }],
          password1: [{ validator: validatePass3, trigger: 'blur',required: true }],
          email: [{ validator: validateEmail, trigger: 'blur',required: true }]
        },
        //登陆验证
        rules2: {
          user_name: [{ validator: validateUser, trigger: 'blur',required: true }],
          password: [{ validator: validatePass2, trigger: 'blur',required: true }]
        },
        yon:false,
        yon1:true
      };
    },
    methods: {
      //登陆
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm2);
            this.$message({message:'登陆成功',type:'success'});
            this.$router.replace(this.$route.query.redirect || "/");
          }
        });
      },
      //注册
      submitForm3(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm3);
            this.$message({message:'注册成功',type:'success'});
          } else {
            console.log('error submit!!');
            this.$message({message:'注册失败',type:'waring'});
            return false;
          }
        });
      },
      //记住密码
      yn(e){
        console.log(e)
      }
    }
  }
</script>

<style scoped>
  .cut{
    margin: 100px auto;
    width: 500px;
  }
</style>

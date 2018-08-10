<template>
  <div class="login">
    <header class="login-header">
      <span class="logo"></span>
    </header>
    <section class="login-wrapper">
      <el-form :model="loginForm" :rules="rules2" ref="loginForm" class="login_form">
        <h2>
          <img width="30px;" style="margin-bottom:-9px" src="../assets/img/login1.png">
          <span>备课帮</span>
        </h2>
        <el-form-item prop="UserName">
          <el-input type="text" v-model="loginForm.UserName" auto-complete="off" @keyup.enter.native="userLogin('loginForm')" @focus="clearMessage()" placeholder="账号"></el-input>
        </el-form-item>
        <br>
        <el-form-item prop="Password">
          <el-input type="password" v-model="loginForm.Password" auto-complete="off" @keyup.enter.native="userLogin('loginForm')" @focus="clearMessage()" placeholder="密码"></el-input>
        </el-form-item>
        <p style="color:red;text-align:center">{{ErroMessage}}</p>
        <br>
        <el-form-item style="width:100%;">
          <el-button type="primary" :loading="loginLoadingState" style="width:100%;" @click="userLogin('loginForm')">
            <span>{{adminLoading}}</span>
          </el-button>
        </el-form-item>
      </el-form>
    </section>
  
    <footer class="login-footer">
            <div>
                <div>
                    <span class="copy">©<span>山东七方智慧课堂 |  <a href="http://www.52bkb.com/">关于我们</a> | <a href="http://www.52bkb.com/product/product.php?id=496">公司产品</a></span></span></div>
                <div>
                    <a href="http://www.miitbeian.gov.cn/" target="_blank">鲁ICP备16044992号-1</a>
                </div>
            </div>
        </footer>
  </div>
</template>

<script>
  import Vue from "vue";
  import axios from "axios";
  //   import '../assets/js/base64.js'
  import Abp from "../Abp/Abp";
  import {
    mapState,
    mapGetters,
    mapActions,
    mapMutations
  } from "vuex";
  export default {
    data() {
      return {
        loginForm: {
          UserName: "",
          Password: "",
          SchoolID: "dx0000001"
        },
        rules2: {
          UserName: [{
            required: true,
            message: "请输入账号",
            trigger: "blur"
          }],
          Password: [{
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }]
        },
        ErroMessage: "",
        loading: false,
        adminLoading: "登录",
        loginLoadingState: false
      };
    },
    computed: {
      ...mapState({
        loginfaile: state => state.logout.loginfaile
      })
    },
    mounted() {},
    methods: {
      ...mapActions(["login", "moremenu"]),
      clearMessage() {
        this.ErroMessage = "";
        //   this.loginfaile = ' ';
      },
      userLogin(formName) {
        console.log(this.$refs[formName].validate);
  
        this.ErroMessage = "";
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.loginLoadingState = true;
            this.adminLoading = "正在登录...";
            axios
              .post(
                "http://192.168.0.20/api/v1/admin/teacher/login",
                this.loginForm, {
                  timeout: 2000
                }
              )
              .then(response => {
                if (response.data.IsSuccess) {
                  if (
                    localStorage.getItem("CurrentUser") &&
                    localStorage.getItem("CurrentUser") ==
                    response.data.Data.Teacher.FullName
                  ) {
                    this.login(response);
                    sessionStorage.setItem(
                      "AuthorizationBearer",
                      response.data.Data.Token
                    );
                    sessionStorage.setItem(
                      "UserInfo",
                      JSON.stringify(response.data.Data.Teacher)
                    );
                    this.$router.replace(this.$route.query.redirect || "/home");
                    this.adminLoading = "登录";
                    this.loginLoadingState = false;
                    for (var i = 0; i < response.data.Data.Menu.length; i++) {
                      response.data.Data.Menu[i].bool = true;
                      sessionStorage.setItem(
                        "GlobalMenu",
                        JSON.stringify(response.data.Data.Menu)
                      );
                    }
                  } else {
                    this.login(response);
                    sessionStorage.setItem(
                      "AuthorizationBearer",
                      response.data.Data.Token
                    );
                    sessionStorage.setItem(
                      "UserInfo",
                      JSON.stringify(response.data.Data.Teacher)
                    );
                    this.$router.replace(this.$route.query.redirect || "/home");
                    localStorage.setItem(
                      "CurrentUser",
                      response.data.Data.Teacher.FullName
                    );
                    // if (localStorage.getItem('FavoriteMenu')) {
                    //     localStorage.removeItem('FavoriteMenu')
                    // }
                    // if (this.$cookie.get('admin@local')) {
                    //     this.$cookie.delete('admin@local');
                    // }
                    this.adminLoading = "登录";
                    this.loginLoadingState = false;
                    for (var i = 0; i < response.data.Data.Menu.length; i++) {
                      response.data.Data.Menu[i].bool = true;
                      sessionStorage.setItem(
                        "GlobalMenu",
                        JSON.stringify(response.data.Data.Menu)
                      );
                    }
                  }
                } else {
                  this.loginLoadingState = false;
                  this.adminLoading = "请重新登录";
                  this.ErroMessage = response.data.OutputMessage;
                }
              })
              .catch((error, status) => {
                console.log(status);
                this.loginLoadingState = false;
                this.adminLoading = "请重新登录";
                this.ErroMessage = "登录出错";
              });
          }
        });
        return false;
      }
    }
  };
</script>
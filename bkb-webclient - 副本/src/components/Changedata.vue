<template>
<div>
    <div class="change-left">
        <div class="change-left__title">修改资料</div>
        <div class="change-left__items">
            <ul>
                <li class="active">修改密码</li>
            </ul>
        </div>
    </div>
    <el-row style="margin-left:180px;margin-top:10%">
        <el-col :lg="24" :sm="24">
            <el-col :lg="4">&nbsp;</el-col>
            <el-col :lg="8">
                <el-form :model="changepassForm" :rules="changepassRule" ref="changepassForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="账号" prop="UserName">
                        <el-input  v-model="changepassForm.UserName" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="旧密码" prop="OldPassword">
                        <el-input type="password" v-model="changepassForm.OldPassword" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop="NewPassword">
                        <el-input type="password" v-model="changepassForm.NewPassword"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="AgainPassword">
                        <el-input type="password" v-model="AgainPassword"></el-input>
                    </el-form-item>
                    <el-form-item style="text-align:right">
                        <el-button @click="resetForm('changepassForm')">重置</el-button>
                        <el-button type="primary" :loading="loadingState" @click="submitForm('changepassForm')">更改密码</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-col>
    </el-row>
</div>
</template>

<script>
    import API from '../data/api'
    const api = new API();
    export default {
        data () {
            var validatePass = (rule, value, callback) => {
                value = this.AgainPassword;
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.changepassForm.NewPassword) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                changepassForm:{
                    UserName:'',
                    OldPassword:'',
                    NewPassword:''
                },
                // 确认密码
                AgainPassword:'',
                changepassRule:{
                    UserName:[{ required:true,message:'用户名不能为空',trigger:'blur' }],
                    OldPassword:[{ required:true,message:'请输入旧密码',trigger:'blur' }],
                    NewPassword:[{ required:true,message:'请输入新密码',trigger:'blur' }],
                    AgainPassword:[{ required:true,validator: validatePass,trigger:'blur' }]
                },
                loadingState:false,
            }
        },
        methods:{
            // 提交
            submitForm (formName) {
                let that = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.loadingState = true;
                        api.UpdateTeacherPassword(this.changepassForm)
                            .then((res)=>{
                                this.loadingState = false;
                                if (res.data.IsSuccess) {
                                    api.reqSuccess(that,res.data.OutputMessage)
                                }else{
                                    api.reqFail(that,res.data.OutputMessage)
                                }
                            })
                            .catch((res)=>{
                                this.loadingState = false;
                                if (res.status == 401) {
                                    api.reqWarn(that,'您没有权限操作')
                                }
                            })
                    }
                })
            },
            // 重置
            resetForm (formName) {
                this.$refs[formName].resetFields();
                this.AgainPassword = '';
            }
        }
    }
</script>
<style lang="scss" scope>
    .change-left{
        position: absolute;
        width: 180px;
        top: 0px;
        bottom: 0px;
        overflow: hidden;
        background: #EAEDF1;
        float: left;
        margin-left: -20px;
        .change-left__title{
            width: 180px;
            height: 70px;
            line-height: 70px;
            background: #D9DEE4;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: bold;
            text-indent: 20px;
        }
        .change-left__items{
            position: absolute;
            top: 70px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            overflow-y: auto;
            overflow-x: hidden;
            ul{
                list-style: none;
                padding: 0px;
                margin: 0px;
                li{
                    padding: 15px 30px;
                    cursor: pointer;
                }
                .active{
                    background: #f2f2f2;
                }
            }
        }
    }
</style>
<template>
    <el-row>
        <el-col :span="24" class="content-footer">
            <el-row>
                <el-col class="left-content_table" :lg="24" :xs="24">
                    <div class="left-content__title">角色列表</div>
                    <el-select @visible-change="openRole" v-model="value" style="margin-left:20px;" @change="changeSelitem" placeholder="请选择角色">
                        <el-option
                        v-for="item in allRoles"
                        :key="item.ID"
                        :label="item.Name"
                        :value="item.ID"
                        >
                        </el-option>
                    </el-select>
                    <el-button type="success" :loading="loadingState1" @click="submit">提交</el-button>
                </el-col>
                <el-col class="right-content_tree2" style="margin-top:10px;" :lg="6" :xs="24">
                    <div class="right-content__title">菜单树</div>
                    <el-scrollbar :viewClass="Menutree">
                        <el-tree
                            class="right-content__tree"
                            :data="data2"
                            show-checkbox
                            node-key="ID"
                            ref="tree"
                            :props="defaultProps"
                            :render-content="renderContent"
                            :check-strictly="true">
                        </el-tree>
                    </el-scrollbar>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    import API from '../../../data/api'
    const api = new API();
    import Abp from '../../../Abp/Abp'
    export default {
        data() {
        return {
            data2: [ ],
            allRoles: [ ],
            value:'',
            key:'',
            Menutree:'Menutree',
            multipleSelection:'',
            // 点击次数
            clickTimes:1,
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            // 管理角色数据
            manageRole:{
                RoleID:'',
                PrivilegeIDs:[]
            },
            loadingState1:false,
            loadingState2:false,
        }
        },
        methods:{
            renderContent(h, { node, data, store }) {
                if (!data.IconName) {
                    return (
                    <span>
                        <span>
                            <span>{data.Name}</span>
                        </span>
                    </span>);
                } else {
                    return (
                    <span>
                        <span>
                            <em style="width: 20px;height: 20px;display: inline-block;text-align: center;"><i class={'fa '+data.IconName}></i></em>
                            <span style="padding-left:5px">{data.Name}</span>
                        </span>
                    </span>);
                }
            },
            changeSelitem(ID){
                this.manageRole.RoleID = ID;
                let that = this;
                api.GetPrivilegesOfRole(ID)
                    .then((res)=>{
                        if (res.data.IsSuccess) {
                            this.$refs.tree.setCheckedKeys(res.data.Data);
                            api.reqSuccess(that,res.data.OutputMessage);
                        }else{
                            api.reqFail(that,res.data.OutputMessage);
                        }
                    })
                    .catch((res)=>{
                        if (res.status == 401) {
                            api.reqWarn(that,'您没有权限操作')
                        }
                    })
            },
            // 提交数据
            submit(){
                let that = this;
                this.manageRole.PrivilegeIDs = this.$refs.tree.getCheckedKeys();
                console.log(this.manageRole);
                if (!this.manageRole.RoleID == '') {
                    this.loadingState1 = true;
                    api.GrantPrivileges(this.manageRole)
                        .then((res)=>{
                            this.loadingState1 = false;
                            if (res.data.IsSuccess) {
                                api.reqSuccess(that,res.data.OutputMessage)
                            }else{
                                api.reqFail(that,res.data.OutputMessage)
                            }
                        })
                        .catch((res)=>{
                            this.loadingState1 = false;
                            if (res.status == 401) {
                                api.reqWarn(that,'您没有权限操作')
                            }
                        })
                }
            },
            // 获取用户
            openRole(value){
                if (value&&this.clickTimes == 1) {
                    api.GetAllRoles()
                        .then((res)=>{
                            this.clickTimes = 0;
                            this.allRoles = res.data.Data;
                        })
                }
            },
            // 更新右侧菜单树
            // updataMenuTree(){
            //     this.data2 = [];
            //     this.loadingState2 = true;
            //     api.GetPrivileges()
            //         .then((res)=>{
            //             this.loadingState2 = false;
            //             this.data2 = Abp.transData(res.data.Data,'ID','PID','children');
            //         });
            // }
        },
        mounted() {
            api.GetPrivileges()
                .then((res)=>{
                    this.data2 = Abp.transData(res.data.Data,'ID','PID','children');
                });
            $(window).ready(function () {
				var ScreenHeight = $(window).height();
				var ScrollSidebarMenu = ScreenHeight-300;
				$('.Menutree').css('height',ScrollSidebarMenu+'px')
			});
			$(window).resize(function () {
				var ScreenHeight = $(window).height();
				var ScrollSidebarMenu = ScreenHeight-300;
				$('.Menutree').css('height',ScrollSidebarMenu+'px')
			});
        }
    }
</script>

<style lang="scss" scoped>
    button.el-button--success{
        background:#00af86;
    }
    button.el-button--default{
        border-color:transparent;
        background: #f2f2f2;
        &:hover{
            background:#00af86;
            color:#ffffff;
        }
    }
</style>
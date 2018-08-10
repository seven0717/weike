<template>
    <div style="height:100%">
        <div class="content-header">
            <!--<el-button type="success" :loading="loadingState1" @click="addMenu('addMenulist')">增加子菜单</el-button>-->
            <!--<el-button type="success" :loading="loadingState2" @click="addUpbrothermenu('addMenulist')">上增兄弟菜单</el-button>-->
            <!--<el-button type="success" :loading="loadingState3" @click="addDownbrothermenu('addMenulist')">下增兄弟菜单</el-button>-->
            <el-button type="success" :loading="loadingState4" @click="updateMenu">刷新菜单树</el-button>
        </div>
        <div class="content-footer" style="position: absolute;left: 20px;right: 20px;bottom: 20px;top: 50px;">
            <el-row style="height: 100%;">
                <!--左侧表-->
                <el-col class="left-content_table" :md="8" :xs="24">
                    <div class="left-content__title">列表</div>
                    <el-form style="margin-left:15px" :model="addMenulist" :rules="addMenulistRule" ref="addMenulist" :label-position="labelPosition" label-width="80px" >
                        <el-form-item label="菜单名称" prop="Name">
                            <el-input style="width:200px" v-model="addMenulist.Name"></el-input>
                        </el-form-item>
                        <el-form-item label="图标名称">
                            <el-input style="width:200px" v-model="addMenulist.IconName"></el-input>
                        </el-form-item>
                        <el-form-item label="分类列表">
                            <el-select placeholder="请选择" @change="selectValue" v-model="addMenulist.CategoryID">
                                <el-option
                                v-for="item in options"
                                :key="item.label"
                                :value="item.value"
                                :label="item.label">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="链接地址">
                            <el-input style="width:400px" v-model="addMenulist.URI"></el-input>
                        </el-form-item>
                        <el-form-item label="菜单描述">
                            <el-input style="width:400px" v-model="addMenulist.Description"></el-input>
                        </el-form-item>
                    </el-form>
                    <!--<el-button type="success" :loading="loadingState4" @click="changeMenu('addMenulist')">更改</el-button>-->
                </el-col>
                <!--右侧树-->
                <el-col class="right-content_tree" :md="16" :xs="24" style="position:relative;height: 100%;">
                    <div class="right-content__title">菜单树</div>
                    <div style="position: absolute;left: 0;right: 0;overflow: auto;top: 30px;bottom: 10px;">
                        <!-- <el-scrollbar :viewClass="leftMenuHeight"> -->
                            <el-tree
                                class="right-content__tree"
                                :data="treeMenu"
                                :show-checkbox="true"
                                node-key="ID"
                                ref="tree"
                                :expand-on-click-node="false"
                                :props="defaultProps"
                                :render-content="renderContent"
                                :check-strictly="true">
                            </el-tree>
                        <!-- </el-scrollbar> -->
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import API from '../../../data/api'
    const api = new API();
    import Abp from '../../../Abp/Abp'
    export default {
        data () {
            return {
                leftMenuHeight:'leftMenuHeight1',
                labelPosition: 'right',
                addMenulist: {
                    InsertMethod:'',
                    ID:'',
                    Name: '',
                    URI: '',
                    IconName: '',
                    CategoryID:'',
                    Description:'',
                },
                // 下拉菜单数据
                options: [{
                    label: '菜单',
                    value: 1,
                }, {
                    label: '接口',
                    value: 2,
                }, {
                    label: '按钮',
                    value: 3,
                }],
                value: '',
                // 树形控件数据
                treeMenu: [],
                defaultProps: {
                    children: 'children',
                    label: 'Name'
                },
                addMenulistRule:{
                    Name:[{ required:true,message:'权限名称不能为空',trigger:'blur' }]
                },
                loadingState1:false,
                loadingState2:false,
                loadingState3:false,
                loadingState4:false,
            }
        },
        methods:{
            // 分类列表选择
            selectValue(value){
                this.addMenulist.CategoryID = value;
            },
            // 菜单树的形成
            renderContent(h, { node, data, store }) {
                if (!data.IconName) {
                    return (
                    <span>
                        <span>
                            <span on-click={ () => this.checkChangeval(store, data)}>{node.label}</span>
                        </span>
                        <span style="float: right; margin-right: 20px">
                            <el-button size="small" on-click={ () => this.changeMenu('addMenulist',store, data) }>更改</el-button>
                            <el-button size="small" on-click={ () => this.addUpbrothermenu('addMenulist', store, data) }>上增兄弟菜单</el-button>
                            <el-button size="small" on-click={ () => this.addDownbrothermenu('addMenulist', store, data) }>下增兄弟菜单</el-button>
                            <el-button size="small" on-click={ () => this.addMenu('addMenulist',store, data) }>增加子菜单</el-button>
                            <el-button size="small" on-click={ () => this.deletMenu(store, data) }>删除</el-button>
                        </span>
                    </span>);
                } else {
                    return (
                    <span>
                        <span>
                            <em style="width: 20px;height: 20px;display: inline-block;text-align: center;"><i class={'fa '+data.IconName}></i></em>
                            <span on-click={ () => this.checkChangeval(store, data, node)}>{node.label}</span>
                        </span>
                        <span style="float: right; margin-right: 20px">
                            <el-button size="small" on-click={ () => this.changeMenu('addMenulist',store, data) }>更改</el-button>
                            <el-button size="small" on-click={ () => this.addUpbrothermenu('addMenulist', store, data) }>上增兄弟菜单</el-button>
                            <el-button size="small" on-click={ () => this.addDownbrothermenu('addMenulist', store, data) }>下增兄弟菜单</el-button>
                            <el-button size="small" on-click={ () => this.addMenu('addMenulist',store, data) }>增加子菜单</el-button>
                            <el-button size="small" on-click={ () => this.deletMenu(store, data) }>删除</el-button>
                        </span>
                    </span>);
                }
            },
            // 选择树形菜单后显示在左侧表单中
            checkChangeval(store,data,node){
                this.addMenulist.Name = data.Name;
                this.addMenulist.URI = data.URI;
                this.addMenulist.IconName = data.IconName;
                this.addMenulist.CategoryID = data.CategoryID;
                this.addMenulist.Description = data.Description;
            },
            // 增加子菜单
            addMenu(formName,store,data) {
                var a = this.$refs.tree.getCheckedNodes();
                let that = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // if (a.length >=1) {
                            this.loadingState1 = true;
                            this.addMenulist.InsertMethod = 3;
                            this.addMenulist.ID = data.ID;
                            api.CreatePrivilege(this.addMenulist)
                                .then((res)=>{
                                    this.loadingState1 = false;
                                    if (res.data.IsSuccess) {
                                        api.reqSuccess(that,res.data.OutputMessage);
                                        store.append({ ID:res.data.Data.ID,Name:res.data.Data.Name,URI:res.data.Data.URI,IconName:res.data.Data.IconName,CategoryID:res.data.Data.CategoryID,Description:res.data.Data.Description,PID:res.data.Data.PID, children: [] },data);
                                    } else {
                                        api.reqFail(that,res.data.OutputMessage);
                                    }
                                })
                                .catch((res)=>{
                                    this.loadingState1 = false;
                                    if (res.status == 401) {
                                        api.reqWarn(that,'您没有权限操作')
                                    }
                                })
                        // }else{
                        //     api.reqWarn(that,'菜单树中没勾选，不能添加')
                        // }
                    }
                })
            },
            // 上增兄弟菜单
            addUpbrothermenu(formName,store,data) {
                // var a = this.$refs.tree.getCheckedNodes();
                let that = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.addMenulist.InsertMethod = 1;
                        this.addMenulist.ID = data.ID;
                        api.CreatePrivilege(this.addMenulist)
                            .then((res)=>{
                                if (res.data.IsSuccess) {
                                    // if (a.length > 1) {
                                    //     this.treeMenu.unshift({ID:res.data.Data.ID,Name:res.data.Data.Name,URI:res.data.Data.URI,IconName:res.data.Data.IconName,CategoryID:res.data.Data.CategoryID,Description:res.data.Data.Description,PID:res.data.Data.PID,children:[]});
                                    // }else if(a.length == 1){
                                    //     for(var i=0;i<this.treeMenu.length;i++){
                                    //         for(var j=0;j<this.treeMenu[i].children.length;j++){
                                    //             if(a[0].Name == this.treeMenu[i].children[j].Name){
                                    //                 this.treeMenu[i].children.unshift({ID:res.data.Data.ID,Name:res.data.Data.Name,URI:res.data.Data.URI,IconName:res.data.Data.IconName,CategoryID:res.data.Data.CategoryID,Description:res.data.Data.Description,PID:res.data.Data.PID});
                                    //             break;
                                    //             }
                                    //         }
                                    //     }
                                    // }
                                    api.reqSuccess(that,res.data.OutputMessage);
                                } else {
                                    api.reqFail(that,res.data.OutputMessage);
                                }
                            })
                            .catch((res)=>{
                                if (res.status == 401) {
                                    api.reqWarn(that,'您没有权限操作')
                                }
                            })
                    }
                })
                
            },
            // 下增兄弟菜单
            addDownbrothermenu(formName,store,data) {
                // var a = this.$refs.tree.getCheckedNodes();
                let that = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.addMenulist.InsertMethod = 2;
                        this.addMenulist.ID = data.ID;
                        api.CreatePrivilege(this.addMenulist)
                            .then((res)=>{
                                this.loadingState3 = false;
                                if (res.data.IsSuccess) {
                                //     if (a.length > 1) {
                                //         this.treeMenu.push({ID:res.data.Data.ID,Name:res.data.Data.Name,URI:res.data.Data.URI,IconName:res.data.Data.IconName,CategoryID:res.data.Data.CategoryID,Description:res.data.Data.Description,PID:res.data.Data.PID,children:[]});
                                //     }else if(a.length == 1){
                                //         for(var i=0;i<this.treeMenu.length;i++){
                                //             for(var j=0;j<this.treeMenu[i].children.length;j++){
                                //                 if(a[0].Name == this.treeMenu[i].children[j].Name){
                                //                     this.treeMenu[i].children.push({ID:res.data.Data.ID,Name:res.data.Data.Name,URI:res.data.Data.URI,IconName:res.data.Data.IconName,CategoryID:res.data.Data.CategoryID,Description:res.data.Data.Description,PID:res.data.Data.PID});
                                //                 break;
                                //                 }
                                //             }
                                //         }
                                //     }
                                    api.reqSuccess(that,res.data.OutputMessage);
                                } else {
                                    api.reqFail(that,res.data.OutputMessage);
                                }
                            })
                            .catch((res)=>{
                                if (res.status == 401) {
                                    api.reqWarn(that,'您没有权限操作')
                                }
                            })
                    }
                })
                
            },
            // 更改权限属性
            changeMenu(formName,store,data) {
                let that = this;
                var changeMenuData;
                changeMenuData = {ID:data.ID,CategoryID:this.addMenulist.CategoryID,Name:this.addMenulist.Name,URI:this.addMenulist.URI,IconName:this.addMenulist.IconName,Description:this.addMenulist.Description}
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        api.UpdatePrivilege(changeMenuData)
                            .then((res)=>{
                                if (res.data.IsSuccess) {
                                    data.Name = this.addMenulist.Name;
                                    data.URI = this.addMenulist.URI;
                                    data.IconName = this.addMenulist.IconName;
                                    data.CategoryID = this.addMenulist.CategoryID;
                                    data.Description = this.addMenulist.Description;
                                    api.reqSuccess(that,res.data.OutputMessage)
                                } else {
                                    api.reqFail(thst,res.data.OutputMessage)
                                }
                            })
                            .catch((res)=>{
                                if (res.status == 401) {
                                    api.reqWarn(that,'您没有权限操作')
                                }
                            })
                    }
                })

            },
            // 删除菜单
            deletMenu(store, data) {
                let that = this;
                api.DeletePrivilege(data.ID)
                    .then((res)=>{
                        if (res.data.IsSuccess) {
                           /* for(var i=0;i<this.treeMenu.length;i++){
                                for(var j=0;j<this.treeMenu[i].children.length;j++){
                                    if(a[0].Name == this.treeMenu[i].children[j].Name){
                                        this.treeMenu[i].children.splice(j,1);
                                    break;
                                    }
                                }
                            }*/
                            api.reqSuccess(that,res.data.OutputMessage)
                            store.remove(data);
                        }else{
                            api.reqFail(that,res.data.OutputMessage)
                        }
                    })
                    .catch((res)=>{
                        if (res.status == 401) {
                            api.reqWarn(that,'您没有权限操作')
                        }
                    })
                
            },
            // 更新菜单
            updateMenu() {
                this.loadingState4 = true;
                this.treeMenu = [];
                api.GetPrivileges()
                    .then((res)=>{
                        this.loadingState4 = false;
                        this.treeMenu = Abp.transData(res.data.Data,'ID','PID','children');
                    })
            }       
        },
		mounted() {
            api.GetPrivileges()
                .then((res)=>{
                    this.treeMenu = Abp.transData(res.data.Data,'ID','PID','children');
                })
			$(window).ready(function () {
				var ScreenHeight = $(window).height();
				var ScrollSidebarMenu = ScreenHeight-200;
				$('.leftMenuHeight1').css('height',ScrollSidebarMenu+'px')
			});
			$(window).resize(function () {
				var ScreenHeight = $(window).height();
				var ScrollSidebarMenu = ScreenHeight-200;
				$('.leftMenuHeight1').css('height',ScrollSidebarMenu+'px')
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

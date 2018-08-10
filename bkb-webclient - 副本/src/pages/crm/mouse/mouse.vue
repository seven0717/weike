<template>
    <el-row>
        <el-row>
            <el-col :md="20" :sm="24" :xs="24">
                <el-button type="success" @click="addFormVisible=true"><i class="el-icon-plus"></i><span class="screen-big">新增</span></el-button>
                <el-button @click="removeMouse"><i class="el-icon-delete"></i><span class="screen-big">&nbsp;删除</span></el-button>
                <el-button @click="recoverMouse"><i class="fa fa-reply-all"></i><span class="screen-big">&nbsp;收回鼠标</span></el-button>
                <el-button @click="changeMouse"><i class="fa fa-exchange"></i><span class="screen-big">&nbsp;更换鼠标</span></el-button>
                <el-button @click="clearTableData"><i class="fa fa-repeat"></i><span class="screen-big">&nbsp;清除列表数据</span></el-button>
            </el-col>
            <el-col class="big-mar-t" :md="4" :sm="24" :xs="24">
                <el-form :model="searchMouseVal1" :rules="searchMouseFormRules" ref="searchMouseVal1">
                    <el-form-item prop="searchMouseVal">
                        <el-input @keyup.enter.native="searchMouse('searchMouseVal1')" auto-complete="off" v-model="searchMouseVal1.value" placeholder="请输入鼠标码"><el-button type="success" :loading="loading1State" style="border-radius:0px;color:#fff" slot="append" @click="searchMouse('searchMouseVal1')" icon="search"> 搜索</el-button></el-input>
                    </el-form-item>
                    <el-form-item style="display:none" prop="searchMouseVal1">
                        <el-input @keyup.enter.native="searchMouse('searchMouseVal1')" auto-complete="off" v-model="searchMouseVal1.value" placeholder="请输入鼠标码"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <h3 style="font-weight: normal">鼠标码列表</h3>
                <!--鼠标码列表-->
                <el-table class="content-table" style="margin-top:-10px;min-height:500px" :height="mousTableheight" :data="tableData" @selection-change="selsChange" ref="mouseTable" max-height="520">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column label="" width="100">
                        <template scope="scope">
                            <el-tag style="margin-left: 20px;" :type="scope.row.state ? 'danger' : 'success'" close-transition>{{scope.row.state?'使用中':'未使用'}}</el-tag>
                        </template>    
                    </el-table-column>
                    <el-table-column label="鼠标码" width="150">
                        <template scope="scope">
                            <a @click="watchMouseCode(scope.row.mouseCode)">{{scope.row.mouseCode}}</a>
                        </template>
                    </el-table-column>
                    <el-table-column label="使用时间" prop="UsedDate" width="250"></el-table-column>
                    <el-table-column label="创建时间" prop="CreateDate"></el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <!--新增鼠标码表单-->
        <el-dialog title="添加鼠标码" v-model="addFormVisible" :close-on-click-modal="true" size="tiny">
            <el-form :model="addMouseForm" :rules="addMouseFormRules" ref="addMouseForm" >
                <el-form-item label="代理人员" prop="agentPerson">
                    <el-select v-model="agent_name" @visible-change="getagents" @change="selectagent" clearable placeholder="请选择">
                        <el-option
                        v-for="item in allagent"
                        :key="item.ID"
                        :label="item.AgentName"
                        :value="item.ID">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="直销人员" prop="directSellingPerson">
                    <el-select v-model="saler_name" @visible-change="getasalers" @change="selectsaler" clearable placeholder="请选择">
                        <el-option
                        v-for="item in allsalers"
                        :key="item.ID"
                        :label="item.Name"
                        :value="item.ID">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item style="margin-left:30px" label="价格" prop="price">
                    <el-input v-model.number="addMouseForm.price" style="width:20%"></el-input>
                </el-form-item>
                <el-scrollbar :viewClass="mouseHeight">
                    <el-form-item label="鼠标码" prop="mouseCode" id="mouse">
                        <el-tag :key="tag" v-for="tag in addMouseForm.mouseCodes" type="tag" :closable="true" :close-transition="false" @close="handleClose(tag)">{{tag}}
                        </el-tag>
                        <el-input class="input-new-tag" v-if="inputVisible" v-model="inputmouseCode" ref="saveTagInput" size="mini"  @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
                        </el-input>
                        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新鼠标码</el-button>
                    </el-form-item>
                </el-scrollbar>
            </el-form>
            <div slot="footer">
                <el-button @click="addFormVisible=false" class="btn">取消</el-button>
                <el-button :loading="loading2State" type="success" @click="addMouseCode('addMouseForm')">新增</el-button>
            </div>
        </el-dialog>
        <!--鼠标详细信息-->
        <el-dialog title="鼠标码信息" v-model="watchFormVisible" :close-on-click-modal="true" size="tiny">
            <el-scrollbar :viewClass="mouseHeight2">
                <el-form :model="getmousedetaildata" :rules="changeMouseFormRules" ref="getmousedetaildata" label-width="89px">
                    <el-form-item label="鼠标码" style="display:none">
                        <el-input v-model="getmousedetaildata.ID" style="width:180px"></el-input>
                    </el-form-item>
                    <el-form-item label="鼠标码" prop="updatacode">
                        <el-input v-model="updatacode" style="width:180px"></el-input>
                    </el-form-item>
                    <el-form-item style="margin-top:-10px" label="鼠标码状态">
                        <span>{{ getmousedetaildata.IsUsed ? '使用中' : '未使用' }}</span>
                    </el-form-item>
                    <!--更改代理-->
                    <el-form-item style="margin-top:-10px" label="代理人" prop="agentPerson">
                        <el-select v-model="getmousedetaildata.Agent.AgentName" @visible-change="getagents" @change="changeagent" clearable placeholder="请选择">
                            <el-option
                            v-for="item in allagent"
                            :key="item.ID"
                            :label="item.AgentName"
                            :value="item.ID">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <!--更改直销-->
                    <el-form-item style="margin-top:-10px" label="直销人员" prop="directSellingPerson">
                        <el-select v-model="getmousedetaildata.Saler.Name" @visible-change="getasalers" @change="changesaler" clearable placeholder="请选择">
                            <el-option
                            v-for="item in allsalers"
                            :key="item.ID"
                            :label="item.Name"
                            :value="item.ID">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item style="margin-top:-10px" label="单价" prop="Price">
                        <el-input v-model.number="getmousedetaildata.Price" style="width:180px" ></el-input>
                    </el-form-item>
                    <el-form-item style="margin-top:-10px" label="老师" prop="teacher" >
                        <span>{{getmousedetaildata.Teacher}}</span>
                    </el-form-item>
                    <el-form-item style="margin-top:-10px" label="学生" prop="student" >
                        <span>{{getmousedetaildata.Student}}</span>
                    </el-form-item>
                    <el-form-item style="margin-top:-10px" label="使用时间" prop="activeTime">
                        <span>{{getmousedetaildata.UsedDate}}</span>
                    </el-form-item>
                    <el-form-item style="margin-top:-10px" label="创建时间" prop="createTime">
                        <span>{{getmousedetaildata.CreateDate}}</span>
                    </el-form-item>
                </el-form>
            </el-scrollbar>
            <div slot="footer">
                <el-button @click="watchFormVisible=false" class="btn">取消</el-button>
                <el-button :loading="loading3State" @click="updateMouse('getmousedetaildata')" type="success">更改</el-button>
            </div>
        </el-dialog>
        <!--更换鼠标码-->
        <el-dialog title="更换鼠标码" v-model="changeMouseFormVisable" :close-on-click-modal="true" size="tiny">
            <el-form :model="changeMouseForm" :rules="changeMouseFormRules" ref="changeMouseForm" label-width="88px">
                <el-form-item label="旧鼠标码" prop="oldMouseCode">
                    <span style="width:220px">{{changeMouseForm.oldMouseCode}}</span>
                </el-form-item>
                <el-form-item label="鼠标码状态" prop="isUsed">
                    <span>{{ changeMouseForm.isUsed ? '使用中' : '未使用' }}</span>
                </el-form-item>
                <el-form-item label="新鼠标码" prop="newMouseCode">
                    <el-input v-model="changeMouseForm.newMouseCode" style="width:220px"></el-input>
                </el-form-item>
                <el-form-item style="float:right">
                    <el-button @click="changeMouseFormVisable=false" class="btn">取消</el-button>
                    <el-button type="success" @click="reviseMouse('changeMouseForm')">更换</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </el-row>
</template>
<script>
    import API from '../../../data/api'
    const api = new API();
    export default {
        data(){
            var validatemouseCode  = (rule,value,callback ) =>{
                value = this.inputmouseCode;
                if(!(/^\d{6}[-]\d{5}$/.test(value))){
                    callback(new Error('格式如下：123456-78901'))  
                }else{
                    callback()
                }
            }
            var validatemouseCode1  = (rule,value,callback ) =>{
                value = this.changeMouseForm.newMouseCode;
                if(!(/^\d{6}[-]\d{5}$/.test(value))){
                    callback(new Error('格式如下：123456-78901'))  
                } else {
                    callback()
                }
            }
            var validatemouseCode2  = (rule,value,callback ) =>{
                value = this.updatacode;
                if(!(/^\d{6}[-]\d{5}$/.test(value))){
                    callback(new Error('格式如下：123456-78901'))  
                } else {
                    callback()
                }
            }
            var validatemouseCode3  = (rule,value,callback ) =>{
                value = this.updatacode;
                if(!(/^\d{6}[-]\d{5}$/.test(value))){
                   callback(new Error('格式如下：123456-78901'))  
                } else {
                    callback()
                }
            }
            var validatemouseCode4  = (rule,value,callback ) =>{
                value = this.searchMouseVal1.value;
                if(!(/^\d{6}[-]\d{5}$/.test(value))){
                   callback(new Error('格式如下：123456-78901'))  
                } else {
                    callback()
                }
            }
            return {
                searchMouseVal1:{
                    value:''
                },
                watchMouseCodeHeight:'watchMouseCodeHeight',
                inputmouseCode:'',
                inputVisible:false,
                mouseHeight:'mouseHeight',
                // 获取鼠标详细信息
                getmousedetaildata:{
                    Agent:{
                        AgentName:''
                    },
                    CreateDate:'',
                    ID:'',
                    IsUsed:'',
                    Price:'',
                    Saler:{
                        Name:''
                    },
                    Student:'',
                    Teacher:'',
                    UsedDate:''
                },
                number1:0,
                number2:0,
                addMouseForm:{
                    mouseCodes:[],
                    directSellingPerson:'',
                    agentPerson:'',
                    price:0,
                    isUsed:false,
                },
                mouseHeight2:'mouseHeight2',
				sels: [],//列表选中列
                changeMouseForm:{
                    oldMouseCode:'',
                    newMouseCode:'',
                    isUsed:''
                },
                tableHeight:'tableHeight',
                addFormVisible:false,
                watchFormVisible:false,
                changeMouseFormVisable:false,
                // 新增鼠标码验证
                addMouseFormRules:{
                    mouseCode:[{required:true, validator:validatemouseCode, trigger:'change'}],
                    price:[{ type: 'number', message: '价格必须为数字',trigger:'blur'}]
                },
                // 更换鼠标码表单验证
                changeMouseFormRules:{
                    newMouseCode:[{required:true,validator:validatemouseCode1,trigger:'blur'}],
                    updatacode:[{required:true,validator:validatemouseCode2,trigger:'blur'}],
                    Price:[{ type: 'number', message: '价格必须为数字',trigger:'blur'}]
                },
                // 查询鼠标码表单验证
                searchMouseFormRules:{
                    searchMouseVal:[{required:true, validator:validatemouseCode4, trigger:'change'}]
                },
                // 选择直销人员
                saler_name: '',
                // 选择代理人员
                agent_name: '',
                // 代理人员的ID
                agent_ID:'',
                // 直销人员的ID
                saler_ID:'',
                // 更新鼠标码
                updatacode:'',
                // 鼠标码列表
                tableData:[],
                // 所有的代理商
                allagent:[],
                // 所有的直销人员
                allsalers:[],
                // 搜索指示
                loading1State:false,
                // 新增指示
                loading2State:false,
                // 更改鼠标指示
                loading3State:false,
                // 鼠标码的列表高度
                mousTableheight:500
            }
        },                  
        methods:{
            // 查找鼠标码
            searchMouse (formName) {
                this.$refs[formName].validate((valid) => {
                    let that = this;
                    if (valid) {
                        this.loading1State = true;
                        api.GetMouse(this.searchMouseVal1.value)
                            .then((res)=>{
                                this.loading1State = false;
                                if (res.data.IsSuccess) {
                                    api.reqSuccess(that,res.data.OutputMessage);
                                    if (this.tableData.length <= 0) {
                                        if (res.data.Data.UsedDate) {
                                            res.data.Data.UsedDate = res.data.Data.UsedDate.split("T")[0]
                                        }
                                        this.tableData.push({'mouseCode':res.data.Data.ID,'state':res.data.Data.IsUsed,'CreateDate':res.data.Data.CreateDate.split("T")[0],'UsedDate':res.data.Data.UsedDate});
                                    }else{
                                        var i = this.tableData.length;
                                        while (i--) {
                                            if (this.tableData[i].mouseCode == res.data.Data.ID) {
                                                this.tableData.splice(i,1);
                                                if (res.data.Data.UsedDate) {
                                                    res.data.Data.UsedDate = res.data.Data.UsedDate.split("T")[0]
                                                }
                                                this.tableData.unshift({'mouseCode':res.data.Data.ID,'state':res.data.Data.IsUsed,'CreateDate':res.data.Data.CreateDate.split("T")[0],'UsedDate':res.data.Data.UsedDate});
                                                return;
                                            }
                                        }
                                        if (res.data.Data.UsedDate) {
                                            res.data.Data.UsedDate = res.data.Data.UsedDate.split("T")[0]
                                        }
                                        this.tableData.unshift({'mouseCode':res.data.Data.ID,'state':res.data.Data.IsUsed,'CreateDate':res.data.Data.CreateDate.split("T")[0],'UsedDate':res.data.Data.UsedDate});
                                    }
                                }else{
                                    api.reqFail(that,res.data.OutputMessage);
                                }
                            })
                            .catch((res)=>{
                                let that = this;
                                this.loading1State = false;
                                if (res.status == 401) {
                                    api.reqWarn(that,'您没有权限操作')
                                    return;
                                }
                            })
                    }
                });
            },
            // 获取当前日期
            getNowFormatDate () {
                var date = new Date();
                var seperator1 = "-";
                var seperator2 = ":";
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
                return currentdate;
            },
            // 获取所有代理人员
            getagents (bool) {
                if (bool&&this.number1==0){
                    api.GetAgents()
                        .then((res)=>{
                            this.number1=1;
                            this.allagent = res.data.Data;
                        })
                }
            },
            // 选择代理人员
            selectagent (value) {
                this.agent_ID = value;
            },
            // 获取所有的直销人员
            getasalers (bool) {
                if (bool&&this.number2==0) {
                    api.GetSalers()
                        .then((res)=>{
                            this.number2=1;
                            this.allsalers = res.data.Data;
                        })
                }
            },
            // 选择直销人员
            selectsaler (value) {
                this.saler_ID = value;
            },
            // 增加鼠标码
            addMouseCode (formName) {
                if(this.addMouseForm.mouseCodes ==""){
                    this.$message.error('鼠标码不能为空！');
                    return ; 
                }
                if (typeof this.addMouseForm.price == 'number') {
                    var newMousecode = {};
                    this.loading2State = true;
                    api.CreateMouse({'Codes':this.addMouseForm.mouseCodes,'AgentID':this.agent_ID,'SalerID':this.saler_ID,'Price':this.addMouseForm.price})
                        .then((res)=>{
                            this.loading2State = false;
                            let that = this;
                            if (res.data.IsSuccess) {
                                for(var i=0;i<this.addMouseForm.mouseCodes.length;i++){
                                    newMousecode = {
                                        mouseCode:this.addMouseForm.mouseCodes[i],
                                        CreateDate:this.getNowFormatDate(),
                                        UsedDate:'',
                                        state:false
                                    };
                                    this.tableData.unshift(newMousecode);
                                }
                                this.addFormVisible = false;
                                this.addMouseForm.mouseCodes = [];
                                api.reqSuccess(that,res.data.OutputMessage);
                            }else{
                                api.reqFail(that,res.data.OutputMessage);
                            }
                        })
                        .catch((res)=>{
                            let that = this;
                            this.loading2State = false;
                            if (res.status == 401) {
                                api.reqWarn(that,'您没有权限操作');
                                return;
                            }
                        })
                }
                
            },
            // 修改代理人员
            changeagent(value){
                this.getmousedetaildata.Agent.AgentName = value;
            },
            // 修改直销人员
            changesaler(value){
                this.getmousedetaildata.Saler.Name = value;
            },
            // 修改鼠标信息
            updateMouse (formName) {
                if (this.updatacode=='') {
                    this.$message({message:'请输入鼠标码',type:'warning'});
                    return;
                };
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.loading3State = true;
                        var updatemouse1 = {'OldID':this.getmousedetaildata.ID,'NewID':this.updatacode,'AgentID':this.getmousedetaildata.Agent.AgentName,'SalerID':this.getmousedetaildata.Saler.Name,'Price':this.getmousedetaildata.Price}
                        api.UpdateMouse(updatemouse1)
                            .then((res)=>{
                                this.loading3State = false;
                                let that = this;
                                if (res.data.IsSuccess) {
                                    api.reqSuccess(that,res.data.OutputMessage);
                                    for (var i = 0; i < this.tableData.length; i++) {
                                        if (this.tableData[i].mouseCode == this.getmousedetaildata.ID) {
                                            this.tableData[i].mouseCode = this.updatacode;
                                        }
                                    }
                                    this.watchFormVisible=false;
                                    this.updatacode = '';
                                }else {
                                    api.reqFail(that,res.data.OutputMessage);
                                }
                            })
                            .catch((res)=>{
                                let that = this;
                                this.loading3State = false;
                                if (res.status == 401) {
                                    api.reqWarn(that,'您没有权限操作')
                                    return;
                                }
                            })
                    }
                })
                    
            },
            handleClose (tag) {
                this.addMouseForm.mouseCodes.splice(this.addMouseForm.mouseCodes.indexOf(tag), 1);
            },
            handleSelect (row) {
                this.sels = row;
            },
            showInput () {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },
            handleInputConfirm () {
                let inputValue = this.inputmouseCode;
                 if (/^\d{6}[-]\d{5}$/.test(inputValue) &&  $.inArray(inputValue,this.addMouseForm.mouseCodes)=="-1" ){
                    this.addMouseForm.mouseCodes.push(inputValue) 
                    if($('#mouse').height()>160){
                        $('.mouseHeight').css('height','160px')
                    }     
                }
                this.inputVisible = false;
                this.inputmouseCode = '';     
            },
            // 头部更换鼠标按钮
            changeMouse () {
               if(this.sels.length<=0){
                   this.$message.warning('请选择您要更换的鼠标');
                   this.$refs.mouseTable.clearSelection();
                   return ;
               }
               if(this.sels.length>1){
                  this.$message.error('更换鼠标码只能勾选一个');
                  this.$refs.mouseTable.clearSelection();
                  return; 
               }
               this.changeMouseForm.oldMouseCode = this.sels[0].mouseCode;
               this.changeMouseFormVisable = true;
               this.changeMouseForm.isUsed = this.sels[0].state;
            },
            // 查看鼠标详细信息
            watchMouseCode (code) {
                this.getmousedetaildata.Agent.AgentName = '';
                this.getmousedetaildata.Saler.Name = '';
                this.getmousedetaildata.Price = '';
                this.getmousedetaildata.IsUsed = '';
                this.getmousedetaildata.CreateDate = '';
                this.getmousedetaildata.ID = '';
                this.getmousedetaildata.Student = '';
                this.getmousedetaildata.Teacher = '';
                this.getmousedetaildata.UsedDate = '';
                api.GetMouseDetail(code)
                    .then((res)=>{
                        let that = this;
                        if (res.data.IsSuccess) {
                            this.updatacode = res.data.Data.ID;
                            if (res.data.Data.Agent) {
                                this.getmousedetaildata.Agent = res.data.Data.Agent; 
                            }else{
                                this.getmousedetaildata.Agent.AgentName = '';
                            }
                            this.getmousedetaildata.CreateDate = res.data.Data.CreateDate.split("T")[0];
                            this.getmousedetaildata.ID = res.data.Data.ID;
                            this.getmousedetaildata.IsUsed = res.data.Data.IsUsed;
                            this.getmousedetaildata.Price = res.data.Data.Price;
                            if (res.data.Data.Saler) {
                                this.getmousedetaildata.Saler = res.data.Data.Saler;
                            }else{
                                this.getmousedetaildata.Saler.Name = '';
                            }
                            if (res.data.Data.Student) {
                                this.getmousedetaildata.Student = res.data.Data.Student.FullName;
                            } else {
                                this.getmousedetaildata.Student = res.data.Data.Student;
                            }
                            if (res.data.Data.Teacher) {
                                this.getmousedetaildata.Teacher = res.data.Data.Teacher.FullName;
                            } else {
                                this.getmousedetaildata.Teacher = res.data.Data.Teacher;
                            }
                            if (res.data.Data.UsedDate) {
                                this.getmousedetaildata.UsedDate = res.data.Data.UsedDate.split("T")[0];
                            }else{
                                this.getmousedetaildata.UsedDate = res.data.Data.UsedDate;
                            }
                        }else{
                            api.reqFail(that,res.data.OutputMessage);
                        }
                    })
                    .catch((res)=>{
                        let that = this;
                        if (res.status == 401) {
                            api.reqWarn(that,'您没有权限操作');
                            return;
                        }
                    })
                this.watchFormVisible = true; 
            },
            // 选择的鼠标
            selsChange (sels) {
				this.sels = sels;
			},
            // 更换鼠标
            reviseMouse (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        api.ReplaceMouse({'oldcode':this.changeMouseForm.oldMouseCode,'newcode':this.changeMouseForm.newMouseCode})
                        .then((res)=>{
                            let that = this;
                            if (res.data.IsSuccess) {
                                this.changeMouseFormVisable = false;
                                this.$refs.mouseTable.clearSelection();
                                for (var i = 0; i < this.tableData.length; i++) {
                                    if (this.tableData[i].mouseCode == this.changeMouseForm.oldMouseCode) {
                                        this.tableData[i].mouseCode = this.changeMouseForm.newMouseCode;
                                    }
                                }
                                api.reqSuccess(that,res.data.OutputMessage)
                            } else {
                                api.reqFail(that,res.data.OutputMessage)
                            }
                        })
                        .catch((res)=>{
                            let that = this;
                            if (res.status == 401) {
                                api.reqWarn(that,'您没有权限操作')
                            }
                        })
                    }
                })
            },
			//删除鼠标码
			removeMouse () {
                if(this.sels.length<=0){
                    this.$message.warning('请选择即将删除的鼠标');
                    return;
                };
                for (var j = 0; j < this.sels.length; j++) {
                    if (this.sels[j].state) {
                        this.$message({message:'使用中的鼠标码不可删除',type:'error'});
                        return;
                    }
                }
                var array = [];
                for (var i = 0; i < this.sels.length; i++) {
                    array.push(this.sels[i].mouseCode);
                }
                api.DeleteMouse(array)
                    .then((res)=>{
                        let that = this;
                        if (res.data.IsSuccess) {
                            for (var j = 0; j < this.tableData.length; j++) {
                                for (var a = 0; a < array.length; a++) {
                                    if (this.tableData[j].mouseCode == array[a]) {
                                        this.tableData.splice(j,1);
                                    }
                                }
                            }
                            api.reqSuccess(that,res.data.OutputMessage)
                        }else{
                            api.reqFail(that,res.data.OutputMessage)
                        }
                    })
                    .catch((res)=>{
                        let that = this;
                        if (res.status == 401) {
                            api.reqWarn(that,'您没有权限操作')
                            return;
                        }
                    })
			},
            // 收回鼠标
            recoverMouse () {
                 if(this.sels.length<=0){
                     this.$message.warning('请选择您要收回的鼠标');
                     return;
                 }
                 if(this.sels.length>1){
                     this.$message.warning('每次只能收回一个鼠标');
                     return;
                 }
                 api.RecycleMouse(this.sels[0].mouseCode)
                    .then((res)=>{
                        let that = this;
                        if (res.data.IsSuccess) {
                            for (var i = 0; i < this.tableData.length; i++) {
                                if (this.tableData[i].mouseCode == this.sels[0].mouseCode) {
                                    this.tableData[i].state = false;
                                }
                            }
                            api.reqSuccess(that,res.data.OutputMessage)
                        }else{
                            api.reqFail(that,res.data.OutputMessage)
                        }
                    })
                    .catch((res)=>{
                        let that = this;
                        if (res.status == 401) {
                            api.reqWarn(that,'您没有权限操作');
                            return;
                        }
                    })
            },
            // 清除鼠标码列表
            clearTableData () {
                this.tableData = [];
            }
        },
        mounted(){
            this.mousTableheight = $(window).height()-210;
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
    .content-header{
        height:40px; 
        .el-input{float:right;width:250px}
    }
    .input-new-tag{
        width: 30%;
    }
    button.btn{
        background:#ffffff;
    }
    span.el-tag:first-child{
        margin-left: 0px;
    }
    span.el-tag{
        margin-left: 10px;
    }
    div.cell>a:hover{color:#00af86;text-decoration: underline;cursor:pointer;}
</style>
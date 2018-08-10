<template>
    <el-row>
        <!--页面头-->
        <el-row>
            <el-col :md="6" :sm="24" :xs="24">
                <el-button type="success" @click="addSchoolVisible"><i class="el-icon-plus"></i><span class="screen-big">新增</span></el-button>
                <!--<el-button @click="refreshSchool"><i class="fa fa-refresh"></i>&nbsp;&nbsp;刷新</el-button>-->
                <el-button @click="removeSchool"><i class="el-icon-delete"></i><span class="screen-big">删除</span></el-button>
            </el-col>
            <el-col class="big-mar-t" :md="10" :sm="24" :xs="24">
                <el-cascader
                    style="width:100%"
                    placeholder="可直接输入地区"
                    v-model="searchAreasID1"
                    :options="areas"
                    filterable
                    clearable
                    @change="selectSchool"
                    :props="areasProps"
                ></el-cascader>
            </el-col>
            <el-col class="big-mar-t" style="float:right" :md="6" :sm="24" :xs="24"> 
                <el-input v-model="schoolKeyName" placeholder="请输入学校名称" @keyup.enter.native="searchSchoolName"><el-button style="background:#00af86;color:#fff;border-radius:0 3px 3px 0" slot="append" :loading="loadingState1" icon="search" @click="searchSchoolName">搜索</el-button ></el-input>
            </el-col>
        </el-row>
        <!--学校列表-->
        <el-row>
            <h3 style="font-weight:normal">学校列表</h3>
            <el-table class="content-table" :height="schTableheight" :data="searchschool" style="width:100%;min-height:500px" v-loading="loadingState" element-loading-text="拼命加载中" @selection-change="selectTable">
                <el-table-column type="selection" width="60"></el-table-column>
                <el-table-column prop="ID" width='150px' label="编码"></el-table-column>
                <el-table-column label="学校全称" width="300" prop="FullName">
                    <template scope="scope">
                        <a @click="watchSchool(scope.$index, scope.row)">{{scope.row.FullName}}</a>
                    </template>
                </el-table-column>
                <el-table-column label="联系人" prop="LinkName" width='100'></el-table-column>
                <el-table-column prop="Phone" label="电话" width='150'></el-table-column>
                <el-table-column prop="LinkNameDuty" width='140' label="职务"></el-table-column>
                <el-table-column prop="Address" width='300' label="地址"></el-table-column>
                <el-table-column prop="TeacherScope" width='140' label="老师规模" style="text-align:center"></el-table-column>
                <el-table-column prop="StudentScope" label="学生规模" style="text-align:center"></el-table-column>
            </el-table>
        </el-row>
        <!--新增学校-->
        <el-dialog title="添加学校" v-model="addFormVisible" :close-on-click-modal="true">
            <el-scrollbar :viewClass="schoolHeight">
                <el-form :model="addSchoolForm" :rules="formRules" ref="addSchoolForm" label-width="100px" :label-position="labelPosition">
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="学校名称" prop="FullName">
                                <el-input placeholder="请输入学校名称" v-model="addSchoolForm.FullName"></el-input>
                            </el-form-item>
                            <el-form-item label="组织机构代码" prop="ID">
                                <el-input  v-model="addSchoolForm.ID" ></el-input>
                            </el-form-item>
                            <el-form-item label="联系人电话" prop="schoolMasterTel">
                                <el-input  v-model="addSchoolForm.Phone"></el-input>
                            </el-form-item>
                            <el-form-item label="教师规模数" prop="TeacherScope">
                                <el-input v-model.number="addSchoolForm.TeacherScope"></el-input>
                            </el-form-item>
                            <el-form-item label="学校类型" prop="schoolType">
                                <el-select style="width:100%" v-model="addSchoolForm.SchoolLevelName" placeholder="请选择">
                                    <el-option v-for="item in schoolTypes" :label="item.name" :value="item.name" :key="item.name"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="招生条件" prop="EnrollmentConditionName1">
                                <el-select style="width:100%" v-model="addSchoolForm.EnrollmentConditionName" placeholder="请选择"  clearable>
                                    <el-option v-for="item in EnrollmentConditionName1" :label="item.name" :value="item.name" :key="item.name"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="margin-left:2%" :span="11">
                            <el-form-item label="地区代码" prop="AreaID">
                                <el-cascader
                                    style="width:100%"
                                    placeholder="可直接输入学校搜索"
                                    v-model="searchAreasID2"
                                    :options="areas"
                                    filterable
                                    @change="addSchoolAreasID"
                                    :props="areasProps"
                                ></el-cascader>
                            </el-form-item>
                            <el-form-item label="联系人" prop="schoolMaster">
                                <el-input  v-model="addSchoolForm.LinkName" ></el-input>
                            </el-form-item>
                            <el-form-item label="联系人职务" prop="schoolMasterJob">
                                <el-input v-model="addSchoolForm.LinkNameDuty" ></el-input>
                            </el-form-item>
                            <el-form-item label="学生规模数" prop="StudentScope">
                                <el-input  v-model.number="addSchoolForm.StudentScope" ></el-input>
                            </el-form-item>
                            <el-form-item label="学校推广级别" prop="SchoolExtensionLevel">
                                <el-input  v-model="addSchoolForm.SchoolExtensionLevel"></el-input>
                            </el-form-item>  
                            <el-form-item label="地址" class="address" prop="Address">
                                <el-input  v-model="addSchoolForm.Address"></el-input>
                            </el-form-item>  
                        </el-col>
                    </el-row>
                </el-form>
            </el-scrollbar>  
            <div slot="footer">
                <el-button @click="addFormVisible= false" class="btn">取消</el-button>
                <el-button :loading="loadingState3"  @click="addSchool1('addSchoolForm')" type="success">添加</el-button>
            </div>
        </el-dialog>
        <!--查看学校详细信息-->
        <el-dialog :loading="true" title="学校信息" v-model="watchFormVisible" :close-on-click-modal="true">
             <el-scrollbar :viewClass="schoolHeight">
                <el-form :model="watchSchoolForm" :rules="formRules1" :label-position="labelPosition" ref="watchSchoolForm" label-width="100px">
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="学校全称" prop="FullName">
                                <el-input placeholder="请输入学校全称:" v-model="watchSchoolForm.FullName"></el-input>
                            </el-form-item>
                            <el-form-item label="组织机构代码" prop="ID">
                                 <el-input  v-model="watchSchoolForm.ID"></el-input>
                             </el-form-item>
                            <el-form-item label="联系人电话" prop="Phone">
                                 <el-input  v-model="watchSchoolForm.Phone"></el-input>
                             </el-form-item>
                             <el-form-item :label="'教师规模数'+'['+TeacherActivedCount+'/'+TeacherRegisterCount+']'" prop="TeacherScope">
                                 <el-input  v-model.number="watchSchoolForm.TeacherScope"></el-input>
                             </el-form-item>
                            <el-form-item label="学校类型" prop="SchoolLevelName">
                                <el-select style="width:100%" v-model="watchSchoolForm.SchoolLevelName" placeholder="请选择">
                                    <el-option v-for="item in schoolTypes" :label="item.name" :value="item.name" :key="item.name"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="招生条件" prop="EnrollmentConditionName2">
                                 <el-select style="width:100%" v-model="watchSchoolForm.EnrollmentConditionName" placeholder="请选择">
                                     <el-option v-for="item in EnrollmentConditionName2" :label="item.name" :value="item.name":key="item.name"></el-option>
                                 </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="margin-left:2%" :span="11">
                             <el-form-item label="地区代码" prop="AreaID">
                                <el-cascader
                                    style="width:100%"
                                    placeholder="可直接输入学校搜索"
                                    v-model="searchAreasID3"
                                    :options="areas"
                                    filterable
                                    @change="updataSchoolAreasID"
                                    :props="areasProps"
                                ></el-cascader>
                             </el-form-item>
                             <el-form-item label="联系人" prop="LinkName">
                                 <el-input  v-model="watchSchoolForm.LinkName"></el-input>
                             </el-form-item>
                             <el-form-item label="联系人职务" prop="LinkNameDuty">
                                <el-input  v-model="watchSchoolForm.LinkNameDuty"></el-input>
                             </el-form-item>
                             <el-form-item :label="'学生规模数'+'['+StudentActivedCount+'/'+StudentRegisterCount+']'" prop="StudentScope">
                                 <el-input v-model.number="watchSchoolForm.StudentScope"></el-input>
                             </el-form-item>
                            <el-form-item label="学校推广级别" prop="SchoolExtensionLevel">
                                <el-input  v-model="addSchoolForm.SchoolExtensionLevel"></el-input>
                            </el-form-item>  
                            <el-form-item label="地址" class="address" prop="Address">
                                <el-input  v-model="addSchoolForm.Address"></el-input>
                            </el-form-item> 
                        </el-col>
                    </el-row>
                </el-form>
            </el-scrollbar>
            <div slot="footer">
                <el-button @click="watchFormVisible=false" class="btn">取消</el-button>
                <el-button :loading="loadingState2" @click="updataSchool('watchSchoolForm')" type="success">更新</el-button>
            </div>
        </el-dialog>
    </el-row>
</template>
<script>
import API from "../../../data/api";
const api = new API();
import Abp from "../../../Abp/Abp";
export default {
  data() {
    var validatemouseCode = (rule, value, callback) => {
      value = this.searchAreasID2;
      if (value == "") {
        callback(new Error("地区不能为空"));
      } else {
        callback();
      }
    };
    var validatemouseCode1 = (rule, value, callback) => {
      value = this.searchAreasID3;
      if (value == "") {
        callback(new Error("地区不能为空"));
      } else {
        callback();
      }
    };
    return {
      areas: [],
      // 搜索学校的地区ID
      searchAreasID1: [],
      // 新增学校的地区ID
      searchAreasID2: [],
      // 学校详细信息的地区ID
      searchAreasID3: [],
      areasProps: {
        children: "children",
        label: "Name",
        value: "ID"
      },
      // 学校关键字
      schoolKeyName: "",
      addForm: false,
      labelPosition: "top",
      sel: "",
      schoolHeight: "schoolHeight",
      addSchoolForm: {
        AreaID: "",
        FullName: "",
        ID: "",
        SchoolLevelName: "",
        SchoolExtensionLevel: "",
        EnrollmentConditionName: "",
        Address: "",
        LinkName: "",
        LinkNameDuty: "",
        Phone: "",
        TeacherScope: 0,
        StudentScope: 0
      },
      watchSchoolForm: {
        OLDID: "",
        AreaID: "",
        ID: "",
        FullName: "",
        LinkName: "",
        LinkNameDuty: "",
        Phone: "",
        TeacherScope: "",
        StudentScope: "",
        SchoolLevelName: "",
        SchoolExtensionLevel: "",
        EnrollmentConditionName: "",
        Address: ""
      },
      defaultProps: {
        children: "children",
        label: "label",
        value: "ID"
      },
      schoolTypes: [
        { value: 1, name: "区重点" },
        { value: 2, name: "普通" },
        { value: 3, name: "市重点" },
        { value: 4, name: "省重点" }
      ],
      // 招生条件
      EnrollmentConditionName1: [
        { value: 0, name: "自招" },
        { value: 1, name: "统招" },
        { value: 2, name: "共建" }
      ],
      EnrollmentConditionName2: [
        { value: 0, name: "自招" },
        { value: 1, name: "统招" },
        { value: 2, name: "共建" }
      ],
      addFormVisible: false,
      watchFormVisible: false,
      formRules: {
        FullName: [
          { required: true, message: "学校名称不能为空", trigger: "blur" }
        ],
        AreaID: [
          { required: true, validator: validatemouseCode, trigger: "change" }
        ],
        TeacherScope: [
          { type: "number", message: "教师规模必须为数字", trigger: "blur" }
        ],
        StudentScope: [
          { type: "number", message: "学生规模必须为数字", trigger: "blur" }
        ],
        ID: [
          {
            required: true,
            max: 9,
            min: 9,
            message: "组织机构代码的长度为九位",
            trigger: "blur"
          }
        ]
      },
      formRules1: {
        FullName: [
          { required: true, message: "学校名称不能为空", trigger: "blur" }
        ],
        AreaID: [
          { required: true, validator: validatemouseCode1, trigger: "blur" }
        ],
        TeacherScope: [
          { type: "number", message: "教师规模必须为数字", trigger: "blur" }
        ],
        StudentScope: [
          { type: "number", message: "学生规模必须为数字", trigger: "blur" }
        ],
        ID: [
          {
            required: true,
            max: 9,
            min: 9,
            message: "组织机构代码的长度为九位",
            trigger: "blur"
          }
        ]
      },
      // 下边表格数据
      tableData: [],
      array2: [],
      //  获取的学校
      searchschool: [],
      // 下方学校列表状态
      loadingState: false,
      // 学生登记数
      StudentRegisterCount: "",
      // 学生使用数
      StudentActivedCount: "",
      // 老师登记数
      TeacherRegisterCount: "",
      // 老师使用数
      TeacherActivedCount: "",
      // 搜索学校按钮状态
      loadingState1: false,
      // 更新学校按钮状态
      loadingState2: false,
      // 增加学校学校状态
      loadingState3: false,
      // 学校列表的高度
      schTableheight: 500
    };
  },
  methods: {
    // 选择学校的select
    selectSchool(val) {
      if (val.length <= 0) {
        return;
      } else {
        this.searchschool = [];
        var areaID = val[val.length - 1];
        // 搜索学校时选择的地区ID赋值给新增学校中的地区ID
        this.searchAreasID2 = this.searchAreasID1;
        //获取地区的学校列表
        this.loadingState = true;
        api
          .GetSchoolsOfArea(areaID)
          .then(res => {
            this.loadingState = false;
            this.searchschool = res.data.Data;
          })
          .catch(res => {
            let that = this;
            this.loadingState = false;
            if (res.status == 401) {
              api.reqWarn(that, "您没有权限操作");
            }
            if (res.status == 500) {
              api.reqWarn(that, "服务器错误");
            }
          });
      }
    },
    // 根据关键字查询学校
    searchSchoolName() {
      if (this.schoolKeyName == "") {
        this.$message({ message: "请输入关键字", type: "warning" });
      } else {
        this.loadingState1 = true;
        this.loadingState = true;
        api
          .GetSchoolsLikeName(this.schoolKeyName)
          .then(res => {
            this.loadingState1 = false;
            this.loadingState = false;
            this.searchschool = res.data.Data;
          })
          .catch(res => {
            let that = this;
            this.loadingState1 = false;
            this.loadingState = false;
            if (res.status == 401) {
              api.reqWarn(that, "您没有权限操作");
              return;
            }
          });
      }
    },
    addSchoolVisible() {
      this.addFormVisible = true;
    },
    // 新增学校中选择地区代码
    addSchoolAreasID(val) {
      if (val.length <= 0) {
        return;
      } else {
        var areaID = val[val.length - 1];
        this.addSchoolForm.AreaID = areaID;
      }
    },
    // 新增学校
    addSchool1(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.addSchoolForm.AreaID = this.searchAreasID2[
            this.searchAreasID2.length - 1
          ];
          this.addSchoolForm.ID = this.addSchoolForm.ID.toLowerCase();
          this.loadingState3 = true;
          api
            .AddSchool(this.addSchoolForm)
            .then(res => {
              this.loadingState3 = false;
              let that = this;
              if (res.data.IsSuccess) {
                this.searchschool.unshift(res.data.Data);
                api.reqSuccess(that, res.data.OutputMessage);
              } else {
                api.reqFail(that, res.data.OutputMessage);
              }
            })
            .catch(res => {
              let that = this;
              this.loadingState3 = false;
              if (res.status == 401) {
                api.reqWarn(that, "您没有权限操作");
              }
            });
        }
      });
    },
    // 表格的选择框
    selectTable(row) {
      this.sel = row;
    },
    // 刷新按钮
    // refreshSchool(){

    // },
    // 查看学校详细信息
    watchSchool(index, row) {
      // if (cell.label == '学校全称') {
      var a = row.AreaID;
      a = a.toString();
      var array1 = [];
      var array2 = [];
      for (var i = 0; i < 3; i++) {
        var c = a.substring(2 * i, 2 * i + 2);
        array1.push(c);
      }
      this.watchFormVisible = true;
      this.watchSchoolForm.ID = row.ID;
      if (array1[2] == "00") {
        if (array1[1] == "00") {
          array2.push(Number(a));
        } else {
          array2.push(Number(array1[0] + "0000"));
          array2.push(Number(a));
        }
      } else {
        array2.push(Number(array1[0] + "0000"));
        array2.push(Number(array1[0] + array1[1] + "00"));
        array2.push(Number(a));
      }
      this.searchAreasID3 = array2;
      this.watchSchoolForm.FullName = "";
      this.watchSchoolForm.LinkNameDuty = "";
      this.watchSchoolForm.Address = "";
      this.watchSchoolForm.LinkName = "";
      this.watchSchoolForm.Phone = "";
      this.watchSchoolForm.SchoolLevelName = "";
      this.watchSchoolForm.StudentScope = "";
      this.watchSchoolForm.TeacherScope = "";
      this.watchSchoolForm.EnrollmentConditionName = "";
      this.watchSchoolForm.ID = "";
      // 学生登记数
      this.StudentRegisterCount = "";
      // 学生使用数
      this.StudentActivedCount = "";
      // 老师登记数
      this.TeacherRegisterCount = "";
      // 老师使用数
      this.TeacherActivedCount = "";
      api
        .GetSchoolDetail(row.ID)
        .then(res => {
          let that = this;
          if (res.data.IsSuccess) {
            this.watchSchoolForm.FullName = res.data.Data.School.FullName;
            this.watchSchoolForm.LinkNameDuty =
              res.data.Data.School.LinkNameDuty;
            this.watchSchoolForm.Address = res.data.Data.School.Address;
            this.watchSchoolForm.LinkName = res.data.Data.School.LinkName;
            this.watchSchoolForm.Phone = res.data.Data.School.Phone;
            this.watchSchoolForm.SchoolLevelName =
              res.data.Data.School.SchoolLevelName;
            this.watchSchoolForm.SchoolExtensionLevel =
              res.data.Data.School.SchoolExtensionLevel;
            this.watchSchoolForm.StudentScope =
              res.data.Data.School.StudentScope;
            this.watchSchoolForm.TeacherScope =
              res.data.Data.School.TeacherScope;
            this.watchSchoolForm.EnrollmentConditionName =
              res.data.Data.School.EnrollmentConditionName;
            this.watchSchoolForm.ID = res.data.Data.School.ID;
            this.watchSchoolForm.OLDID = res.data.Data.School.ID;
            // 学生登记数
            this.StudentRegisterCount = res.data.Data.StudentRegisterCount;
            // 学生使用数
            this.StudentActivedCount = res.data.Data.StudentActivedCount;
            // 老师登记数
            this.TeacherRegisterCount = res.data.Data.TeacherRegisterCount;
            // 老师使用数
            this.TeacherActivedCount = res.data.Data.TeacherActivedCount;
          } else {
            api.reqFail(that, res.data.OutputMessage);
          }
        })
        .catch(res => {
          let that = this;
          if (res.status == 401) {
            api.reqWarn(that, "您没有权限操作");
            return;
          }
          api.reqFail(that, res.data.OutputMessage);
        });
      // }
    },
    // 更新学校中选择地区代码
    updataSchoolAreasID(val) {
      if (val.length <= 0) {
        return;
      } else {
        var areaID = val[val.length - 1];
        this.watchSchoolForm.AreaID = areaID;
      }
    },
    // 更新学校信息
    updataSchool(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.watchSchoolForm.AreaID = this.searchAreasID3[
            this.searchAreasID3.length - 1
          ];
          this.watchSchoolForm.ID = this.watchSchoolForm.ID.toLowerCase();
          this.loadingState2 = true;
          api
            .UpdateSchool(this.watchSchoolForm)
            .then(res => {
              this.loadingState2 = false;
              let that = this;
              if (res.data.IsSuccess) {
                this.watchFormVisible = false;
                for (var i = 0; i < this.searchschool.length; i++) {
                  if (this.searchschool[i].ID == this.watchSchoolForm.ID) {
                    this.searchschool[
                      i
                    ].FullName = this.watchSchoolForm.FullName;
                    this.searchschool[i].Phone = this.watchSchoolForm.Phone;
                    this.searchschool[
                      i
                    ].LinkName = this.watchSchoolForm.LinkName;
                    this.searchschool[
                      i
                    ].SchoolLevelName = this.watchSchoolForm.SchoolLevelName;
                    this.searchschool[
                      i
                    ].TeacherScope = this.watchSchoolForm.TeacherScope;
                    this.searchschool[
                      i
                    ].StudentScope = this.watchSchoolForm.StudentScope;
                    this.searchschool[i].Address = this.watchSchoolForm.Address;
                    this.searchschool[
                      i
                    ].LinkNameDuty = this.watchSchoolForm.LinkNameDuty;
                    this.searchschool[
                      i
                    ].EnrollmentConditionName = this.watchSchoolForm.EnrollmentConditionName;
                    this.searchschool[i].ID = this.watchSchoolForm.ID;
                    this.searchschool[
                      i
                    ].SchoolExtensionLevel = this.watchSchoolForm.SchoolExtensionLevel;
                  }
                }
                api.reqSuccess(that, res.data.OutputMessage);
              } else {
                api.reqFail(that, res.data.OutputMessage);
              }
            })
            .catch(res => {
              let that = this;
              this.loadingState2 = false;
              if (res.status == 401) {
                api.reqWarn(that, "您没有权限操作");
                return;
              }
            });
        }
      });
    },
    // 删除学校
    removeSchool() {
      if (this.sel.length <= 0) {
        this.$message.warning("请勾选要删除的学校");
        return;
      }
      var array = [];
      for (var i = 0; i < this.sel.length; i++) {
        array.push(this.sel[i].ID);
      }
      api
        .DeleteSchool(array)
        .then(res => {
          let that = this;
          if (res.data.IsSuccess) {
            for (var i = 0; i < this.sel.length; i++) {
              this.searchschool.splice(
                this.searchschool.indexOf(this.sel[i]),
                1
              );
            }
            api.reqSuccess(that, res.data.OutputMessage);
          } else {
            api.reqFail(that, res.data.OutputMessage);
          }
        })
        .catch(res => {
          let that = this;
          if (res.status == 401) {
            api.reqWarn(that, "您没有权限操作");
            return;
          }
          api.reqFail(that, res.data.OutputMessage);
        });
    }
  },
  mounted() {
    if (sessionStorage.getItem("Code.Areas")) {
      this.areas = $.parseJSON(sessionStorage.getItem("Code.Areas"));
    } else {
      let that = this;
      api
        .GetAreas()
        .then(res => {
          if (res.data.IsSuccess) {
            if (res.data.Data) {
              var Areas = Abp.transData(res.data.Data, "ID", "PID", "children");
              sessionStorage.setItem("Code.Areas", JSON.stringify(Areas));
              this.areas = $.parseJSON(sessionStorage.getItem("Code.Areas"));
            } else {
              console.log("地区获取为空");
            }
          } else {
            api.reqFail(that, res.data.OutputMessage);
          }
        })
        .catch(res => {
          if (res.status == 401) {
            api.reqWarn(that, "您没有权限操作");
            return;
          }
          api.reqFail(that, res.data.OutputMessage);
        });
    }
    this.schTableheight = $(window).height() - 200;
  }
};
</script>
<style lang="scss" scoped>
button.el-button--success {
  background: #00af86;
}
button.el-button--default {
  border-color: transparent;
  background: #f2f2f2;
  &:hover {
    background: #00af86;
    color: #ffffff;
  }
}
button.btn {
  background: #ffffff;
}
h3 {
  margin-top: 20px;
  margin-bottom: 5px;
}
div.cell > a:hover {
  color: #00af86;
  text-decoration: underline;
  cursor: pointer;
}
</style>
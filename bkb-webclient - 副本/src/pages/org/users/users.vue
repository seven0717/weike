<template>
  <el-row>
		<!-- 头 -->
		<el-row>
			<el-col :md="6" :sm="24" :xs="24">
				<el-button type="success" @click="forbiddenUsers"><i class="el-icon-circle-close"></i><span class="screen-big">禁用</span></el-button>
				<el-button @click="startUse"><i class="el-icon-circle-check"></i><span class="screen-big">启用</span></el-button>
				<el-button @click="initPassword"><i class="fa fa-repeat"></i><span class="screen-big"> 初始化密码</span></el-button>
			</el-col>
			<el-col class="big-mar-t" style="float:right" :md="5" :sm="24" :xs="24"> 
				<el-input v-model="usersAccount" placeholder="请输入用户账号" @keyup.enter.native="searchUsers"><el-button style="background:#00af86;color:#fff;border-radius:0 3px 3px 0" slot="append" :loading="loadingState1" icon="search" @click="searchUsers">搜索</el-button ></el-input>
			</el-col>
		</el-row>
		<!-- 内容列表 -->
		<el-row>
			<el-row>
				<h3 style="font-weight:normal">用户列表</h3>
				<el-table class="content-table" :height="schTableheight" :data="usersData" style="width:100%;min-height:500px">
					<el-table-column type="selection" width="60"></el-table-column>
					<el-table-column prop="ID" width='150' label="ID"></el-table-column>
					<el-table-column label="账号" width="200" prop="Account"></el-table-column>
					<el-table-column label="姓名" prop="FullName" width='150'></el-table-column>
					<el-table-column prop="MouseID" label="鼠标码" width='150'></el-table-column>
					<el-table-column prop="Enabled" width='140' label="使用状态"></el-table-column>
					<el-table-column prop="Audited" width='140' label="审核状态"></el-table-column>
					<el-table-column prop="Point" width='140' label="贝壳币"></el-table-column>
					<el-table-column prop="Price" width='140' label="金币"></el-table-column>
					<el-table-column prop="CreatDate" width='200' label="创建日期"></el-table-column>
					<el-table-column prop="LastLoginDate" label="最后登录日期"></el-table-column>
				</el-table>
      		</el-row>
		</el-row>
	</el-row>
</template>

<script>
	export default {
		data (){
			return {
				usersAccount:'',
				schTableheight:500,
				usersData:[],
				// usersData: {
				// 	ID:'',
				// 	Account:'',
				// 	FullName:'',
				// 	MouseID:'',
				// 	Enabled:'',
				// 	Audited:'',
				// 	Point:'',
				// 	Price:'',
				// 	CreatDate:'',
				// 	LastLoginDate:''
				// },
				loadingState:false,
				loadingState1:false,
			}
		},
		methods : {
			// 禁用
			forbiddenUsers () {

			},
			// 启用
			startUse () {

			},
			// 初始化密码
			initPassword () {

			},
			// 搜索用户
			searchUsers () {

			}
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
	button.btn{background:#ffffff;}
	h3{margin-top:20px;margin-bottom:5px;}
	div.cell>a:hover{color:#00af86;text-decoration: underline;cursor:pointer;}
</style>

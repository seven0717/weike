<template>
	<div class="layout">
		<!--框架的头-->
		<div class="layout-header">
			<!--框架左侧头部logo-->
			<div class="layout__header__logo" :class="leftMenustate?'layout__logo_collapse':'layout__logo_expanded'">
				<span><img src="../assets/img/duxue_logo.png"/><span style="line-height: 60px" v-show="!leftMenustate">备课帮</span></span>
			</div>
			<nav class="layout__header_nav">
				<!-- 头部左侧页标题 -->
				<div class="layout__header_title">
					<span>{{$route.name}}</span>
				</div>
				<!--头部右侧图标-->
				<div class="layout__header-menu_right">
					<ul>
						<li>
							<a class="changelog" href="#/changelog" title="更新日志"><i class="fa fa-history"></i></a>
						</li>
						<li>
							<a href="" title="信息"><i class="fa fa-envelope-o"></i></a>
						</li>
						<li>
							<a href="" title="提醒"><i class="fa fa-bell-o"></i></a>
						</li>
						<li>
							<a href="" title="标记"><i class="fa fa-flag-o"></i></a>
						</li>
						<li>
							<el-dropdown class="layout__header-dropdown_right" @command="userLogout">
								<span>
									<div class="layout__header-dropdown_img"></div>
								</span>
								<el-dropdown-menu style="margin-top:20px" slot="dropdown">
									<el-dropdown-item><a style="color:#000" href="#/changedata"><i class="fa fa-pencil-square-o"></i><span class="pad-l5">修改资料</span></a></el-dropdown-item>
									<el-dropdown-item><i class="fa fa-sliders"></i><span class="pad-l5">控制面板</span></el-dropdown-item>
									<el-dropdown-item><i class="fa fa-address-book-o"></i><span class="pad-l5">联系人</span></el-dropdown-item>
									<el-dropdown-item divided><i class="fa fa-question-circle-o"></i><span class="pad-l5">帮助</span></el-dropdown-item>
									<el-dropdown-item divided command="e"><i class="fa fa-sign-out"></i><span class="pad-l5">退出</span></el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</li>
					</ul>
				</div>
			</nav>
		</div>
		<div class="layout__footer">
			<!-- 左侧导航菜单 -->
			<div class="aside1" :class="leftNavmenustate">
				<ul class="left-nav-menu_vertical left-nav-menu_vertical1">
					<!-- 展开按钮 -->
					<el-tooltip :disabled="!leftMenustate" style="border-bottom:2px solid #3d4247;" content="展开" placement="right">
						<li @click="leftMenuCollapse">
							<i class="fa fa-align-justify"></i>
						</li>
					</el-tooltip>
				</ul>
				<ul class="left-nav-menu_vertical left-nav-menu_vertical2">
					<!-- 滚动菜单列表 -->
					<el-tooltip :disabled="!leftMenustate" v-for="(item,index) in leftScrollSidebarMenu" :content="item.Name" placement="right" :key="item.path">
						<a :href="'#/'+item.URI">
							<li>
								<em><i class="fa" :class="item.IconName"></i></em>
								<span v-show="!leftMenustate">{{item.Name}}</span>
							</li>
						</a>   
					</el-tooltip>
				</ul>
					<!-- 更多按钮 -->
				<ul class="left-nav-menu_vertical left-nav-menu_vertical3">
					<el-tooltip :disabled="!leftMenustate" style="border-top:1px solid #3d4247" content="更多" placement="right">
						<li @click="moreSidercontrol">
							<i class="el-icon-arrow-right"></i>
							<span v-show="!leftMenustate" style="font-size:16px">更多</span>
						</li>
					</el-tooltip>
				</ul>
			</div>
			<!-- 更多菜单 -->
			<Moremenu :class="leftMenustate?'mar-l60':'mar-l230'" v-show="moreMenu_collapsed"></Moremenu>
			<!--内容区域-->
			<section :class="leftMenustate?'mar-l60':'mar-l230'" class="content-container" @click="hiddenAll()">
				<transition name="fade" mode="out-in">
					<router-view></router-view>
				</transition>
			</section>
		</div>
	</div>
</template>

<script>
	import Abp from '../Abp/Abp'
	import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
	import Moremenu from './Moremenu'
	export default {
		data() {
			return {
				leftMenustate:false,
				moreMenu_collapsed:false,
				leftNavmenustate:'asideDisplay',
			}
		},
		computed:{
			// state
			...mapState({
				leftScrollSidebarMenu:state=>state.layout.leftScrollSidebarMenu,
				moremenu:state=>state.layout.moremenu
			})
		},
		// 引用组件
		components: {
            Moremenu
        },
		methods: {
			// mutations
			...mapMutations([
            	'CANCEL_MENU',
				'BKB_LOGOUT',
				'BKB_MOREMENU',
			]),
			//左侧导航栏收缩
			leftMenuCollapse () {
				this.leftMenustate = !this.leftMenustate;
				if (this.leftNavmenustate == 'asideHide') {
					this.leftNavmenustate='asideDisplay';
					localStorage.setItem("FavoriteNavbarStyleState", this.leftNavmenustate);
				}else{
					this.leftNavmenustate='asideHide';
					localStorage.setItem("FavoriteNavbarStyleState", this.leftNavmenustate);
				}
			},
			// 更多菜单控制按钮
			moreSidercontrol () {
				// console.log($('.el-tree-node__children').eq(0).css('display','block'))
				// console.log($('.el-tree-node').eq(0).addClass('is-expanded is-current'))
				this.moreMenu_collapsed=!this.moreMenu_collapsed;
				// if(eval('(' + this.$cookie.get('admin@'+JSON.parse(sessionStorage.getItem('UserInfo')).Account+'') + ')')){
				// 	var localStorageMenu =  eval('(' + this.$cookie.get('admin@'+JSON.parse(sessionStorage.getItem('UserInfo')).Account+'') + ')');
				// 	for ( var j = 0; j < localStorageMenu.length; j++ ) {
				// 		for ( var i = 0; i < this.moremenu.length; i++ ) {
				// 			if (this.moremenu[i].children) {
				// 				for ( var a = 0; a < this.moremenu[i].children.length; a++ ) {
				// 					if (this.moremenu[i].children[a].ID == $.parseJSON(localStorageMenu[j]).ID) {
				// 						this.moremenu[i].children[a].bool = false;
				// 					}
				// 				}
				// 			}
				// 		}
				// 	}
				// }
				if(eval('(' + localStorage.getItem('admin@'+JSON.parse(sessionStorage.getItem('UserInfo')).Account+'') + ')')){
					var localStorageMenu =  eval('(' + localStorage.getItem('admin@'+JSON.parse(sessionStorage.getItem('UserInfo')).Account+'') + ')');
					for ( var j = 0; j < localStorageMenu.length; j++ ) {
						for ( var i = 0; i < this.moremenu.length; i++ ) {
							if (this.moremenu[i].children) {
								for ( var a = 0; a < this.moremenu[i].children.length; a++ ) {
									if (this.moremenu[i].children[a].ID == $.parseJSON(localStorageMenu[j]).ID) {
										this.moremenu[i].children[a].bool = false;
									}
								}
							}
						}
					}
				}
			},
			// 点击内容部分隐藏窗口
			hiddenAll(){
				this.moreMenu_collapsed = false;
			},
			// 用户退出
			userLogout(command){
				if (command == 'e') {
					this.BKB_LOGOUT();
					this.$router.replace({path:'/login'})
				}
			}
		},
		beforeMount:function(store, data, node){
			// 获取本地的左侧菜单状态
			if (localStorage.getItem("FavoriteNavbarStyleState") == null) {
				this.leftMenustate = true;
			} else if (localStorage.getItem("FavoriteNavbarStyleState") == 'asideHide') {
				this.leftMenustate = false;
				this.leftNavmenustate = 'asideHide'
			} else {
				this.leftMenustate = true;
				this.leftNavmenustate = 'asideDisplay'
			};
			// 获取本地的菜单
			var localStorageMenu,primiteMenu;
			// if (window.localStorage) {
	        //     localStorage.getItem("FavoriteMenu");
	        //     localStorage.getItem('admin@'+JSON.parse(sessionStorage.getItem('UserInfo')).Account+'');
	        //     localStorageMenu = eval('(' + localStorage.getItem("FavoriteMenu") + ')');
				primiteMenu = eval('(' + sessionStorage.getItem("GlobalMenu") + ')');
	        // } else {
	            // localStorageMenu = eval('(' + this.$cookie.get('admin@'+JSON.parse(sessionStorage.getItem('UserInfo')).Account+'') + ')');
	            localStorageMenu = eval('(' + localStorage.getItem('admin@'+JSON.parse(sessionStorage.getItem('UserInfo')).Account+'') + ')');
	        // };
	        if (localStorageMenu == undefined||!primiteMenu) {
	            // console.log("数据为空");
	        }else {
				this.leftScrollSidebarMenu.length = 0;
	            for ( var j = 0; j < localStorageMenu.length; j++ ) {
					var i = 0;
					while (i < primiteMenu.length) {
						if (primiteMenu[i].ID == $.parseJSON(localStorageMenu[j]).ID) {
							this.leftScrollSidebarMenu.push($.parseJSON(localStorageMenu[j]));
							this.CANCEL_MENU(localStorageMenu[j]);
						}
						i++;
					}
	            }
	        }
		}
	}

</script>

<style lang="scss" scoped></style>
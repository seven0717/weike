<template>
    <!-- 更多菜单 -->
    <div class="moreMenu" style="width:400px;background-color:#fff;position:fixed;z-index:2;top:60px;bottom:0px">
        <div class="moreMenu_header">
            <span>所有菜单</span>
        </div>
        <div class="moreMenu_content1">
            <el-input
                placeholder="输入关键字进行过滤"
                v-model="filterText" style="width:95%;padding-left:10px">
            </el-input>
        </div>
        <div class="moreMenu_content2">
            <el-tree
                class="menu-tree"
                :data="moremenu"
                :props="defaultProps"
                :filter-node-method="filterNode"
                default-expand-all
                ref="tree2"
                node-key="id"
                accordion
                :expand-on-click-node="true"
                :render-content="renderContent">
            </el-tree>
        </div>
        <div class="moreMenuFoot" style="text-align: center;line-height:50px;font-size:16px">{{menuDescription}}</div>
    </div>
</template>

<script>
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
  export default {
    data() {
      return {
        filterText: '',
        defaultProps: {
            children: 'children',
            label: 'Name',
        },
        menuDescription:''
      }
    },
    watch: {
        filterText(val) {
            this.$refs.tree2.filter(val);
        }
    },
    computed:{
        // state
        ...mapState({
            moremenu:state=>state.layout.moremenu,
            leftScrollSidebarMenu:state=>state.layout.leftScrollSidebarMenu,
            localStorageMenu:state=>state.layout.localStorageMenu,
            // account:state=>state.login.account
        })
    },
    methods:{
        // mutations
        ...mapMutations([
            'COOLLECT_MENU',
        ]),
        ...mapActions([
            'bgmoremenu',
        ]),
        // 对树节点进行筛选时执行的方法
        filterNode(value, data) {
            if (!value) return true;
            return data.Name.indexOf(value) !== -1;
        },
        renderContent(h, { node, data, store }) {
            if (!data.URI) {
                return(
                <span>
                    <span>
                        <span style="padding-left:10px">{data.Name}</span>
                    </span>
                </span>);
            }else{
                return (
                <div style="width: 355px;display: inline-block;" on-mouseover={ () => this.append(store, data, node) }>
                    <span>
                        <em style="width: 20px;height: 20px;display: inline-block;text-align: center;"><i class={'fa '+data.IconName}></i></em>
                        <a href={'#/'+data.URI}><span style="padding-left:5px">{data.Name}</span></a>
                    </span>
                    <span style="float:right;margin-right:15px">
                        <i style="font-size:18px" class={{ 'fa fa-star-o': data.bool,'fa fa-star': !data.bool, collectMenuColor:!data.bool }} on-click={ () => this.collectButton(store, data, node) }></i>
                    </span>
                </div>
                );
            }
        },
        // 收藏按钮
        collectButton(store, data, node) {
            var nowTime = new Date;
            if (data.bool) {
                var x = { 'Name': data.Name, 'IconName': data.IconName , 'ID': data.ID, 'URI': data.URI };
                this.COOLLECT_MENU(x);
                var z = '{"Name":"' + data.Name + '","IconName":"' + data.IconName + '","ID":"' + data.ID + '","URI":"' + data.URI + '"}';
                this.localStorageMenu.push(z);
                data.bool = false;
                // if (window.localStorage){
                    localStorage.setItem('admin@'+JSON.parse(sessionStorage.getItem('UserInfo')).Account+'', JSON.stringify(this.localStorageMenu));
                // } else {
                    // this.$cookie.set('admin@local', JSON.stringify(this.localStorageMenu), { expires: nowTime.setDate(nowTime.getDate() + 21)});
                    // this.$cookie.set('admin@'+JSON.parse(sessionStorage.getItem('UserInfo')).Account+'', JSON.stringify(this.localStorageMenu), { expires: nowTime.setDate(nowTime.getDate() + 21)});
                // }
            }else{
                for (var i = 0; i <= this.leftScrollSidebarMenu.length; i++) {
                    if (this.leftScrollSidebarMenu[i].ID == data.ID) {
                        this.leftScrollSidebarMenu.splice(i,1);
                        this.localStorageMenu.splice(i,1);
                        data.bool = true;
                        break;
                    }
                }
                
                // if (window.localStorage){
                    localStorage.setItem('admin@'+JSON.parse(sessionStorage.getItem('UserInfo')).Account+'', JSON.stringify(this.localStorageMenu));
                // } else {
                    // this.$cookie.set('admin@local', JSON.stringify(this.localStorageMenu), { expires: nowTime.setDate(nowTime.getDate() + 21)});
                    // this.$cookie.set('admin@'+JSON.parse(sessionStorage.getItem('UserInfo')).Account+'', JSON.stringify(this.localStorageMenu), { expires: nowTime.setDate(nowTime.getDate() + 21)});
                // }
            }
        },
        append(store, data, node){
            this.menuDescription = data.Description;
        }
    },
    mounted() {
        this.bgmoremenu();
    }
  }

</script>

<style lang="scss" scoped>
</style>
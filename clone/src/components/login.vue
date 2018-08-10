<template>
	<div id="login">
		<input type="text" placeholder="账号" v-model="lo.users">
		<input type="text" placeholder="密码" v-model="lo.pwds">
		<button @click="dian">点击</button>
	</div>
</template>

<script>
	export default{
		name:"login",
		data(){
			return {
				lo:{
					users:'',
					pwds:''
				},
				token:'123'
			}
		},
		methods:{
			dian(){
				this.$store.commit('us',this.token);
			}
		}
	};
</script>
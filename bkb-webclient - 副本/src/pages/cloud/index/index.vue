<template>
<div>
    <button @click="czm">4554</button>
    <span v-for="item in list">{{item}}</span>
    <multiple-file-uploader successMessagePath="上传成功" errorMessagePath="" :minItems="1"></multiple-file-uploader>
</div>
</template>

<script>
    import MultipleFileUploader from '../../../components/MultipleFileUploader'
    import { mapActions, mapState, mapMutations } from 'vuex'
    export default {
        computed:{
            ...mapState({
                list:state=>state.layout.list
            })
        },
        name: 'MainApp',
        components: {
            MultipleFileUploader,
        },
        mounted() {
            
        },
        methods:{
            ...mapMutations([
				'GET',
			]),
            ...mapActions([
                'get'
            ]),
            czm(){
                this.GET('');
            }
        }
    }
</script>

<style lang="scss" scoped>
    
</style>
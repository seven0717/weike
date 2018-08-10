<template>
    <div style="text-align:center">
        <p class="page-container">404 page not found</p>
        <br>
        <button @click="reHome" class="home">返回首页</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    computed:{
        // state
        ...mapState({
            localStorageMenu:state=>state.layout.localStorageMenu
        })
    },
    methods:{
        reHome () {
          this.$router.replace({ path: '/' });
        }
    },
    mounted(){
        this.localStorageMenu.length = 0;
    }
}
</script>


<style lang="scss" scoped>
    .page-container {
        margin-top: 20%;
        font-size: 30px;
        text-align: center;
        color: rgb(192, 204, 218);
    }
    .home{
        font-size: 18px;
    }
</style>
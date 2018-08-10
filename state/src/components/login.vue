<template>
  <div class="hello">
   <input type="text" v-model="ipt">
   <button @click="dian">登入</button>
  </div>
</template>

<script>
 import { mapActions,mapState,mapMutations } from 'vuex';
export default {

  name: 'HelloWorld',
  data () {
    return {
      ipt: ''
    }
  },
  methods:{
    // ...mapMutations('ADD',[this.ipt]);
    dian(){
      console.log(this);

      this.$store.commit('ADD',this.ipt);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

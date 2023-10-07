<template>
<h1>Ivan Reaction-Timer</h1>
<button @click="start">play</button>
<block/>
</template>

<script>
import block from './components/Block.vue'
export default {
  name: 'App',
  components: { block},
  data(){
    return{
      plays:false,
      delay:null,
      
    }
  },
  methods:{
    start(){
      this.delay=2000 + Math.random()*5000,
      this.plays=true,
      console.log(this.delay)

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

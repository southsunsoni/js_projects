<template>
 <h1>ivan Reaction Timer</h1>
 <button @click="start" :disabled="plays">play</button>
 <Block v-if="plays" :Delay="Delay"/>
</template>

<script>
import Block from './components/Block.vue'

export default {
  name: 'App',
  components: {Block},
  data(){
    return{
      plays:false,
      Delay:null
    }
  },
  methods:{
    start(){
      this.Delay=2000+Math.random()*5000,
      this.plays=true

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
  color: #3f6489;
  margin-top: 60px;
}
</style>
